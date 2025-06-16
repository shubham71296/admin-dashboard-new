import { useState } from "react";
import Pagination from "../Pagination";
import { FaEye } from "react-icons/fa";


type orderDataProps = {
  orderId: number;
  price: string; 
  paymentStatus: "pending" | "completed" | "failed"; // Union for status
  orderStatus: "pending" | "completed" | "failed"; // Union for status
};

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const Orders: orderDataProps[] = [
    {
      orderId: 1,
      price: "$100",
      paymentStatus: "pending",
      orderStatus: "pending"
    },
    {
      orderId: 2,
      price: "$200",
      paymentStatus: "pending",
      orderStatus: "pending"
    },
    {
      orderId: 3,
      price: "$300",
      paymentStatus: "pending",
      orderStatus: "pending"
    },
    {
      orderId: 4,
      price: "$100",
      paymentStatus: "pending",
      orderStatus: "pending"
    },
    {
      orderId: 5,
      price: "$100",
      paymentStatus: "pending",
      orderStatus: "pending"
    },
    {
      orderId: 6,
      price: "$100",
      paymentStatus: "pending",
      orderStatus: "pending"
    },
  ];
  const handleView = (order: orderDataProps) =>
    alert(`Viewing order: ${order.orderId}`);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = Orders.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="p-2">
      <div className="bg-blue-100 p-4 rounded-md">
        <span className="font-bold text-xl text-blue-700">Deactive Sellers</span>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow text-sm mt-3 rounded-md">
            <thead className="bg-blue-300">
              <tr>
                <th className="text-left px-4 py-2">Order Id</th>
                <th className="text-left px-4 py-2">Price</th>
                <th className="text-left px-4 py-2">Payment Status</th>
                <th className="text-left px-4 py-2">Order Status</th>
                <th className="text-left px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order,index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b">{order.orderId}</td>
                  <td className="px-4 py-2 border-b">{order.price}</td>
                  <td className="px-4 py-2 border-b">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded ${
                        order.paymentStatus === "completed"
                          ? "bg-green-200 text-green-800"
                          : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {order.paymentStatus}
                    </span>
                  </td>
                  
                  <td className="px-4 py-2 border-b">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded ${
                        order.orderStatus === "completed"
                          ? "bg-green-200 text-green-800"
                          : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {order.orderStatus}
                    </span>
                  </td>
                  
                  
                  <td className="px-4 py-2 border-b space-x-2">
                    <button
                      onClick={() => handleView(order)}
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
          totalItems={Orders.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
        {/* Pagination Below Table */}
      </div>
    </div>
  );
};

export default Orders;
