import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Search } from "lucide-react";
import logo from "../assets/ACM9.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Updated product data with description and image for each subtopic
  const productData = [
    {
      title: "Software Products",
      subtopics: [
        {
          title: "Yogyata Portal",
          description: "This AI-based recruitment system leverages natural language processing (NLP), machine learning algorithms, and predictive analytics to streamline candidate sourcing, resume screening, and interview scheduling. It automates talent matching by analyzing skills, experience, and cultural fit, delivering faster shortlisting, reduced hiring bias, and enhanced efficiency for modern recruitment workflows.",
          image: "/images/yogyata-portal.png",
        },
        {
          title: "SquadForce 360",
          description: "SquadForce 360 offers real-time workforce management and analytics.",
          image: "/images/squadforce-360.png",
        },
        {
          title: "DayTracker - GPS Attendance System",
          description: "DayTracker is a GPS-based attendance tracking solution for accurate employee monitoring.",
          image: "/images/daytracker.png",
        },
        {
          title: "Nexthire",
          description: "Nexthire is an AI-powered recruitment platform to streamline hiring processes.",
          image: "/images/nexthire.png",
        },
      ],
    },
    {
      title: "Defense Products",
      subtopics: [
        {
          title: "BH 9",
          description: "BH 9 is an advanced AI-powered surveillance system that utilizes computer vision, machine learning, and real-time data processing to autonomously detect, classify, and track aircraft. Integrating radar feeds, satellite imagery, and sensor fusion, it enhances situational awareness, enabling rapid threat assessment, predictive analytics, and faster, data-driven decision-making in dynamic airspaces.",
          image: "/images/bh9.png",
        },
        {
          title: "Epalutte GPS Antenna",
          description: "Epalutte GPS Antenna offers precise location tracking for defense applications.",
          image: "/images/epalutte.png",
        },
      ],
    },
    {
      title: "AI Products",
      subtopics: [
        {
          title: "Smart Sunglasses",
          description: "Smart Sunglasses integrate AI for augmented vision and enhanced user experience.",
          image: "/images/smart-sunglasses.png",
        },
        {
          title: "SandTime - AI Attendance System",
          description: "SandTime is an AI-powered attendance management system for organizations.",
          image: "/images/sandtime.png",
        },
      ],
    },
  ];

  const solutionData = [
    { title: "Network Security & Management" },
    { title: "Customized Software Development" },
    { title: "Customized Enhancements with AI" },
    { title: "Cyber Security & Management" },
    { title: "Opeartional Technology Security" },
    { title: "Networking Design" },
    { title: "Cert-in Certified Security Audits" },
  ];

  const handleNavClick = (item) => {
    if (item === "product" || item === "solution") {
      setShowDropdown((prev) => (prev === item ? null : item));
    } else {
      setShowDropdown(null);
      navigate(`/${item}`);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md relative">
      <div>
        <div className="flex justify-between h-17 items-center">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex-shrink-0 pt-1 pr-1 cursor-pointer items-center h-17 bg-[#0070c0]"
          >
            <img src={logo} alt="ACM" className="h-15 w-auto p-1" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 w-full pl-7 lg:pl-16">
            {["product", "solution", "consulting"].map((item) => (
              <span
                key={item}
                onClick={() => handleNavClick(item)}
                className="text-[#0070c0] hover:text-black lg:text-[16px] text-[14px] cursor-pointer transition-colors relative"
              >
                {item.toUpperCase()}
              </span>
            ))}
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0 mx-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search acmindia.co.in"
                className="pl-3 pr-10 py-2 w-48 lg:w-56 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 focus:outline-none p-2 hover:bg-gray-100 rounded-md border border-gray-300 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Dropdown */}
      {showDropdown && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-20 overflow-hidden transition-all duration-300 ease-in-out transform opacity-100 max-h-[500px] translate-y-0"
        >
          <div className="max-w-[1200px] sm:mx-10 mx-2 py-5 px-2 grid grid-cols-2 md:grid-cols-4 gap-[15px]">
            {showDropdown === "product" &&
              productData.map((product) => (
                <div key={product.title}>
                  <h3
                    onClick={() => {
                      // If you want clicking product title to navigate somewhere else, handle here
                      // For now just close dropdown
                      setShowDropdown(null);
                    }}
                    className="text-[#0070c0] text-md font-semibold cursor-pointer hover:text-black transition-colors"
                  >
                    {product.title}
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {product.subtopics.map((sub) => (
                      <li
                        key={sub.title}
                        onClick={() => {
                          navigate("/about-products", {
                            state: {
                              title: sub.title,
                              category: product.title,
                              description: sub.description,
                              image: sub.image,
                            },
                          });
                          setShowDropdown(null);
                        }}
                        className="text-gray-700 hover:text-[#0070c0] text-sm cursor-pointer transition-colors"
                      >
                        {sub.title}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            {showDropdown === "solution" &&
              solutionData.map((solution) => (
                <div key={solution.title} className="mb-1 py-2 w-[100%] gap-y-0">
                  <h3
                    onClick={() => {
                      navigate(`/solutions/${solution.title.toLowerCase().replace(/\s+/g, "-")}`);
                      setShowDropdown(null);
                    }}
                    className="text-[#0070c0] text-sm font-semibold cursor-pointer hover:text-black transition-colors"
                  >
                    {solution.title}
                  </h3>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Mobile Menu with Dropdowns */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white border-t border-gray-200">
          <div className="flex flex-col space-y-3 pt-3">
            {["product", "solution", "consulting"].map((item) => (
              <div key={item} className="flex flex-col">
                <button
                  onClick={() => {
                    if (item === "product" || item === "solution") {
                      setMobileDropdown((prev) => (prev === item ? null : item));
                    } else {
                      navigate(`/${item}`);
                      setIsOpen(false);
                    }
                  }}
                  className="text-gray-700 hover:text-blue-900 text-[16px] py-2 border rounded-md px-3 text-left"
                >
                  {item.toUpperCase()}
                </button>

                {mobileDropdown === item && (
                  <div className="pl-4 pt-2">
                    {item === "product" &&
                      productData.map((product) => (
                        <div key={product.title} className="mb-2">
                          <div className="text-[#0070c0] font-medium text-sm">{product.title}</div>
                          <ul className="pl-2 mt-1 space-y-1">
                            {product.subtopics.map((sub) => (
                              <li
                                key={sub.title}
                                onClick={() => {
                                  navigate("/about-products", {
                                    state: {
                                      title: sub.title,
                                      category: product.title,
                                      description: sub.description,
                                      image: sub.image,
                                    },
                                  });
                                  setIsOpen(false);
                                }}
                                className="text-gray-600 text-sm cursor-pointer"
                              >
                                {sub.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                    {item === "solution" &&
                      solutionData.map((solution) => (
                        <div
                          key={solution.title}
                          onClick={() => {
                            navigate(`/solutions/${solution.title.toLowerCase().replace(/\s+/g, "-")}`);
                            setIsOpen(false);
                          }}
                          className="text-[#0070c0] font-medium text-sm cursor-pointer mb-1"
                        >
                          {solution.title}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}

            {/* Search Input in Mobile */}
            <div className="flex mt-3 items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search acmindia.co.in"
                  className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={18}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
