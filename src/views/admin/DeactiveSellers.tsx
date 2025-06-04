import { useState } from "react";
import Pagination from "../Pagination";
import { FaEye } from "react-icons/fa";
import cameraImg from "../../assets/camera.jpeg";
import mobileImg from "../../assets/mobile.jpeg";
import shoesImg from "../../assets/shoes-1.jpeg";
import watchImg from "../../assets/watch-1.jpeg";

type DeactivateSellerDataProps = {
  no: number;
  image: string; // If imported from assets, it's usually a string (path or base64)
  name: string;
  email: string; 
  paymentStatus: "pending" | "completed" | "failed"; // Union for status
  status: "active" | "deactive"
};

const DeactiveSellers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const sellersStatusData: DeactivateSellerDataProps[] = [
    {
      no: 1,
      image: watchImg,
      name: "rahul",
      email: "rahul@gmail.com",
      paymentStatus: "pending",
      status:"active"
    },
    {
      no: 2,
      image: shoesImg,
      name: "raj",
      email: "raj@gmail.com",
      paymentStatus: "pending",
      status:"active"
    },
    {
      no: 3,
      image: mobileImg,
      name: "shyam",
      email: "shyam@gmail.com",
      paymentStatus: "completed",
      status:"active"
    },
    {
      no: 4,
      image: mobileImg,
      name: "sohan",
      email: "sohan@gmail.com",
      paymentStatus: "pending",
      status:"active"
    },
    {
      no: 5,
      image: watchImg,
      name: "pranjal",
      email: "pranjal@gmail.com",
      paymentStatus: "pending",
      status:"deactive"
    },
    {
      no: 6,
      image: cameraImg,
      name: "shivam",
      email: "shivam@gmail.com",
      paymentStatus: "pending",
      status:"active"
    },
  ];
  const handleView = (seller: DeactivateSellerDataProps) =>
    alert(`Viewing order: ${seller.no}`);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = sellersStatusData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="p-2">
      <div className="bg-blue-100 p-4 rounded-md">
        <span className="font-bold text-xl text-blue-700">Deactive Sellers</span>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow text-sm mt-3 rounded-md">
            <thead className="bg-blue-300">
              <tr>
                <th className="text-left px-4 py-2">Id</th>
                <th className="text-left px-4 py-2">Image</th>
                <th className="text-left px-4 py-2">Name</th>
                <th className="text-left px-4 py-2">Email</th>
                <th className="text-left px-4 py-2">Payment Status</th>
                <th className="text-left px-4 py-2">Status</th>
                <th className="text-left px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((seller) => (
                <tr key={seller.no} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b">{seller.no}</td>
                  <td className="px-4 py-2 border-b">
                    <img
                      src={seller.image}
                      alt={seller.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                  </td>

                  <td className="px-4 py-2 border-b">{seller.name}</td>
                  <td className="px-4 py-2 border-b">{seller.email}</td>
                  <td className="px-4 py-2 border-b">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded ${
                        seller.paymentStatus === "completed"
                          ? "bg-green-200 text-green-800"
                          : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {seller.paymentStatus}
                    </span>
                  </td>

                  
                  <td className="px-4 py-2 border-b">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded ${
                        seller.status === "active"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {seller.status}
                    </span>
                  </td>

                  <td className="px-4 py-2 border-b space-x-2">
                    <button
                      onClick={() => handleView(seller)}
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          totalItems={sellersStatusData.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
        {/* Pagination Below Table */}
      </div>
    </div>
  );
};

export default DeactiveSellers;
