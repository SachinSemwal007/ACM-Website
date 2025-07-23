import React, { useEffect, useState } from "react";
import logoLight from '../assets/ACM10.png';
import logoDark from '../assets/ACM2.png';
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import {
  Facebook,
  Twitter,
  Linkedin,
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
      <div className="max-w-7xl  mx-[10%] flex flex-col lg:flex-row justify-between ">

            <div className="w-full lg:w-1/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-2">
              <img
                src={isDark ? logoDark : logoLight}
                alt="Company Logo"
                className="w-[70%] sm:w-[60%] md:w-[50%] lg:w-[85%] xl:w-[80%] max-w-[300px] mx-auto lg:mx-0"
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
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm sm:text-[15px] font-semibold text-gray-700 dark:text-gray-300 mt-4">
              {[
                "Company Overview",
                "Contact",
                "ACM Newsroom",
                "Careers",
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
            <FaFacebook className="text-gray-700 text-[17px] sm:text-[22px] dark:text-white hover:text-blue-600 dark:hover:text-blue-400"/>
            <BsTwitterX className="text-gray-700 text-[17px] sm:text-[22px] dark:text-white hover:text-blue-600 dark:hover:text-blue-400"/>
            <SiLinkedin className="text-gray-700 text-[17px] sm:text-[22px] dark:text-white hover:text-blue-600 dark:hover:text-blue-400"/>
          </div>

          {/* Legal */}
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <p>
              © ACM Corporation <span className="font-medium">Terms of Use</span> · Cookies · Privacy · Recycling
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
