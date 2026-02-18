import { Link, useLocation } from "react-router-dom";
import add_product_icon from "../assets/Product_Cart.svg";
import list_product from "../assets/Product_list_icon.svg";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-16 md:w-64 bg-white border-r border-gray-200 shadow-sm flex flex-col transition-all duration-300">
      <div className="flex-1">
        {/* Sidebar Header */}
        <div className="px-4 py-6 flex justify-center md:justify-start md:px-6">
          <div className="hidden md:block">
            <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
            <p className="text-sm text-gray-500">Manage your products</p>
          </div>
          {/* Mobile Header Icon (optional, or just keep it simple) */}
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1 px-2 md:px-3">
          <Link to="/addproduct">
            <div
              className={`flex items-center justify-center md:justify-start space-x-0 md:space-x-3 px-3 py-3 rounded-lg transition-colors duration-200
              ${
                location.pathname === "/addproduct"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <div className="flex-shrink-0">
                <img src={add_product_icon} alt="" className="w-6 h-6" />
              </div>
              <p className="hidden md:block text-sm font-medium">Add Product</p>
              {location.pathname === "/addproduct" && (
                <div className="w-1 h-8 bg-blue-600 absolute right-0 rounded-l-lg"></div>
              )}
            </div>
          </Link>

          <Link to="/listproduct">
            <div
              className={`flex items-center justify-center md:justify-start space-x-0 md:space-x-3 px-3 py-3 rounded-lg transition-colors duration-200
              ${
                location.pathname === "/listproduct"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <div className="flex-shrink-0">
                <img src={list_product} alt="" className="w-6 h-6" />
              </div>
              <p className="hidden md:block text-sm font-medium">Product List</p>
              {location.pathname === "/listproduct" && (
                <div className="w-1 h-8 bg-blue-600 absolute right-0 rounded-l-lg"></div>
              )}
            </div>
          </Link>
        </nav>
      </div>

      {/* Admin Panel - Now in a separate div at the bottom */}
      <div className="border-t border-gray-200">
        <div className="p-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer flex justify-center md:justify-start">
          <div className="flex items-center space-x-0 md:space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-medium">A</span>
              </div>
            </div>
            <div className="hidden md:block flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                Admin Panel
              </p>
              <p className="text-xs text-gray-500 truncate">Version 1.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
