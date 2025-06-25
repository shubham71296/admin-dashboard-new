import { FaEye, FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import toast from "react-hot-toast";
import {
  clearMessages,
  category_add,
  get_category,
  category_update,
} from "../../redux/reducers/categoryReducer";

interface categoryItem {
  _id: string;
  category_name: string;
  category_image: string;
}

const Category = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { loader, errorMessage, successMessage, categories } = useSelector(
    (state: RootState) => state.category
  );

  const [categoryName, setCategoryName] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [categoryId, setCategoryId] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string" || reader.result === null) {
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEditing && categoryId) {
      dispatch(category_update({ categoryId, categoryName, imageFile }));
    } else {
      dispatch(category_add({ categoryName, imageFile }));
    }
  };

  useEffect(() => {
    dispatch(get_category());
  }, []);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(clearMessages());
    }
    if (successMessage) {
      toast.success(successMessage);
      setIsEditing(false);
      setCategoryId(null);
      setCategoryName("");
      setImagePreview(null);
      setImageFile(null);
      dispatch(get_category());
      dispatch(clearMessages());
    }
  }, [errorMessage, successMessage]);

  return (
    <div className="p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Category List */}
        <div className="bg-blue-100 rounded-md p-3">
          <h2 className="font-bold text-xl text-blue-700 mb-2">
            Category List
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow text-sm mt-3 rounded-md">
              <thead className="bg-blue-300 text-blue-900">
                <tr>
                  <th className="text-left px-4 py-2">No</th>
                  <th className="text-left px-4 py-2">Image</th>
                  <th className="text-left px-4 py-2">Name</th>
                  <th className="text-left px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((item: categoryItem) => (
                  <tr key={item._id} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border-b">
                      {item._id.slice(0, 5) + "..."}
                    </td>
                    <td className="px-4 py-2 border-b">
                      <img
                        src={item.category_image}
                        alt={item.category_name}
                        className="w-10 h-10 object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border-b">{item.category_name}</td>
                    <td className="px-4 py-2 border-b space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 transition">
                        <FaEye />
                      </button>
                      <button
                        className="text-green-600 hover:text-green-800 transition"
                        onClick={() => {
                          setIsEditing(true);
                          setCategoryId(item._id);
                          setCategoryName(item.category_name);
                          setImagePreview(item.category_image);
                        }}
                      >
                        <FaEdit />
                      </button>
                      <button className="text-red-600 hover:text-red-800 transition">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Category Form */}
        <div className="bg-blue-100 rounded-md p-3">
          <h2 className="font-bold text-xl text-blue-700 mb-2">Add Category</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-4 rounded shadow-md w-full mt-5"
          >
            <div className="mb-4">
              <label className="block text-sm font-medium text-blue-700 mb-1">
                Category Name
              </label>
              <input
                required
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter category name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-blue-600 mb-1">
                Category Image
              </label>

              <div className="flex items-center space-x-4">
                {!imagePreview && (
                  <label
                    htmlFor="imageInput"
                    className="cursor-pointer inline-flex items-center px-4 py-2 text-blue-600 text-sm font-medium rounded-md shadow hover:bg-blue-700 hover:text-white transition"
                  >
                    Upload Image
                  </label>
                )}
                <span
                  id="file-name"
                  className="text-gray-600 text-sm truncate max-w-[200px]"
                >
                  {imageFile?.name || "no choosen file"}
                </span>
              </div>

              <input
                type="file"
                id="imageInput"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />

              {imagePreview && (
                <div className="relative mt-3 inline-block">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-32 h-32 object-cover border rounded-md shadow"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImagePreview(null);
                      setImageFile(null);
                      const fileInput = document.getElementById(
                        "imageInput"
                      ) as HTMLInputElement;
                      if (fileInput) fileInput.value = "";
                    }}
                    className="absolute top-[-8px] right-[-8px] bg-red-600 text-white rounded-full p-1 hover:bg-red-700 transition"
                  >
                    <FaTimes size={12} />
                  </button>
                </div>
              )}
            </div>

            {/* <button
              type="submit"
              disabled={loader || !imageFile}
              className={`w-full py-2 rounded-lg transition flex items-center justify-center gap-2
            ${
              loader || !imageFile
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }
            `}
            >
              {loader ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                </>
              ) : (
                <>{isEditing ? "Update Category" : "Add Category"}</>
              )}
            </button> */}

            <button
              type="submit"
              disabled={
                loader ||
                (!isEditing && !imageFile) ||
                (isEditing && !imagePreview)
              }
              className={`w-full py-2 rounded-lg transition flex items-center justify-center gap-2
    ${
      loader || (!isEditing && !imageFile) || (isEditing && !imagePreview)
        ? "bg-blue-400 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700 text-white"
    }
  `}
            >
              {loader ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : (
                <>{isEditing ? "Update Category" : "Add Category"}</>
              )}
            </button>

            {isEditing && (
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setCategoryId(null);
                  setCategoryName("");
                  setImagePreview(null);
                  setImageFile(null);
                }}
                className="mt-3 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel Update
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Category;
