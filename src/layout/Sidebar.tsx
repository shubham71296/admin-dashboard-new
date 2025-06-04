import { Link, NavLink } from "react-router-dom";
import dummyLogo from "../assets/dummylogo.jpeg";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getNavs } from "../navigation";
import type { allNavsProps } from "../navigation/allNavs";

interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar, setShowSidebar }) => {
  const { user } = useAuth();
  //const role:string = "seller";
  
  const [allNavs, setAllNavs] = useState<allNavsProps[]>([]);
  
  useEffect(() => {
    if (user?.role) {
      const navs = getNavs(user.role);
      setAllNavs(navs);
    }
  }, [user?.role]);

  return (
    <div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`fixed top-0 left-0 w-screen h-screen bg-[#22292f80] transition-opacity duration-200 ${
          showSidebar
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>

      <div
        className={`w-[260px] bg-blue-100 h-screen fixed top-0 z-50 transition-all shadow-md ${
          showSidebar ? "left-0" : "-left-[260px] lg:left-0"
        }`}
      >
        <div className="flex justify-center h-[120px] items-center">
          <Link to="/login" className="">
            <img className="h-[90px] w-[90px] rounded-full" src={dummyLogo} />
          </Link>
        </div>

        <div className="px-[16px] mt-[20px]">
          <ul>
            {allNavs.map((nav) => (
              <li>
                <NavLink
                  to={nav.path}
                  end
                  className={({ isActive }) =>
                    [
                      "flex items-center p-2 rounded-lg space-x-4 group",
                      "transition-all duration-300 ease-in-out transform",
                      isActive
                        ? "bg-blue-600 text-white scale-[1.02] shadow-md"
                        : "text-blue-700 hover:bg-blue-500 hover:text-white hover:scale-[1.01]",
                    ].join(" ")
                  }
                >
                  <span className="text-xl group-hover:rotate-3 transition-transform">
                    {nav.icon}
                  </span>
                  <span className="font-medium">{nav.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
