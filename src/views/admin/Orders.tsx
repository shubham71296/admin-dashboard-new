import { FaEye } from "react-icons/fa";
import Pagination from "../Pagination"; // Adjust path if needed
import { useState } from "react";
import { NavLink } from "react-router-dom";

type OrderProps = {
  id: string;
  price: number;
  paymentStatus: "Paid" | "Unpaid";
  orderStatus: "Processing" | "Shipped" | "Delivered" | "Cancelled";
};

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const OrdersData: OrderProps[] = [
    { id: "ORD001", price: 120, paymentStatus: "Paid", orderStatus: "Processing" },
    { id: "ORD002", price: 250, paymentStatus: "Unpaid", orderStatus: "Shipped" },
    { id: "ORD003", price: 99.99, paymentStatus: "Paid", orderStatus: "Delivered" },
    { id: "ORD004", price: 120, paymentStatus: "Paid", orderStatus: "Processing" },
    { id: "ORD005", price: 250, paymentStatus: "Unpaid", orderStatus: "Shipped" },
    { id: "ORD006", price: 99.99, paymentStatus: "Paid", orderStatus: "Delivered" },
    { id: "ORD007", price: 120, paymentStatus: "Paid", orderStatus: "Processing" },
    { id: "ORD008", price: 250, paymentStatus: "Unpaid", orderStatus: "Shipped" },
    { id: "ORD009", price: 99.99, paymentStatus: "Paid", orderStatus: "Delivered" },
    { id: "ORD010", price: 120, paymentStatus: "Paid", orderStatus: "Processing" },
    { id: "ORD011", price: 250, paymentStatus: "Unpaid", orderStatus: "Shipped" },
    { id: "ORD012", price: 99.99, paymentStatus: "Paid", orderStatus: "Delivered" },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = OrdersData.slice(indexOfFirstItem, indexOfLastItem);  

  return (
    <div className="p-2">
      <div className="bg-blue-100 p-4 rounded-md">
        <span className="font-bold text-xl text-blue-700">Orders</span>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow text-sm mt-3 rounded-md">
            <thead className="bg-blue-300">
              <tr>
                <th className="text-left px-4 py-2">Id</th>
                <th className="text-left px-4 py-2">Price</th>
                <th className="text-left px-4 py-2">Payment Status</th>
                <th className="text-left px-4 py-2">Order Status</th>
                <th className="text-left px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b">{order.id}</td>
                  <td className="px-4 py-2 border-b">{order.price}</td>
                  <td className="px-4 py-2 border-b">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded ${
                        order.paymentStatus === "Paid"
                          ? "bg-green-200 text-green-800"
                          : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td className="px-4 py-2 border-b text-blue-800">
                    {order.orderStatus}
                  </td>
                  <td className="px-4 py-2 border-b space-x-2">
                    {/* <button
                      onClick={() => handleView(order)}
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      <FaEye />
                    </button> */}
                    <NavLink 
                       to={`/admin/dashboard/order-details/${order.id}`}
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

        {/* Pagination Below Table */}
         <Pagination
          totalItems={OrdersData.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Orders;
