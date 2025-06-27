import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import logo from "../assets/ACM2.png";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white  shadow-md transition-colors">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="ACM" className="h-15 w-auto" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 w-full pl-7 lg:pl-16 ">
            <a href="#" className="text-black hover:text-blue-900 lg:text-[16px] text-[14px]">
              PRODUCT
            </a>
            <a href="#" className="text-black hover:text-blue-900 lg:text-[16px] text-[14px]">
              SUPPORT
            </a>
            <a href="#" className="text-black hover:text-blue-900 lg:text-[16px] text-[14px]">
              SOLUTION
            </a>
            <a href="#" className="text-black hover:text-blue-900 lg:text-[16px] text-[14px]">
              ABOUT US
            </a>
          </div>

          {/* Search and Toggle */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                // className="pl-3 pr-10 py-2 w-48 lg:w-56 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                className="pl-3 pr-10 py-2 w-48 lg:w-56 border border-gray-300  rounded-md bg-white  text-black  focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" size={18} />
            </div>

            <div className="flex-shrink-0">
              <DarkModeToggle />
            </div>
          </div>

    {/* {hamburger icon} */}

          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-gray-900 focus:outline-none p-2 hover:bg-gray-900 dark:hover:bg-gray-800 rounded-md border border-gray-900 dark:border-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* for Mobile Menu */}
      {isOpen && (
        // <div className="md:hidden px-4 pb-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="md:hidden px-4 pb-4 bg-white  border-t border-gray-200 ">
          <div className="flex flex-col space-y-3 pt-3">
            <a href="#" className="text-gray-700  hover:text-blue-900 text-[16px] py-2 border-1 rounded-md px-3">
              PRODUCT
            </a>
            <a href="#" className="text-gray-700  hover:text-blue-600 text-[16px] py-2 border-1 rounded-md px-3">
              SUPPORT
            </a>
            <a href="#" className="text-gray-700  hover:text-blue-600 text-[16px] py-2 border-1 rounded-md px-3">
              SOLUTION
            </a>
            <a href="#" className="text-gray-700  hover:text-blue-600 text-[16px] py-2 border-1 rounded-md px-3">
              ABOUT US
            </a>
            <div className="flex mt-3 items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-3 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" size={18} />
              </div>
            </div>



            <div className="mt-3">
              <DarkModeToggle />

            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;