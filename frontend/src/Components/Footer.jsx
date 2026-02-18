import footer_logo from "../assets/logo_big.png";
import { FaPinterest, FaSquareInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center pb-12">
          {/* Logo Section */}
          <div className="flex flex-col items-center gap-3 mb-12">
            <img src={footer_logo} alt="Shopper Logo" className="h-20 w-auto" />
            <h2 className="text-3xl font-bold text-gray-900">SHOPPER</h2>
          </div>

          {/* Links Section */}
          <div className="mb-12">
            <ul className="flex flex-wrap justify-center gap-x-12 gap-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-red-500 font-medium transition-colors"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-red-500 font-medium transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-red-500 font-medium transition-colors"
                >
                  Offices
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-red-500 font-medium transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-red-500 font-medium transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mb-12">
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full
              bg-gray-100 text-gray-600 hover:bg-pink-500 hover:text-white
              transition-all duration-300 hover:scale-110"
            >
              <FaSquareInstagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full
              bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white
              transition-all duration-300 hover:scale-110"
            >
              <FaPinterest className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full
              bg-gray-100 text-gray-600 hover:bg-green-600 hover:text-white
              transition-all duration-300 hover:scale-110"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-gray-200 pt-8 w-full">
            <p className="text-gray-500">
              © 2026 SHOPPER. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
