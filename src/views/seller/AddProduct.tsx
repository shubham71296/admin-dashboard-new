import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const AddProduct = () => {
  //   const [imageFile, setImageFile] = useState<File | null>(null);
  //   const [imagePreview, setImagePreview] = useState<string | null>(null);

  //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const file = e.target.files?.[0];
  //     if (file) {
  //       setImageFile(file);
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         if (typeof reader.result === "string" || reader.result === null) {
  //           setImagePreview(reader.result);
  //         }
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   };

  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newPreviews: string[] = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          newPreviews.push(reader.result);
          if (newPreviews.length === files.length) {
            setImageFiles((prev) => [...prev, ...files]);
            setImagePreviews((prev) => [...prev, ...newPreviews]);
          }
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleUpdateImage = (index: number, file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        const updatedPreviews = [...imagePreviews];
        const updatedFiles = [...imageFiles];
        updatedPreviews[index] = reader.result;
        updatedFiles[index] = file;
        setImagePreviews(updatedPreviews);
        setImageFiles(updatedFiles);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteImage = (index: number) => {
    const updatedPreviews = [...imagePreviews];
    const updatedFiles = [...imageFiles];
    updatedPreviews.splice(index, 1);
    updatedFiles.splice(index, 1);
    setImagePreviews(updatedPreviews);
    setImageFiles(updatedFiles);
  };

  const handleReplaceImage = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      handleUpdateImage(index, file);
    }
  };

  return (
    <div className="p-2">
      <div className="bg-blue-100 p-4 rounded-md">
        <span className="font-bold text-xl text-blue-700">Add Products</span>
        <form
          //onSubmit={handleSubmit}
          className="bg-white p-4 rounded shadow-md w-full mt-5"
        >
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
            <div className="mb-4">
              <label className="block text-sm font-medium text-blue-700 mb-1">
                Product Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter category name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-blue-700 mb-1">
                Brand Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter category name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-blue-700 mb-1">
                Category
              </label>
              <select
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="camera">Camera</option>
                <option value="mobile">Mobile</option>
                <option value="shoes">Shoes</option>
                <option value="watch">Watch</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-blue-700 mb-1">
                Product Stock
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter category name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-blue-700 mb-1">
                Price
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter category name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-blue-700 mb-1">
                Discount
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter category name"
              />
            </div>

            <div className="mb-4 col-span-full">
              <label className="block text-sm font-medium text-blue-700 mb-1">
                Description
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter category name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Select Image
              </label>

              {/* Upload Block Container */}
              <div
                className="w-full border-2 border-dashed border-blue-400 rounded-md p-6 text-center cursor-pointer hover:bg-blue-50 transition"
                onClick={() => document.getElementById("imageUpload")?.click()}
              >
                <p className="text-blue-600 font-medium">Click to upload</p>
                <p className="text-sm text-gray-500">
                  Supported: JPG, PNG, JPEG
                </p>
              </div>

              {/* Hidden input field */}
              <input
                type="file"
                multiple
                id="imageUpload"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />

              {/* {imagePreview && (
                <div className="relative inline-block mt-3 w-32 h-32">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover border rounded-md shadow"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImageFile(null);
                      setImagePreview(null);
                    }}
                    className="absolute top-1 right-1 bg-white text-red-600 p-1 rounded-full shadow hover:bg-red-100"
                    title="Remove Image"
                  >
                    <FaTimes className="w-4 h-4" />
                  </button>
                </div>
              )} */}

              {imagePreviews.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {imagePreviews.map((src, index) => (
                    <div key={index} className="relative w-24 h-24">
                      <img
                        src={src}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-full object-cover border rounded-md shadow"
                      />
                      {/* Delete Icon */}
                      <button
                        type="button"
                        onClick={() => handleDeleteImage(index)}
                        className="absolute -top-1 -right-1 bg-white text-red-600 p-1 rounded-full shadow hover:bg-red-100"
                        title="Delete Image"
                      >
                        ✕
                      </button>

                      {/* Replace Input (hidden) */}
                      <label
                        htmlFor={`replaceImage-${index}`}
                        className="absolute -bottom-1 left-0 right-0 text-xs text-center bg-white text-blue-600 cursor-pointer hover:underline rounded"
                      >
                        Replace
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        id={`replaceImage-${index}`}
                        className="hidden"
                        onChange={(e) => handleReplaceImage(e, index)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
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
  );
};

export default AddProduct;
