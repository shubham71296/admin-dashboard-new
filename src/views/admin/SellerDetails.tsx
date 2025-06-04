import ProfileImg from "../../assets/profileimage.png";

const SellerDetails = () => {
  return (
    <div className="p-2">
      <div className="bg-blue-100 p-4 rounded-md">
        <span className="font-bold text-xl text-blue-700">Seller Details</span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 p-4 bg-white shadow rounded-xl">
          {/* Profile Image */}
          <div className="flex justify-center items-center">
            <img
              src={ProfileImg}
              alt="Profile"
              className="w-28 h-28 rounded-md border-4 border-blue-500 shadow-md object-cover"
            />
          </div>

          {/* Basic Info */}
          <div className="bg-blue-100 p-4 rounded-lg shadow-inner">
            <h2 className="text-lg font-semibold text-blue-800 mb-3">Basic Info</h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Name:</strong> Rahul Sharma</li>
              <li><strong>Email:</strong> Rahul@gmail.com</li>
              <li><strong>Role:</strong> Seller</li>
              <li><strong>Status:</strong> <span className="text-green-600 font-medium">Active</span></li>
              <li><strong>Payment Status:</strong> <span className="text-green-600 font-medium">Active</span></li>
            </ul>
          </div>

          {/* Address Info */}
          <div className="bg-blue-100 p-4 rounded-lg shadow-inner">
            <h2 className="text-lg font-semibold text-blue-800 mb-3">Address</h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Shop Name:</strong> Fila</li>
              <li><strong>Division:</strong> Indore</li>
              <li><strong>District:</strong> Indore</li>
              <li><strong>State:</strong> Madhya Pradesh</li>
            </ul>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Status Select */}
          <select className="p-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>

          {/* Submit Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
