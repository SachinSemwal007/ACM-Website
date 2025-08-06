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
  {
    title: "Network Security & Management",
    description: "ACM Network Security & Management is a comprehensive process of protecting your network infrastructure, including both physical and virtual devices, from unauthorized access, cyber threats, and vulnerabilities. It involves applying security policies, using tools like firewalls, intrusion detection/prevention systems, encryption, and access controls to ensure the confidentiality, integrity, and availability of sensitive data and network resources. This centralized management approach provides the you with real-time visibility, automated policy enforcement, and faster threat detection, enabling efficient network monitoring, reduced human errors, regulatory compliance and business continuity. Ultimately, it helps safeguard critical information, streamline administration and adapt security measures to evolving cyber risks, ensuring secure and reliable network operations across all users and endpoints."
       // image: NetworkSecurityImg,
    // image2: NetworkSecurityHero,
  },
  {
    title: "Customized Software Development",
    description: `Customized Software Development is a specialized process of designing, developing, and deploying software solutions that are tailor-made specifically to fit your company’s unique needs, operational workflows, and business goals. Unlike generic off-the-shelf software that often requires businesses to adapt their processes to fit the tool, customized software is created with your organization’s precise requirements in mind, enabling seamless integration and optimal performance.

By focusing on your company’s distinct challenges and objectives, customized software empowers your teams to work more effectively and efficiently. Whether it’s automating complex business processes, managing data in a way that aligns with your internal standards, improving communication channels, or enhancing user interaction, tailored solutions provide a competitive advantage through flexibility and scalability.

The development cycle includes close collaboration with your stakeholders to thoroughly understand your workflows, industry regulations, and technical ecosystem. This ensures that the final product not only fits current needs but is also adaptable to future growth and changes in market dynamics. Moreover, custom software can be designed to integrate smoothly with your existing hardware and other software systems, reducing disruptions and accelerating adoption.

Beyond functionality, customized software development prioritizes security, ensuring that sensitive business data is protected according to industry best practices and compliance standards. Ongoing support and maintenance are integral parts of the process, allowing your software to evolve alongside your company, incorporate user feedback, and respond to new challenges promptly.

Investing in customized software development means choosing innovation and efficiency tailored specifically for your business. It unlocks new potential by streamlining operations, enhancing productivity, and delivering a superior user experience—all critical factors to staying competitive and agile in today’s fast-paced market.
`// image: CustomSoftwareImg,
    // image2: CustomSoftwareHero,
  },
  {
    title: "Customized Enhancements with AI",
    description: `
ACM helps you in designing and integrating artificial intelligence solutions uniquely tailored to your company’s operations, workflows and strategic goals. Unlike generic AI tools, custom AI is built to fit your specific data, business challenges and industry context—delivering maximum efficiency, precision and competitive advantage.
With AI-powered customization, your business can automate routine processes, analyze large datasets for actionable insights and deliver highly personalized user experiences. Whether it's through intelligent chatbots, dynamic recommendation engines, predictive analytics or workflow automation, AI drives operational excellence and creates new avenues for innovation and growth. These solutions are developed collaboratively with your to understand your current systems, future vision and compliance requirements—ensuring seamless integration and safeguarding sensitive data within your secure environment.
Custom AI not only boosts productivity by streamlining repetitive tasks, but it also adapts and scales alongside your business. As your operations evolve, these solutions can be retrained and extended to accommodate new data, trends and business priorities. Advanced features like real-time decision-making, automated A/B testing and tailored customer engagement help your company optimize resources and make smarter, faster decisions based on real-time insights.
Importantly, a customized approach to AI provides you with full control and ownership over your data, which is essential for meeting regulatory requirements and maintaining user privacy. By embedding AI into your IT ecosystem, your future-proof your business, staying agile and ready to seize emerging opportunities in a fast-changing digital landscape.
Key Benefits of Customized AI Enhancement:
• Solutions precisely aligned with your business objectives and KPIs.
• Automated workflows that reduce manual effort and costs while improving operational speed and accuracy.
• Personalization at scale—for both customer-facing experiences and internal processes.
• Robust data privacy and seamless integration into existing systems.
• Scalable, flexible architecture that grows alongside your company’s needs.
• Proprietary AI that delivers differentiation and isn’t easily replicable by competitors.

` // image: AIEnhancementImg,
    // image2: AIEnhancementHero,
  },
  {
    title: "Cyber Security & Management",
    description:`
Cyber Security & Management is the strategic and systematic approach your company takes to protect its digital infrastructure, sensitive data, and information systems from unauthorized access, cyber threats, and potential breaches. It combines advanced technologies, robust policies, proactive risk management, and continuous monitoring to ensure the confidentiality, integrity, and availability of your business-critical assets.

In today’s interconnected and digital business environment, cyber threats such as malware, ransomware, phishing, insider threats, and sophisticated cyberattacks pose a significant risk to companies of all sizes. Effective cybersecurity management addresses these risks by implementing a comprehensive defense strategy that includes firewalls, intrusion detection and prevention systems, encryption, identity and access controls, vulnerability management, and incident response plans.

Cybersecurity management is not just about technology — it involves governance, employee awareness, and compliance with legal and regulatory requirements to create a security-conscious culture throughout the organization. It requires ongoing assessment of security posture, rapid detection and mitigation of vulnerabilities, and a clear assignment of responsibility among the security team and leadership.

By investing in cyber security management, your company ensures business continuity even in the face of cyber incidents, protects intellectual property and customer data, builds trust with stakeholders, and meets industry standards. Furthermore, it enables your business to adapt quickly to evolving cyber risks and complex regulatory landscapes, maintaining a strong security posture in a dynamic threat environment.

Key benefits include minimized financial losses from cyberattacks, reduced operational disruptions, improved regulatory compliance, proactive risk identification, and fostering a resilient organizational culture that prioritizes security at every level.

In summary, cyber security and management safeguard your company’s digital assets and reputation, delivering a secure and reliable operational foundation necessary for sustainable growth and competitive advantage.

If you would like, I can also help you create a shorter summary or a more technical version for your website.

This definition is synthesized from trusted sources describing corporate cybersecurity management frameworks and practices.

`
      // image: CyberSecurityImg,
    // image2: CyberSecurityHero,
  },


  {
    title: "Operational Technology Security",
    description: `
 Operational Technology (OT) Security is the comprehensive protection of your company’s industrial networks, systems, and physical devices that control or monitor critical processes—such as manufacturing lines, power grids, transportation systems, and facility management. Unlike traditional IT environments focused on data and communication infrastructure, OT environments involve direct interaction with machinery and production assets, making their security vital for both digital safety and operational continuity.
Modern industrial environments are increasingly connected, bridging the gap between legacy control systems and advanced digital technologies. This connectivity has improved efficiency and insight, but it has also exposed OT systems to cyber threats that can disrupt operations, endanger safety, and cause significant financial losses. OT Security addresses these risks by implementing a layered defense strategy that includes network segmentation, real-time monitoring, vulnerability assessments, access controls, robust authentication mechanisms, and specialized incident response plans tailored to industrial settings.
A robust OT security framework ensures that control systems such as SCADA, PLCs, and DCS are continuously monitored and protected from unauthorized access, malware, ransomware, insider threats, and supply chain vulnerabilities. Unlike IT security, OT security prioritizes maintaining uptime, physical safety, and process integrity—requiring a deep understanding of both cyber risks and operational requirements.
Effective OT Security is not just about deploying technologies, but also fostering a culture of security awareness among teams, ensuring compliance with industry regulations (such as NIST, IEC 62443, and ISO/IEC 27019), and collaborating with vendors, partners, and regulators. Regular risk assessments and cross-discipline incident response protocols help your organization prepare for and rapidly mitigate cyber-physical threats.
By prioritizing OT Security, your company safeguards critical infrastructure, minimizes downtime, protects against converging IT-OT cyber risks, and builds trust with customers and stakeholders. This proactive approach enables safe, resilient, and future-ready operations in a world where digital and physical systems are increasingly intertwined.
`  // image: OTImg,
    // image2: OTHero,
  },

  {
    title: "Networking Design",
    description: `
We at ACM help you to plan and create the structure of your company’s network infrastructure to ensure it supports current operations and future growth effectively and securely. We help in defining both the physical components—such as routers, switches, cabling and wireless access points—and the logical architecture, including IP addressing schemes, network segmentation and security protocols. A well-designed network aligns with your business goals by providing reliable, scalable, and high-performance connectivity for all users, applications, and devices across locations.
Our key principles helps in guiding network design that includes scalability—to support growth without major rework; availability—to maintain continuous operation even during failures through redundancy; performance—to handle data traffic efficiently ensuring minimal delays and high bandwidth; and security—to protect sensitive data and prevent unauthorized access by implementing firewalls, intrusion detection, and segmented zones.
ACM’s Network design also considers the optimal topology or arrangement of network devices and connections, such as star, mesh, or hybrid topologies, each chosen based on factors like cost, complexity, and fault tolerance. Logical segmentation through techniques like VLANs helps isolate traffic for security and performance, while careful hardware and software selection ensures compatibility and ease of management.
A Comprehensive network design anticipates future needs by including flexible, modular elements and backup internet and failover paths to prevent downtime. ACM’s proactive approach reduces IT support workloads, enhances user experience with faster data flows and safeguards data compliance requirements.
Implementing a thoughtfully designed network infrastructure empowers your company with secure, robust and scalable connectivity, essential for efficient collaboration, cloud integration and digital transformation initiatives. It enables your business to remain agile, minimize operational disruptions, and maintain a competitive edge in an increasingly connected world.

`    // image: NetworkDesignImg,
    // image2: NetworkDesignHero,
  },
  {
    title: "Cert-in Certified Security Audits",
   description: `A CERT-In Certified Security Audit is a comprehensive cybersecurity assessment performed by auditors officially empanelled by the Indian Computer Emergency Response Team (CERT-In)—the national nodal agency under MeitY. These audits are mandatory for organizations operating digital systems in India, with at least one annual risk-based, domain-specific audit required.

The scope includes websites, applications, networks, cloud, OT, and technologies like AI and blockchain. The objective is to identify cybersecurity risks, validate regulatory compliance, and strengthen cyber resilience, following CERT-In’s structured policy guidelines.

**ACM’s Key Steps in the Audit Lifecycle:**
• Scope Definition: Define assets (networks, apps, infra), type (e.g., VAPT), and roles.
• Security Evaluation: Conduct automated and manual assessments (vuln scans, pentests, config reviews, code analysis).
• Reporting & Remediation: Deliver detailed reports with risks, vulnerabilities, and remediation guidance, followed by re-testing.
• Certification: Upon remediation, ACM provides CERT-In Compliance Certificates through authorized partners.
• Continuous Improvement: Encourage sustained cybersecurity maturity and regulatory alignment.

**Benefits for Your Organization:**
• Demonstrates strong data protection and compliance posture.
• Builds customer and stakeholder trust.
• Provides competitive edge by managing cyber risks.
• Enables proactive cyber hygiene via expert-led audits.

*Note : ACM is in the process of official CERT-In empanelment. Meanwhile, certifications are delivered through certified collaborations._`

        // image: CertInAuditImg,
    // image2: CertInAuditHero,
  },
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
                  <li
                    key={solution.title}
                    onClick={() => {
                      navigate("/about-services", {
                        state: {
                          title: solution.title,
                          category: "Our Services",
                          description: solution.description,
                          // image: solution.image,
                          // image2: solution.image2,
                        }
                      });
                      setShowDropdown(null);
                    }}
                    className="text-gray-700 hover:text-[#0070c0] text-sm cursor-pointer transition-colors"
                  >
                    {solution.title}
                  </li>
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
