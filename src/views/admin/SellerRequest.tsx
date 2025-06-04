import { useState } from "react";
import Pagination from "../Pagination";
import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";


type SellerRequestDataProps = {
  id: number;
  name: string;
  email: string; 
  paymentStatus: "pending" | "completed" | "failed"; // Union for status
  status: "active" | "deactive"
};

const SellerRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const sellersStatusData: SellerRequestDataProps[] = [
    {
      id: 1,
      name: "rahul",
      email: "rahul@gmail.com",
      paymentStatus: "pending",
      status:"active"
    },
    {
      id: 2,
      name: "raj",
      email: "raj@gmail.com",
      paymentStatus: "pending",
      status:"active"
    },
    {
      id: 3,
      name: "shyam",
      email: "shyam@gmail.com",
      paymentStatus: "completed",
      status:"active"
    },
    {
      id: 4,
      name: "sohan",
      email: "sohan@gmail.com",
      paymentStatus: "pending",
      status:"active"
    },
    {
      id: 5,
      name: "pranjal",
      email: "pranjal@gmail.com",
      paymentStatus: "pending",
      status:"deactive"
    },
    {
      id: 6,
      name: "shivam",
      email: "shivam@gmail.com",
      paymentStatus: "pending",
      status:"active"
    },
  ];
  

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
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((seller) => (
                <tr key={seller.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b">{seller.id}</td>
                  

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
                    {/* <button
                      onClick={() => navigate(`/admin/dashboard/seller-details`)}
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      <FaEye />
                    </button> */}
                    <NavLink
                      to={`/admin/dashboard/seller-details/${seller.id}`}
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      <FaEye />
                    </NavLink>
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

export default SellerRequest;
