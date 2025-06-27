import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import logo from "../assets/ACM.png";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white  shadow-md transition-colors">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="ACM" className="h-10 w-auto" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 w-full pl-16">
            <a href="#" className="text-black hover:text-blue-900 lg:text-[18px] text-[14px]">
              PRODUCT
            </a>
            <a href="#" className="text-black hover:text-blue-900 lg:text-[18px] text-[14px]">
              SUPPORT
            </a>
            <a href="#" className="text-black hover:text-blue-900 lg:text-[18px] text-[14px]">
              SOLUTION
            </a>
            <a href="#" className="text-black hover:text-blue-900 lg:text-[18px] text-[14px]">
              ABOUT US
            </a>
          </div>

          {/* Search and Toggle */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-3 pr-9 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-2 top-2 text-gray-500 dark:text-gray-300" size={18} />
            </div>

            {/* ✅ Properly aligned dark mode toggle */}
            <DarkModeToggle />
          </div>

          {/* Hamburger for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-gray-700 hover:text-blue-900 lg:text-[18px] text-[14px]">
              Product
            </a>
            <a href="#" className="text-gray-700 dark:text-white hover:text-blue-600">
              Support
            </a>
            <a href="#" className="text-gray-700 dark:text-white hover:text-blue-600">
              Solution
            </a>
            <a href="#" className="text-gray-700 dark:text-white hover:text-blue-600">
              About Us
            </a>
            <div className="flex mt-2 items-center gap-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-3 pr-10 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="text-gray-500 dark:text-gray-300" size={18} />
            </div>

            {/* Optional: Toggle in mobile menu */}
            <DarkModeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
