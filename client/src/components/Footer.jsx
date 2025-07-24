import React from "react";
import logoLight from '../assets/ACM10.png';
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-300 py-8 px-4 sm:px-6 lg:px-8 mx-2">
      <div className="max-w-7xl  flex flex-col lg:flex-row g justify-start gap-10">

        {/* Logo & Description */}
        <div className="w-full lg:w-1/3 flex  justify-start  items-center text-center lg:text-left space-y-2 ">
          <img
            src={logoLight}
            alt="Company Logo"
            className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[65%] xl:w-[65%] max-w-[300px] mx-auto lg:mx-0"
          />
        </div>

        {/* Links & Social Section */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm sm:text-[15px] font-semibold text-gray-700 mt-4">
            {[
              "Company Overview",
              "Contact",
              "ACM Newsroom",
              "Careers",
              "Public Policy",
            ].map((item, index) => (
              <button
                key={index}
                className="text-left hover:underline hover:text-blue-600"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start items-center gap-4 mt-2">
            <FaFacebook className="text-gray-700 text-[17px] sm:text-[22px] hover:text-blue-600" />
            <BsTwitterX className="text-gray-700 text-[17px] sm:text-[22px] hover:text-black" />
            <SiLinkedin className="text-gray-700 text-[17px] sm:text-[22px] hover:text-blue-900" />
          </div>

          {/* Legal Section */}
          <div className="text-xs sm:text-sm text-gray-600 space-y-2">
            <div className="flex  justify-center lg:justify-start gap-7 font-medium">
              <p>© Artificial Computing Machines</p>  |
              <span>Terms of Use</span> |
              <p>Cookies</p> |
              <p>Privacy</p> 
            </div>
            <p>
              Artificial Computing Machines is dedicated to research and developement in Artificial Intelligence, Machine Learning, Cyber Security, Digital Forensics and Defence Technologies. All rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
