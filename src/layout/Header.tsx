import React from "react";
import { useAuth } from "../context/AuthContext";
import { FaListUl } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import ProfileImgae from "../assets/profileimage.png";

interface HeaderProps {
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ showSidebar, setShowSidebar }) => {
  const { user } = useAuth();
  return (
    <div className="fixed top-0 left-0 w-full py-2 px-2 z-40">
      <div className="py-3 px-4 bg-blue-300 lg:ml-[260px] rounded-md items-center flex space-x-4 justify-between">
        
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="lg:hidden text-white text-xl"
        >
          <FaListUl />
        </button>

        
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-white pointer-events-none">
            <FiSearch />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-blue-400 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div className="hidden lg:flex justify-center items-center space-x-2">
           <div className="">
             <p className="font-bold">{user?.name}</p>
             <p className="text-center text-blue-700 font-semibold">{user?.role}</p>
           </div>
           <div className="">
            <img src={ProfileImgae} className="w-10 h-10 rounded-full"/>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
