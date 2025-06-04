import { useState } from "react";
import Pagination from "../Pagination";
import { FaEye } from "react-icons/fa";
import cameraImg from "../../assets/camera.jpeg";
import mobileImg from "../../assets/mobile.jpeg";
import shoesImg from "../../assets/shoes-1.jpeg";
import watchImg from "../../assets/watch-1.jpeg";

type SellerDataProps = {
  id: number;
  image: string; // If imported from assets, it's usually a string (path or base64)
  name: string;
  shopName: string;
  paymentStatus: "pending" | "completed" | "failed"; // Union for status
  email: string;
  division: string;
  district: string;
};

const Sellers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const sellersData: SellerDataProps[] = [
    {
      id: 1,
      image: watchImg,
      name: "rahul",
      shopName: "fila",
      paymentStatus: "pending",
      email: "rahul@gmail.com",
      division: "manpur",
      district: "indore",
    },
    {
      id: 2,
      image: shoesImg,
      name: "raj",
      shopName: "fila",
      paymentStatus: "pending",
      email: "raj@gmail.com",
      division: "mhow",
      district: "indore",
    },
    {
      id: 3,
      image: mobileImg,
      name: "shyam",
      shopName: "fila",
      paymentStatus: "pending",
      email: "shyam@gmail.com",
      division: "manpur",
      district: "indore",
    },
    {
      id: 4,
      image: mobileImg,
      name: "sohan",
      shopName: "fila",
      paymentStatus: "pending",
      email: "sohan@gmail.com",
      division: "pithampur",
      district: "indore",
    },
    {
      id: 5,
      image: watchImg,
      name: "pranjal",
      shopName: "fila",
      paymentStatus: "pending",
      email: "pranjal@gmail.com",
      division: "rau",
      district: "indore",
    },
    {
      id: 6,
      image: cameraImg,
      name: "shivam",
      shopName: "fila",
      paymentStatus: "pending",
      email: "shivam@gmail.com",
      division: "manpur",
      district: "indore",
    },
  ];
  const handleView = (seller: SellerDataProps) =>
    alert(`Viewing order: ${seller.id}`);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = sellersData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="p-2">
      <div className="bg-blue-100 p-4 rounded-md">
        <span className="font-bold text-xl text-blue-700">Sellers</span>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow text-sm mt-3 rounded-md">
            <thead className="bg-blue-300">
              <tr>
                <th className="text-left px-4 py-2">Id</th>
                <th className="text-left px-4 py-2">Image</th>
                <th className="text-left px-4 py-2">Name</th>
                <th className="text-left px-4 py-2">Shop Name</th>
                <th className="text-left px-4 py-2">Payment Status</th>
                <th className="text-left px-4 py-2">Email</th>
                <th className="text-left px-4 py-2">Division</th>
                <th className="text-left px-4 py-2">District</th>
                <th className="text-left px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((seller) => (
                <tr key={seller.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b">{seller.id}</td>
                  <td className="px-4 py-2 border-b">
                    <img
                      src={seller.image}
                      alt={seller.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                  </td>

                  <td className="px-4 py-2 border-b">{seller.name}</td>
                  <td className="px-4 py-2 border-b">{seller.shopName}</td>
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

                  <td className="px-4 py-2 border-b">{seller.email}</td>
                  <td className="px-4 py-2 border-b">{seller.division}</td>
                  <td className="px-4 py-2 border-b">{seller.district}</td>

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
          totalItems={sellersData.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
        {/* Pagination Below Table */}
      </div>
    </div>
  );
};

export default Sellers;
