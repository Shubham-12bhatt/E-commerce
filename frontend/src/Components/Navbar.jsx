import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useEffect, useState, useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [menu, setmenu] = useState();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { getTotalCartItems } = useContext(ShopContext);
  const totalCartItems = getTotalCartItems();

  useEffect(() => {
    if (location.pathname === "/") {
      setmenu("shop");
    } else if (location.pathname === "/mens") {
      setmenu("men");
    } else if (location.pathname === "/womens") {
      setmenu("women");
    } else if (location.pathname === "/kids") {
      setmenu("kids");
    } else {
      setmenu(""); // default for other routes
    }
  }, [location.pathname]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Shopper Logo" className="h-10 w-auto" />
              <span className="text-xl font-semibold text-gray-800">
                Shopper
              </span>
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <div
                className={`p-7 text-gray-600 ${menu === "shop" && "text-red-500 border-red-500 border-b-4 "}`}
              >
                <Link
                  to="/"
                  onClick={() => setmenu("shop")}
                  className={` hover:text-red-500 transition-colors duration-200 font-medium `}
                >
                  Shop
                </Link>
              </div>
              <div
                className={` p-7 ${menu === "men" && "border-red-500  border-b-4 "}`}
              >
                <Link
                  to="/mens"
                  onClick={() => setmenu("men")}
                  className="text-gray-600 hover:text-red-500 transition-colors duration-200 font-medium"
                >
                  Men
                </Link>
              </div>
              <div
                className={`p-7 ${menu === "women" && "border-red-500 border-b-4 "}`}
              >
                <Link
                  to="/womens"
                  onClick={() => setmenu("women")}
                  className="text-gray-600 hover:text-red-500 transition-colors duration-200 font-medium"
                >
                  Women
                </Link>
              </div>
              <div
                className={`p-7 ${menu === "kids" && "border-red-500 border-b-4 "}`}
              >
                <Link
                  to="/kids"
                  onClick={() => setmenu("kids")}
                  className="text-gray-600 hover:text-red-500 transition-colors duration-200 font-medium"
                >
                  Kids
                </Link>
              </div>
            </div>

            {/* Right Side Actions - Desktop */}
            <div className="hidden md:flex items-center space-x-6">
              {localStorage.getItem("auth-token") ? (
                <button
                  className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-200 font-medium cursor-pointer"
                  onClick={() => {
                    localStorage.removeItem("auth-token");
                    window.location.replace("/");
                  }}
                >
                  Logout
                </button>
              ) : (
                <Link
                    to="/login"
                      state={{ formType: 'login' }}
                  className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-200 font-medium"
                >
                  Login
                </Link>
              )}
              <Link to="/cart">
                <div className="relative">
                  <img
                    src={cart_icon}
                    alt="Shopping Cart"
                    className="h-6 w-6 cursor-pointer"
                  />

                  {totalCartItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {totalCartItems}
                    </span>
                  )}
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleSidebar}
                className="text-gray-600 hover:text-red-500 transition-colors duration-200"
              >
                <FaBars size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 backdrop-blur-lg bg-opacity-50 z-50 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
            <button
              onClick={closeSidebar}
              className="text-gray-600 hover:text-red-500 transition-colors duration-200"
            >
              <RiCloseLargeFill size={24} />
            </button>
          </div>

          {/* Sidebar Navigation Links */}
          <div className="flex-1 py-6">
            <div className="space-y-4">
              <Link
                to="/"
                onClick={() => {
                  setmenu("shop");
                  closeSidebar();
                }}
                className={`block px-6 py-3 text-lg font-medium transition-colors duration-200 ${
                  menu === "shop"
                    ? "text-red-500 bg-red-50 border-r-4 border-red-500"
                    : "text-gray-600 hover:text-red-500 hover:bg-gray-50"
                }`}
              >
                Shop
              </Link>
              <Link
                to="/mens"
                onClick={() => {
                  setmenu("men");
                  closeSidebar();
                }}
                className={`block px-6 py-3 text-lg font-medium transition-colors duration-200 ${
                  menu === "men"
                    ? "text-red-500 bg-red-50 border-r-4 border-red-500"
                    : "text-gray-600 hover:text-red-500 hover:bg-gray-50"
                }`}
              >
                Men
              </Link>
              <Link
                to="/womens"
                onClick={() => {
                  setmenu("women");
                  closeSidebar();
                }}
                className={`block px-6 py-3 text-lg font-medium transition-colors duration-200 ${
                  menu === "women"
                    ? "text-red-500 bg-red-50 border-r-4 border-red-500"
                    : "text-gray-600 hover:text-red-500 hover:bg-gray-50"
                }`}
              >
                Women
              </Link>
              <Link
                to="/kids"
                onClick={() => {
                  setmenu("kids");
                  closeSidebar();
                }}
                className={`block px-6 py-3 text-lg font-medium transition-colors duration-200 ${
                  menu === "kids"
                    ? "text-red-500 bg-red-50 border-r-4 border-red-500"
                    : "text-gray-600 hover:text-red-500 hover:bg-gray-50"
                }`}
              >
                Kids
              </Link>
            </div>
          </div>

          {/* Sidebar Footer Actions */}
          <div className="p-6 border-t space-y-4">
            <Link
              to="/login"
                state={{ formType: 'login' }}
              onClick={closeSidebar}
              className="block w-full bg-red-500 text-white text-center px-6 py-3 rounded-full hover:bg-red-600 transition-colors duration-200 font-medium"
            >
              Login
            </Link>
            <Link
              to="/cart"
              onClick={closeSidebar}
              className="flex items-center justify-center space-x-2 w-full border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors duration-200"
            >
              <img src={cart_icon} alt="Shopping Cart" className="h-6 w-6" />
              <span className="font-medium text-gray-700">
                Cart {totalCartItems > 0 && `(${totalCartItems})`}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
