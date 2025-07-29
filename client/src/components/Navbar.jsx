import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Search } from "lucide-react";
import logo from "../assets/ACM9.png";
import { useNavigate } from "react-router-dom";
import SandTime from "../assets/SandTime.png";
import SmartGlasses from "../assets/SmartGlasses.png";
import YogyataPortal from "../assets/YogyataPortal.png";
import SquadForce360 from "../assets/SquadForce360.png";
const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const productData = [
    {
      title: "Software Products",
      subtopics: [
        {
          name: "Yogyata Portal",
          description:
            "An AI-powered recruitment system delivers a smarter, faster, and more efficient solution to meet the demands of modern hiring. By leveraging machine learning, natural language processing, and predictive analytics, the system streamlines every stage of the hiring process, from sourcing and screening to candidate evaluation and selection. It intelligently analyzes resumes, matches applicants to job requirements, and predicts candidate success, significantly reducing manual effort and bias. Automated chatbots and interview scheduling tools enhance candidate engagement, while data-driven insights help organizations make better hiring decisions. This innovative approach accelerates recruitment cycles, improves talent quality, and optimizes workforce acquisition strategies",
          image: YogyataPortal,
        },
        {
          name: "SquadForce 360",
          description:
            "A fully automated Human Resource Management System (HRMS) delivers a transformative solution by streamlining all core HR functions through intelligent automation and centralized management. Designed to optimize workforce administration, it automates critical processes such as recruitment, onboarding, payroll, performance tracking, leave management, and compliance, significantly reducing manual workload and errors. The system leverages AI-driven analytics to offer actionable workforce insights, enabling data-backed decision-making and improving employee engagement. With a centralized platform accessible anytime, it enhances collaboration, ensures accuracy, and accelerates HR operations, empowering organizations to boost productivity, efficiency, and scalability while creating a seamless employee and management experience",
          image: SquadForce360,
        },
        {
          name: "DayTracker - GPS Attendance System",
          description:
            "DayTracker is a GPS-enabled attendance system designed to accurately track employee presence by capturing real-time location and timestamp data, ensuring personnel are within authorized work zones. Utilizing advanced geofencing, the system validates attendance even in remote or field-based environments. Built with offline functionality, DayTracker securely logs data locally during network downtime and automatically synchronizes with the central database once connectivity is restored. Its robust architecture ensures data integrity, reliability, and high operational efficiency. With seamless integration into HR and payroll systems, it offers organizations precise workforce monitoring, reduces time fraud, and optimizes productivity through automated, location-based attendance tracking.",
          image:
            "https://via.placeholder.com/600x400?text=DayTracker+Attendance",
        },
        {
          name: "Nexthire",
          description:
            "This futuristic recruitment solution leverages advanced AI-driven candidate screening and analytics to revolutionize the hiring process. Using machine learning, natural language processing, and predictive modeling, it intelligently evaluates resumes, profiles, and candidate interactions to match talent with job requirements accurately. The system provides deep insights through real-time analytics, predicting candidate success, cultural fit, and long-term retention potential. Automated shortlisting, bias reduction, and workflow optimization significantly accelerate recruitment cycles. Integrated with applicant tracking systems, it ensures seamless operations while enabling data-backed decision-making. This next-generation platform empowers organizations to attract, assess, and hire top talent with unmatched speed, precision, and efficiency.",
          image: "https://via.placeholder.com/600x400?text=Nexthire",
        },
      ],
    },
    {
      title: "Defense Products",
      subtopics: [
        {
          name: "BH 9",
          description:
            "A sophisticated, AI-powered system is designed to automatically identify, track, and monitor aircraft in real time, significantly enhancing situational awareness for operators and decision-makers. Leveraging advanced computer vision, machine learning, and sensor fusion technologies, the system processes live data from multiple sources, including radar, satellite, and surveillance feeds, to deliver accurate, timely insights. By autonomously detecting aircraft movements, classifying types, and predicting flight paths, it minimizes human error, reduces response time, and improves operational efficiency. This innovative solution empowers organizations to make faster, data-driven decisions, strengthening security, optimizing air traffic management, and ensuring safer skies through intelligent monitoring capabilities.",
          image: "https://via.placeholder.com/600x400?text=BH+9",
        },
        {
          name: "Epalutte GPS Antenna",
          description:
            "The Epaulette GPS Antenna System is a cutting-edge wearable solution that integrates advanced positioning capabilities into a compact, lightweight platform, specifically designed for demanding security, defense, and critical field operations. Mounted seamlessly on tactical gear, it provides precise, real-time location tracking, ensuring mission teams maintain situational awareness and reliable connectivity in dynamic environments. Built for rugged conditions, the system supports multi-constellation GNSS, enabling superior accuracy and resilience, even in challenging terrains or signal-degraded areas. Its ergonomic design enhances user mobility and comfort, making it an indispensable tool for personnel requiring continuous, secure, and accurate positioning during high-stakes missions",
          image: "https://via.placeholder.com/600x400?text=Epalutte+GPS",
        },
      ],
    },
    {
      title: "AI Products",
      subtopics: [
        {
          name: "Smart Sunglasses",
          description:
            "Developed in collaboration with Jio, these AI-powered smart sunglasses integrate advanced augmented reality (AR) capabilities and intelligent voice assistance into a sleek wearable device. Engineered for seamless connectivity, the device supports full compatibility with both Android and iOS platforms via low-latency Bluetooth and Wi-Fi modules. Equipped with high-resolution AR projection, integrated sensors, and AI-driven contextual assistance, it delivers immersive visual overlays, hands-free navigation, and real-time information access. The built-in voice assistant utilizes natural language processing for intuitive control, enabling users to interact effortlessly. Designed for efficiency, the system optimizes battery life, ensures secure data transmission, and delivers a cutting-edge wearable experience.",
          image: SmartGlasses,
        },
        {
          name: "SandTime - AI Attendance System",
          description:
            "This AI-based facial recognition attendance system delivers secure, contactless, and highly efficient workforce management. Utilizing advanced computer vision, deep learning algorithms, and 3D facial mapping, the system accurately identifies employees in real time, even under variable lighting or environmental conditions. Integrated liveness detection prevents spoofing attempts, ensuring robust security. The platform supports edge processing for rapid authentication and seamless operation, minimizing latency and dependency on network bandwidth. Attendance data is automatically synchronized with centralized HR and payroll systems, enhancing operational efficiency. Designed for scalability, it streamlines workforce tracking, eliminates time fraud, and ensures accurate, tamper-proof attendance management across organizations.",
          image:
            SandTime,
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
            className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-20 overflow-y-auto transition-all duration-300 ease-in-out transform opacity-100 max-h-screen translate-y-0"
          >

          <div className="max-w-[1200px] sm:mx-10 mx-2 py-5 px-2 grid grid-cols-2 md:grid-cols-4 gap-[15px]">
            {showDropdown === "product" &&
              productData.map((product) => (
                <div key={product.title}>
                  <h3 className="text-[#0070c0] text-md font-semibold">{product.title}</h3>
                  <ul className="mt-2 space-y-1">
                    {product.subtopics.map((sub) => (
                      <li
                        key={sub.name}
                        onClick={() => {
                          navigate(
                            `/products/${product.title.toLowerCase().replace(/\s+/g, "-")}/${sub.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`,
                            {
                              state: {
                                title: sub.name,
                                category: product.title,
                                description: sub.description,
                                image: sub.image,
                              },
                            }
                          );
                          setShowDropdown(null);
                        }}
                        className="text-gray-700 hover:text-[#0070c0] text-sm cursor-pointer transition-colors"
                      >
                        {sub.name}
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
    </nav>
  );
};

export default Navbar;
