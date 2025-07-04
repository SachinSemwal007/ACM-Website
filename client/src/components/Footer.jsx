import React, { useEffect, useState } from "react";
import logoLight from '../assets/ACM8.png';
import logoDark from '../assets/ACM2.png';
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-gray-300 dark:bg-[#111827] py-8 px-4 sm:px-6 lg:px-8 mx-2">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">

            <div className="w-full lg:w-1/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-2">
              <img
                src={isDark ? logoDark : logoLight}
                alt="Company Logo"
                className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[75%] xl:w-[70%] max-w-[200px] mx-auto lg:mx-0"
              />

              {isDark && (
                <div className="hidden lg:block text-white text-sm leading-snug mt-2">
                  <p className="font-bold">Artificial Computing Machine</p>
                  <p className="italic">Shaping research into life</p>
                </div>
              )}
            </div>



        {/* Links & Social Section */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Quick Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-700 dark:text-gray-300">
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
                className="text-left hover:underline hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start items-center gap-4 mt-2 ">
            <a href="#" className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"><Facebook size={20} /></a>
            <a href="#" className="text-gray-700 dark:text-white hover:text-blue-400 dark:hover:text-blue-300"><Twitter size={20} /></a>
            <a href="#" className="text-gray-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-500"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-red-500"><Youtube size={20} /></a>
            <a href="#" className="text-gray-700 dark:text-white hover:text-pink-600 dark:hover:text-pink-400"><Instagram size={20} /></a>
          </div>

          {/* Legal */}
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <p>
              © ACM Corporation <span className="font-medium">Terms of Use</span> · Trademarks · Cookies · Privacy · Supply Chain Transparency · Site Map · Recycling
            </p>
            <p>
              ACM technologies may require enabled hardware, software or service activation. No product or component can be absolutely secure. Your costs and results may vary.
            </p>
            <p>
              ACM is committed to respecting human rights and avoiding causing or contributing to adverse impacts on human rights. See Intel’s Global Human Rights Principles.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
