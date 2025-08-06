import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Code, Cpu, Lock, Network, FileCheck, Bot } from 'lucide-react';
const solutions = [
  {
    title: "Network Security & Management",
    icon: Shield,
    gradient: "from-blue-500 to-blue-700",
    description:
      "ACM Network Security & Management is a comprehensive process of protecting your network infrastructure, including both physical and virtual devices, from unauthorized access, cyber threats, and vulnerabilities. It involves applying security policies, using tools like firewalls, intrusion detection/prevention systems, encryption, and access controls to ensure the confidentiality, integrity, and availability of sensitive data and network resources. This centralized management approach provides the you with real-time visibility, automated policy enforcement, and faster threat detection, enabling efficient network monitoring, reduced human errors, regulatory compliance and business continuity. Ultimately, it helps safeguard critical information, streamline administration and adapt security measures to evolving cyber risks, ensuring secure and reliable network operations across all users and endpoints.",
    features: ["Real-time Monitoring", "Threat Detection", "Policy Enforcement", "Compliance Management"]
  },
  {
    title: "Customized Software Development",
    icon: Code,
    gradient: "from-purple-500 to-purple-700",
    description:
      "Customized Software Development is a specialized process of designing, developing, and deploying software solutions that are tailor-made specifically to fit your company's unique needs, operational workflows, and business goals. Unlike generic off-the-shelf software that often requires businesses to adapt their processes to fit the tool, customized software is created with your organization's precise requirements in mind, enabling seamless integration and optimal performance.By focusing on your company's distinct challenges and objectives, customized software empowers your teams to work more effectively and efficiently. Whether it's automating complex business processes, managing data in a way that aligns with your internal standards, improving communication channels, or enhancing user interaction, tailored solutions provide a competitive advantage through flexibility and scalability.The development cycle includes close collaboration with your stakeholders to thoroughly understand your workflows, industry regulations, and technical ecosystem. This ensures that the final product not only fits current needs but is also adaptable to future growth and changes in market dynamics. Moreover, custom software can be designed to integrate smoothly with your existing hardware and other software systems, reducing disruptions and accelerating adoption.Beyond functionality, customized software development prioritizes security, ensuring that sensitive business data is protected according to industry best practices and compliance standards. Ongoing support and maintenance are integral parts of the process, allowing your software to evolve alongside your company, incorporate user feedback, and respond to new challenges promptly.Investing in customized software development means choosing innovation and efficiency tailored specifically for your business. It unlocks new potential by streamlining operations, enhancing productivity, and delivering a superior user experience—all critical factors to staying competitive and agile in today's fast-paced market.",
    features: ["Tailored Solutions", "Seamless Integration", "Scalable Architecture", "Ongoing Support"]
  },
  {
    title: "Customized Enhancements with AI",
    icon: Bot,
    gradient: "from-green-500 to-emerald-700",
    description:"Customized Software Development is a specialized process of designing, developing, and deploying software solutions that are tailor-made specifically to fit your company's unique needs, operational workflows, and business goals. Unlike generic off-the-shelf software that often requires businesses to adapt their processes to fit the tool, customized software is created with your organization's precise requirements in mind, enabling seamless integration and optimal performance.By focusing on your company's distinct challenges and objectives, customized software empowers your teams to work more effectively and efficiently. Whether it's automating complex business processes, managing data in a way that aligns with your internal standards, improving communication channels, or enhancing user interaction, tailored solutions provide a competitive advantage through flexibility and scalability.The development cycle includes close collaboration with your stakeholders to thoroughly understand your workflows, industry regulations, and technical ecosystem. This ensures that the final product not only fits current needs but is also adaptable to future growth and changes in market dynamics. Moreover, custom software can be designed to integrate smoothly with your existing hardware and other software systems, reducing disruptions and accelerating adoption.Beyond functionality, customized software development prioritizes security, ensuring that sensitive business data is protected according to industry best practices and compliance standards. Ongoing support and maintenance are integral parts of the process, allowing your software to evolve alongside your company, incorporate user feedback, and respond to new challenges promptly.Investing in customized software development means choosing innovation and efficiency tailored specifically for your business. It unlocks new potential by streamlining operations, enhancing productivity, and delivering a superior user experience—all critical factors to staying competitive and agile in today's fast-paced market.",
  },
  {
    title: "Cyber Security & Management",
    icon: Lock,
    gradient: "from-red-500 to-red-700",
    description:"Customized Software Development is a specialized process of designing, developing, and deploying software solutions that are tailor-made specifically to fit your company's unique needs, operational workflows, and business goals. Unlike generic off-the-shelf software that often requires businesses to adapt their processes to fit the tool, customized software is created with your organization's precise requirements in mind, enabling seamless integration and optimal performance.By focusing on your company's distinct challenges and objectives, customized software empowers your teams to work more effectively and efficiently. Whether it's automating complex business processes, managing data in a way that aligns with your internal standards, improving communication channels, or enhancing user interaction, tailored solutions provide a competitive advantage through flexibility and scalability.The development cycle includes close collaboration with your stakeholders to thoroughly understand your workflows, industry regulations, and technical ecosystem. This ensures that the final product not only fits current needs but is also adaptable to future growth and changes in market dynamics. Moreover, custom software can be designed to integrate smoothly with your existing hardware and other software systems, reducing disruptions and accelerating adoption.Beyond functionality, customized software development prioritizes security, ensuring that sensitive business data is protected according to industry best practices and compliance standards. Ongoing support and maintenance are integral parts of the process, allowing your software to evolve alongside your company, incorporate user feedback, and respond to new challenges promptly.Investing in customized software development means choosing innovation and efficiency tailored specifically for your business. It unlocks new potential by streamlining operations, enhancing productivity, and delivering a superior user experience—all critical factors to staying competitive and agile in today's fast-paced market.",
  
  },
  {
    title: "Operational Technology Security",
    icon: Cpu,
    gradient: "from-orange-500 to-orange-700",
    description:"Customized Software Development is a specialized process of designing, developing, and deploying software solutions that are tailor-made specifically to fit your company's unique needs, operational workflows, and business goals. Unlike generic off-the-shelf software that often requires businesses to adapt their processes to fit the tool, customized software is created with your organization's precise requirements in mind, enabling seamless integration and optimal performance.By focusing on your company's distinct challenges and objectives, customized software empowers your teams to work more effectively and efficiently. Whether it's automating complex business processes, managing data in a way that aligns with your internal standards, improving communication channels, or enhancing user interaction, tailored solutions provide a competitive advantage through flexibility and scalability.The development cycle includes close collaboration with your stakeholders to thoroughly understand your workflows, industry regulations, and technical ecosystem. This ensures that the final product not only fits current needs but is also adaptable to future growth and changes in market dynamics. Moreover, custom software can be designed to integrate smoothly with your existing hardware and other software systems, reducing disruptions and accelerating adoption.Beyond functionality, customized software development prioritizes security, ensuring that sensitive business data is protected according to industry best practices and compliance standards. Ongoing support and maintenance are integral parts of the process, allowing your software to evolve alongside your company, incorporate user feedback, and respond to new challenges promptly.Investing in customized software development means choosing innovation and efficiency tailored specifically for your business. It unlocks new potential by streamlining operations, enhancing productivity, and delivering a superior user experience—all critical factors to staying competitive and agile in today's fast-paced market.",
  
  },
  {
    title: "Networking Design",
    icon: Network,
    gradient: "from-cyan-500 to-cyan-700",
    description:
      "Expert network architecture and design services that create robust, scalable, and efficient network infrastructures. Our solutions optimize performance, enhance security, and ensure reliable connectivity across your entire organization while preparing for future growth.",
    features: ["Network Architecture", "Performance Optimization", "Scalable Design", "Infrastructure Planning"]
  },
  {
    title: "Cert-in Certified Security Audits",
    icon: FileCheck,
    gradient: "from-indigo-500 to-indigo-700",
    description:
      "Comprehensive security audits conducted by Cert-in certified professionals to evaluate your organization's security posture. Our thorough assessments identify vulnerabilities, ensure compliance with industry standards, and provide actionable recommendations for enhanced security.",
    features: ["Compliance Assessment", "Vulnerability Analysis", "Risk Evaluation", "Certification Support"]
  },
];

