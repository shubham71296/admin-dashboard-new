import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { get_all_sellers } from "../../redux/reducers/sellerReducer";


const SellerRequest = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { loader, sellers } = useSelector((state: RootState) => state.seller);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const AllSellers = sellers.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(()=>{
    dispatch(get_all_sellers());
  },[])

  return (
    <div className="p-2">
      <div className="bg-blue-100 p-4 rounded-md">
        <span className="font-bold text-xl text-blue-700">Deactive Sellers</span>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow text-sm mt-3 rounded-md">
            <thead className="bg-blue-300">
              <tr>
                <th className="text-left px-4 py-2">Id</th>
                <th className="text-left px-4 py-2">Name</th>
                <th className="text-left px-4 py-2">Email</th>
                <th className="text-left px-4 py-2">Payment Status</th>
                <th className="text-left px-4 py-2">Status</th>
                <th className="text-left px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {AllSellers.map((item) => (
                <tr key={item._id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b">{item._id.slice(0, 5) + "..."}</td>
                  

                  <td className="px-4 py-2 border-b">{item.name}</td>
                  <td className="px-4 py-2 border-b">{item.email}</td>
                  <td className="px-4 py-2 border-b">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded ${
                        item.payment === "completed"
                          ? "bg-green-200 text-green-800"
                          : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {item.payment}
                    </span>
                  </td>

                  
                  <td className="px-4 py-2 border-b">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded ${
                        item.status === "active"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {item.status}
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
                      to={`/admin/dashboard/seller-details/${item._id}`}
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
          totalItems={sellers.length}
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
