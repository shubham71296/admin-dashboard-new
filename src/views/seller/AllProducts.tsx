import { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Pagination from "../Pagination"; // Adjust path if needed
import cameraImg from "../../assets/camera.jpeg";
import mobileImg from "../../assets/mobile.jpeg";
import shoesImg from "../../assets/shoes-1.jpeg";
import watchImg from "../../assets/watch-1.jpeg";

interface allProductsProps {
  id: number;
  image: string;
  name: string;
  categry:string;
  brand:string;
  price:string;
  discount:string;
  stock:number
}

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const products: allProductsProps[] = [
    { id: 1, image: cameraImg, name: "camera",categry:"sports",brand:"numero URO",price:"$454",discount:"20%",stock:30  },
    { id: 2, image: mobileImg, name: "mobile",categry:"sports",brand:"numero URO",price:"$454",discount:"20%",stock:30  },
    { id: 3, image: shoesImg, name: "shoes",categry:"sports",brand:"numero URO",price:"$454",discount:"20%",stock:30 },
    { id: 4, image: watchImg, name: "watch",categry:"sports",brand:"numero URO",price:"$454",discount:"20%",stock:30  },
    { id: 5, image: cameraImg, name: "camera",categry:"sports",brand:"numero URO",price:"$454",discount:"20%",stock:30  },
    { id: 6, image: mobileImg, name: "mobile",categry:"sports",brand:"numero URO",price:"$454",discount:"20%",stock:30  },
    { id: 7, image: shoesImg, name: "shoes",categry:"sports",brand:"numero URO",price:"$454",discount:"20%",stock:30 },
    { id: 8, image: watchImg, name: "watch",categry:"sports",brand:"numero URO",price:"$454",discount:"20%",stock:30  },
    { id: 9, image: cameraImg, name: "camera",categry:"sports",brand:"numero URO",price:"$454",discount:"20%",stock:30  },
    { id: 10, image: mobileImg, name: "mobile",categry:"sports",brand:"numero URO",price:"$454",discount:"20%",stock:30  },
    { id: 11, image: shoesImg, name: "shoes",categry:"sports",brand:"numero URO",price:"$454",discount:"20%",stock:30 },
    { id: 12, image: watchImg, name: "watch",categry:"sports",brand:"numero URO",price:"$454",discount:"20%",stock:30  },
  ];
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = products.slice(indexOfFirstItem, indexOfLastItem); 

  return (
    <div className="p-2">
      <div className="bg-blue-100 p-4 rounded-md">
        <span className="font-bold text-xl text-blue-700">Products</span>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow text-sm mt-3 rounded-md">
            <thead className="bg-blue-300 text-blue-900">
              <tr>
                <th className="text-left px-4 py-2">No</th>
                <th className="text-left px-4 py-2">Image</th>
                <th className="text-left px-4 py-2">Name</th>
                <th className="text-left px-4 py-2">Category</th>
                <th className="text-left px-4 py-2">Brand</th>
                <th className="text-left px-4 py-2">Price</th>
                <th className="text-left px-4 py-2">Discount</th>
                <th className="text-left px-4 py-2">Stock</th>
                <th className="text-left px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((product) => (
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
                  
                  <td className="px-4 py-2 border-b">{product.categry}</td>
                  <td className="px-4 py-2 border-b">{product.brand}</td>
                  <td className="px-4 py-2 border-b">{product.price}</td>
                  <td className="px-4 py-2 border-b">{product.discount}</td>
                  <td className="px-4 py-2 border-b">{product.stock}</td>

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
        <Pagination
          totalItems={products.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default AllProducts;
