import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Search } from "lucide-react";
import logo from "../assets/ACM9.png";
import YogyataPortal from "../assets/YogyataPortal.png"
import YOG1 from "../assets/YOG1.jpg"
import HRM from "../assets/hrm.jpg"
import HRAutomation from "../assets/HRAutomation.jpg"
import GPSAttendance from "../assets/GPSAttendance.png"
import IntelligentHiring from "../assets/IntelligentHiring.png"
import ADetect from "../assets/ADetect.png"
import GPS from "../assets/GPS.jpg"
import SmartGlasses from "../assets/SmartGlasses.png"
import SandTimeAttendance from "../assets/SandTimeAttendance.png"
import DayTrackerGPS from "../assets/DayTrackerGPS.png"
import NextHire1 from "../assets/NextHire1.jpg"
import BH91 from "../assets/BH91.jpg"
import GpsAntenna from "../assets/GpsAntenna.jpg"
import Attendance from "../assets/Attendance.jpg"
import SmartSunGlasses from "../assets/SmartSunGlasses.png"

import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const productData = [
    {
      title: "Software Products",
      subtopics: [
        {
          title: "Yogyata Portal",
          description: "In today’s fast-evolving business landscape, attracting and securing top talent is more critical and more challenging than ever. Traditional recruitment processes, often time-consuming and prone to bias, are rapidly being transformed by advances in Artificial Intelligence (AI). An AI-Based Recruitment Management System offers a smarter, faster, and more efficient solution for modern hiring needs.This system leverages AI technologies such as machine learning, natural language processing and predictive analytics to automate and enhance every stage of the recruitment lifecycle — from sourcing and screening candidates to scheduling and taking examinations. By analysing large volumes of candidate data, identifying best-fit applicants, and minimizing human bias, it enables organizations to make more informed, data-driven hiring decisions.With capabilities like intelligent resume parsing, automated communications, skill-matching algorithms, and real-time analytics, an AI-based recruitment management system not only improves the quality of hires but also significantly reduces time-to-hire and recruitment costs. Ultimately, it empowers HR teams to focus more on strategic initiatives and candidate engagement, ensuring a competitive edge in attracting top talent in a highly dynamic market.",
          image: YogyataPortal,
          image2:YOG1
        },
        {
          title: "SquadForce 360",
          description: "Managing human resources efficiently is fundamental to an organization's success. As businesses grow and employee needs become more complex, traditional manual HR processes often struggle to keep pace. A fully automated Human Resource Management System (HRMS) software offers a transformative solution, streamlining all core HR functions through intelligent automation and centralized management.Squadforce 360 is a comprehensive platform automates the entire HR lifecycle — including recruitment, onboarding, payroll, attendance tracking, performance management, employee self-service, compliance management and more. By eliminating repetitive administrative tasks, the system enhances accuracy, boosts operational efficiency, and ensures a seamless experience for both HR teams and employees.Built with advanced features such as real-time analytics, cloud accessibility, secure data management, and customizable workflows, the fully automated application Squadforce 360 empowers organizations to make strategic, data-driven decisions. It helps foster better employee engagement, ensures regulatory compliance, and reduces overall operational costs, making it an essential tool for modern, agile workplaces.By integrating automation into HR management, businesses can focus more on talent development and strategic growth, positioning themselves strongly for future success.",
          image:HRM,
          image2:HRAutomation
        },
        {
          title: "DayTracker - GPS Attendance System",
          description: "DayTracker is a GPS-based attendance system that uses real-time location tracking to verify employee presence at designated worksites. It automates attendance logging, reduces manual errors, and enhances accountability. With geofencing, time-stamping, and centralized reporting, DayTracker streamlines workforce management for field teams, remote staff, and on-site personnel.",
          image:GPSAttendance,
          image2:DayTrackerGPS,
        },
        {
          title: "Nexthire",
          description: "Nexthire is an AI-powered recruitment platform that streamlines the entire hiring lifecycle using intelligent automation, resume parsing, and predictive candidate matching. It enhances talent acquisition by reducing time-to-hire, minimizing bias, and improving candidate experience through data-driven insights, workflow optimization, and seamless integration with existing HR systems.",
          image: IntelligentHiring,
          image2: NextHire1,
        },
      ],
    },
    {
      title: "Defense Products",
      subtopics: [
        {
          title: "BH 9",
          description: "We are excited to announce the development of our project BH 9 — an AI-Based Aircraft Recognition System. This innovative system will leverage advanced machine learning and computer vision technologies to accurately detect, classify, and track various types of aircraft in real-time.Designed for applications in defence, air traffic control, and airport management, the system will enhance situational awareness, improve response times and strengthen security measures. By analysing visual and radar data with high precision, it will significantly reduce human error and provide faster, more reliable aircraft identification.This project marks a major step toward smarter, automated aviation monitoring solutions, and is set to redefine operational efficiency and safety standards in the aerospace industry.",
          image: ADetect,
          image2: BH91,
        },
        {
          title: "Epalutte GPS Antenna",
          description: "The Epaulette GPS Antenna System incorporates advanced GNSS technology into a compact, wearable form factor, enabling precise real-time positioning in challenging environments. Designed for defense, security, and field operations, it ensures continuous geolocation, improved signal acquisition, and seamless integration with tactical communication systems for mission-critical situational awareness and coordination.",
          image: GPS,
          image2: GpsAntenna,
        },
      ],
    },
    {
      title: "AI Products",
      subtopics: [
        {
          title: "Smart Sunglasses",
          description: "Smart Sunglasses combine AI, AR (Augmented Reality), and sensor technology to deliver real-time navigation, facial recognition, and contextual information overlays. Equipped with voice assistants, gesture controls, and Bluetooth connectivity, they enhance situational awareness, hands-free communication, and immersive experiences for users in outdoor, tactical, or professional environments.",
          image:SmartGlasses,
          image2:SmartSunGlasses,
        },
        {
          title: "SandTime - AI Attendance System",
          description: "SandTime is an AI-powered attendance management system that utilizes facial recognition, geofencing, and real-time analytics to automate employee check-ins, monitor workforce activity, and prevent time fraud. Designed for scalability and accuracy, it integrates seamlessly with HR platforms, ensuring efficient, transparent, and data-driven attendance tracking across organizations.",
          image: SandTimeAttendance,
          image2: Attendance,
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
          <div
            onClick={() => navigate("/")}
            className="flex-shrink-0 pt-1 pr-1 cursor-pointer items-center h-17 bg-[#0070c0]"
          >
            <img src={logo} alt="ACM" className="h-15 w-auto p-1" />
          </div>

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

          {/* Mobile Hamburger mneu */}
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
                              image2: sub.image2,
                            }
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
                                      image2: sub.image2,
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
