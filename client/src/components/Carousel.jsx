import React, { useState } from "react"
import { assets } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    topic: "OT FOR INDUSTRY",
    title: "Protecting Critical Infrastructure: Perspectives on Industrial OT Security Environments",
    link: "#",
    description:`
 Operational Technology (OT) Security is the comprehensive protection of your company’s industrial networks, systems, and physical devices that control or monitor critical processes—such as manufacturing lines, power grids, transportation systems, and facility management. Unlike traditional IT environments focused on data and communication infrastructure, OT environments involve direct interaction with machinery and production assets, making their security vital for both digital safety and operational continuity.
Modern industrial environments are increasingly connected, bridging the gap between legacy control systems and advanced digital technologies. This connectivity has improved efficiency and insight, but it has also exposed OT systems to cyber threats that can disrupt operations, endanger safety, and cause significant financial losses. OT Security addresses these risks by implementing a layered defense strategy that includes network segmentation, real-time monitoring, vulnerability assessments, access controls, robust authentication mechanisms, and specialized incident response plans tailored to industrial settings.
A robust OT security framework ensures that control systems such as SCADA, PLCs, and DCS are continuously monitored and protected from unauthorized access, malware, ransomware, insider threats, and supply chain vulnerabilities. Unlike IT security, OT security prioritizes maintaining uptime, physical safety, and process integrity—requiring a deep understanding of both cyber risks and operational requirements.
Effective OT Security is not just about deploying technologies, but also fostering a culture of security awareness among teams, ensuring compliance with industry regulations (such as NIST, IEC 62443, and ISO/IEC 27019), and collaborating with vendors, partners, and regulators. Regular risk assessments and cross-discipline incident response protocols help your organization prepare for and rapidly mitigate cyber-physical threats.
By prioritizing OT Security, your company safeguards critical infrastructure, minimizes downtime, protects against converging IT-OT cyber risks, and builds trust with customers and stakeholders. This proactive approach enables safe, resilient, and future-ready operations in a world where digital and physical systems are increasingly intertwined.
`,
    image: assets.OTSEC3,
  },
  {
    topic: "INNOVATE, AUTOMATE & ELEVATE",
    title: "AI for a Limitless Future with Artificial Computing Machines",
    link: "#",
    description:`
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

`,
    image: assets.AIbrain,
  },
  {
    topic: "NATIONAL DEFENSE",
    title: "Innovating for Supremacy. Designing for Security",
    details:
      "Leveraging innovation and expertise to build resilient defense solutions for a safer, stronger nation.",
    description:`We are excited to announce the development of our project BH 9 — an AI-Based Aircraft Recognition System. This innovative system will leverage advanced machine learning and computer vision technologies to accurately detect, classify, and track various types of aircraft in real-time.Designed for applications in defence, air traffic control, and airport management, the system will enhance situational awareness, improve response times and strengthen security measures. By analysing visual and radar data with high precision, it will significantly reduce human error and provide faster, more reliable aircraft identification.This project marks a major step toward smarter, automated aviation monitoring solutions, and is set to redefine operational efficiency and safety standards in the aerospace industry.
       `,
    link: "#",
    image: assets.DEFENSEDR1,
  },
];

const Carousel = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const navigate = useNavigate();
  const handleExpand = (index) => {
    setExpandedIndex(index);
  };

  const getCollapsedHeight = (index) => {
    return index % 2 === 0 ? "h-[65%]" : "h-[85%]";
  };

  return (
    <div className="w-[85%] mx-auto mt-10 px-4">
      <div className="flex h-[40vh] md:h-[60vh] lg:h-[70vh] gap-1 rounded-xl overflow-hidden">
        {slides.map((slide, index) => {
          const isExpanded = index === expandedIndex;
          const collapsedHeight = getCollapsedHeight(index);

          return (
            <div
              key={index}
              className={`relative transition-all duration-700 ease-in-out cursor-pointer overflow-hidden shadow-lg ${
                isExpanded
                  ? "flex-[12] opacity-100 h-full"
                  : `flex-[0.8] opacity-80 hover:opacity-100 ${collapsedHeight} self-center shadow-xl hover:shadow-2xl`
              }`}
              onClick={() => handleExpand(index)}
            >
              <div
                className="w-full h-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/10"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white">
                 

                  {isExpanded && (
                    <div className="transform transition-all duration-500 delay-200 opacity-100">
                      <div className="md:bg-black/40 bg-black/20 rounded-sm p-4 sm:p-6">
                        <span className="text-white text-sm sm:text-base font-medium">{slide.topic}</span>
                        <h2 className="text-sm sm:text-2xl md:text-3xl lg:text-3xl mt-2 mb-3">{slide.title}</h2>
                        {slide.details && (
                          <p className="text-gray-200 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm md:text-base max-w-2xl">
                            {slide.details}
                          </p>
                        )}
                        {/* <a
                          href={slide.link}
                          className="inline-flex items-center justify-start hover:text-blue-600 text-white py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a> */}

                        <button
                              onClick={() =>
                                navigate("/about-services", {
                                  state: {
                                    title: slide.title,
                                    description: slide.description,
                                    image2: slide.image,
                                  },
                                })
                              }
                              className="inline-flex items-center justify-start hover:text-blue-600 text-white py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
                            >
                              Learn More
                              <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* MOVED THIS FROM BOTTOM RIGHT TO TOP RIGHT WITH SOME GAP */}
                {!isExpanded && (
                  <div className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                    <svg
                      className="w-10 h-10 text-white  bg-black/50 rounded-sm"
                      fill="none"
                      stroke="currentColor"
                      viewBox="2 2 20 20"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 11L5 5M5 5H8M5 5V8" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 13L19 19M19 19H16M19 19V16" />
                    </svg>
                  </div>
                )}

                {isExpanded && (
                  <div className="absolute inset-0 border-4 border-blue-400/50 rounded-lg pointer-events-none"></div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-8 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleExpand(index)}
            className={`transition-all duration-300 ${
              index === expandedIndex
                ? "w-10 h-3 bg-blue-500 rounded-full"
                : "w-3 h-3 bg-gray-400 hover:bg-gray-300 rounded-full"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
