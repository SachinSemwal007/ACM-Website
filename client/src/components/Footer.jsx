import React from "react";
import logo from '../assets/ACM2.png';
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 dark:bg-[#111827] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 justify-between">
        {/* Logo Section */}
        <div className="w-full lg:w-1/4">
          <img
            src={logo}
            alt="Company Logo"
            className="w-48 -mb-2 mx-auto"
          />
          <p className="text-center font-sans font-semibold text-white text-shadow-gray-900 text-shadow-2xs dark:text-gray-100">
            Artificial Computing
          </p>
          <p className="text-center font-sans font-semibold text-white text-shadow-gray-900 text-shadow-2xs dark:text-gray-100">
            Machine
          </p>
        </div>

        {/* Footer Links and Info */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 gap-6 text-sm text-gray-700 dark:text-gray-300">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {[
              "Company Overview",
              "Contact",
              "Intel Newsroom",
              "Investors",
              "Careers",
              "Corporate Responsibility",
              "Inclusion",
              "Public Policy",
            ].map((item, index) => (
              <button
                key={index}
                className="text-left hover:underline hover:text-blue-600 dark:hover:text-blue-400 text-sm"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 dark:hover:text-blue-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-blue-700 dark:hover:text-blue-500">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-red-600 dark:hover:text-red-500">
              <Youtube size={20} />
            </a>
            <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400">
              <Instagram size={20} />
            </a>
          </div>

          {/* Legal Info */}
          <div className="text-xs text-gray-600 dark:text-gray-400 space-y-2 mt-4">
            <p>
              © ACM Corporation <span className="font-medium">Terms of Use</span> · Trademarks · Cookies · Privacy · Supply Chain Transparency · Site Map · Recycling
            </p>
            <p>
              ACM technologies may require enabled hardware, software or service activation. No product or component can be absolutely secure. Your costs and results may vary. Performance varies by use, configuration, and other factors. Learn more at intel.com/performanceindex. See our complete legal Notices and Disclaimers.
            </p>
            <p>
              ACM is committed to respecting human rights and avoiding causing or contributing to adverse impacts on human rights. See Intel’s Global Human Rights Principles. Intel’s products and software are intended only to be used in applications that do not cause or contribute to adverse impacts on human rights.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