const SolutionCard = ({ solution, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = solution.icon;
  
  return (
    <div
      className={`transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`flex flex-col lg:flex-row ${
          index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
        } items-center gap-12 group`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image/Icon Section */}
        <div className="w-full lg:w-1/2 relative">
          <div className={`relative bg-gradient-to-r ${solution.gradient} rounded-2xl p-8 shadow-2xl transform transition-all duration-500 ${isHovered ? 'scale-105 shadow-3xl' : ''}`}>
            <div className="absolute inset-0 bg-white opacity-10 rounded-2xl"></div>
            <div className="relative flex items-center justify-center h-64">
              <Icon className="w-32 h-32 text-white" />
            </div>
            {/* Floating particles effect */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-white opacity-30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-white opacity-40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-12 left-12 w-1 h-1 bg-white opacity-50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="space-y-4">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {solution.title}
            </h3>
                    
            <div className="text-gray-600 text-base leading-relaxed space-y-4">
              {solution.description.split('.').slice(0, 3).map((sentence, idx) => (
                <p key={idx} className="transition-all duration-300 group-hover:text-gray-700">
                  {sentence.trim()}.
                </p>
              ))}
            </div>
          </div>
          
          {/* CTA Button */}
          <button className={`bg-gradient-to-r ${solution.gradient} text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 group`}>
            <span>Learn More</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Solution = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const cards = document.querySelectorAll('.solution-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-delay {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.3s both;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
      
      <Navbar />
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Our Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to meet your business challenges and drive innovation.
            </p>
          </div>

          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="solution-card"
                data-index={index}
              >
                <SolutionCard
                  solution={solution}
                  index={index}
                  isVisible={visibleCards.has(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our solutions can help you achieve your goals and stay ahead of the competition.
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solution;