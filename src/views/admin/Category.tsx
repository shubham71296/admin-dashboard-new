import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import cameraImg from "../../assets/camera.jpeg";
import mobileImg from "../../assets/mobile.jpeg";
import shoesImg from "../../assets/shoes-1.jpeg";
import watchImg from "../../assets/watch-1.jpeg";
import { useState } from "react";

interface categoryProps {
  id: number;
  image: string;
  name: string;
}

const Category = () => {
  const products_category: categoryProps[] = [
    { id: 1, image: cameraImg, name: "camera" },
    { id: 2, image: mobileImg, name: "mobile" },
    { id: 3, image: shoesImg, name: "shoes" },
    { id: 4, image: watchImg, name: "watch" },
  ];

  const [categoryName, setCategoryName] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

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
  };

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
                {products_category.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border-b">{product.id}</td>
                    <td className="px-4 py-2 border-b">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border-b">{product.name}</td>
                    <td className="px-4 py-2 border-b space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 transition">
                        <FaEye />
                      </button>
                      <button className="text-green-600 hover:text-green-800 transition">
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
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter category name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category Image
              </label>

              <div className="flex items-center space-x-4">
                <label
                  htmlFor="imageInput"
                  className="cursor-pointer inline-flex items-center px-4 py-2 text-blue-600 text-sm font-medium rounded-md shadow hover:bg-blue-700 hover:text-white transition"
                >
                  Upload Image
                </label>
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
                <div className="mt-3">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-32 h-32 object-cover border rounded-md shadow"
                  />
                </div>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition w-full md:w-auto"
            >
              Add Category
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Category;
