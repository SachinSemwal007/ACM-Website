import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { assets } from "../assets/assets";

const Footer = () => {
  const navigate = useNavigate();

  const links = [
    { name: "Company Overview", path: "/aboutACM" },
    { name: "Contact us", path: "/contact" }, 
    { name: "Careers", path: "/careers" },
    { name: "Public Policy", path: "/policy" },
  ];

  return (
    <footer className="bg-gray-300 py-8 px-4 sm:px-6 lg:px-8 mx-2">
      <div className="max-w-7xl flex flex-col lg:flex-row justify-start gap-10">

        {/* Logo Section */}
        <div className="w-full lg:w-1/3 flex justify-start items-center text-center lg:text-left">
          <img
            src={assets.ACM10}
            alt="Company Logo"
            className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[65%] xl:w-[65%] max-w-[300px] mx-auto lg:mx-0"
          />
        </div>

        {/* Links & Social */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm sm:text-[15px] font-semibold text-gray-700 mt-4">
            {links.map((link, index) => (
              <button
                key={index}
                onClick={() => navigate(link.path)}
                className="text-left hover:underline hover:text-blue-600"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start items-center gap-4 mt-2">
            <a
              href="https://x.com/AcmltdIndia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <BsTwitterX className="text-gray-700 text-[17px] sm:text-[22px] hover:text-black" />
            </a>
            <a
              href="https://www.linkedin.com/company/75619230/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="text-gray-700 text-[17px] sm:text-[22px] hover:text-blue-900" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100089490903737"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="text-gray-700 text-[17px] sm:text-[22px] hover:text-blue-600" />
            </a>
          </div>

          {/* Legal Section */}
          <div className="text-[8px] sm:text-sm text-gray-900 sm:space-y-2 space-y-1">
            <div className="flex justify-center lg:justify-start sm:gap-7 gap-2 flex-wrap text-sm">
              <p>© Artificial Computing Machines</p> |
              <button
                onClick={() => navigate("/terms")}
                className="hover:underline hover:text-blue-600"
              >
                Terms of Use
              </button> |
              <button
                onClick={() => navigate("/cookies")}
                className="hover:underline hover:text-blue-600"
              >
                Cookies
              </button> |
              <button
                onClick={() => navigate("/privacy")}
                className="hover:underline hover:text-blue-600"
              >
                Privacy
              </button>
            </div>
            <p>
              Artificial Computing Machines is dedicated to research and development
              in Artificial Intelligence, Machine Learning, Cyber Security, Digital
              Forensics, and Defence Technologies. All rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
