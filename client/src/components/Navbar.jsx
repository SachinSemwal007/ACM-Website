import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import logo from "../assets/ACM2.png";
import DarkModeToggle from "./DarkModeToggle";
import { ModeToggle } from "@/components/ThemeToggle";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-[#242526]/90 shadow-md transition-colors backdrop-blur-md">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-17 items-center">
          {/* Logo */}
          <div onClick={() => navigate("/")} className="flex-shrink-0 cursor-pointer">
            <img src={logo} alt="ACM" className="h-15 w-auto" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 w-full pl-7 lg:pl-16">
            {["product", "support", "solution", "about"].map((item) => (
              <a
                key={item}
                onClick={() => navigate(`/${item}`)}
                className="text-black dark:text-white hover:text-blue-900 dark:hover:text-blue-400 lg:text-[16px] text-[14px] cursor-pointer transition-colors"
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>

          {/* Search and Toggle */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-3 pr-10 py-2 w-48 lg:w-56 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300"
                size={18}
              />
            </div>

            <div className="flex-shrink-0">
              <ModeToggle />
            </div>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white focus:outline-none p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white dark:bg-[#242526] border-t border-gray-200 dark:border-gray-700 transition-colors">
          <div className="flex flex-col space-y-3 pt-3">
            {["product", "support", "solution", "about"].map((item) => (
              <a
                key={item}
                onClick={() => {
                  navigate(`/${item}`);
                  setIsOpen(false);
                }}
                className="text-gray-700 dark:text-white hover:text-blue-900 dark:hover:text-blue-400 text-[16px] py-2 border-1 rounded-md px-3 cursor-pointer transition-colors"
              >
                {item.toUpperCase()}
              </a>
            ))}

            {/* Optional Search in Mobile */}
            <div className="flex mt-3 items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-3 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300"
                  size={18}
                />
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
