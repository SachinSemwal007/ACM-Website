import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import logo from "../assets/ACM.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          <div className="flex-shrink-0 " >
            <img  src={logo} alt="" className="w-39 h-15 mx-auto" />
          </div>

          <div className="hidden md:flex space-x-6 text-left w-[100%]  pl-[7rem] ">
            <a href="#" className="text-gray-700 hover:text-blue-900  lg:text-[18px] text-[14px] ">PRODUCT</a>
            <a href="#" className="text-gray-700 hover:text-blue-900  lg:text-[18px] text-[14px] ">SUPPORT</a>
            <a href="#" className="text-gray-700 hover:text-blue-900  lg:text-[18px] text-[14px] ">SOLUTION</a>
            <a href="#" className="text-gray-700 hover:text-blue-900  lg:text-[18px] text-[14px] ">ABOUT US</a>
          </div>

          <div className="hidden md:flex relative items-center">
            <input
              type="text"
              placeholder="Search..."
              className="pl-3 lg:pr-10 pr-7 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search
              className="absolute right-2 text-gray-500"
              size={18}
            />
          </div>



          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-gray-700 hover:text-blue-600">Product</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Support</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Solution</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About Us</a>
            <div className="flex mt-2 relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-3 pr-10 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2 text-gray-500" size={18} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
