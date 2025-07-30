import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../assets/WorkACM.png";
import img2 from "../assets/CyberSecurity.jpg";
import img3 from "../assets/DEFENSEDR1.jpg";
import img4 from "../assets/EmpoweringAI.jpg";
import img5 from "../assets/FutureInnovation.jpg";

const AboutAcm = () => {
  const [activeCard, setActiveCard] = useState(null);
  const cardRef = useRef();

  const initiatives = [
    {
      title: "R&D Planning",
      description:
        "ACM R&D planning is the structured process by which we chart the course for innovative activities to meet strategic goals. It involves identifying key areas for technological advancement or product improvement, setting clear objectives, allocating resources, and establishing timelines. By proactively assessing risks and monitoring progress, we ensure that R&D efforts remain effective and adaptable, enabling us to stay competitive amid rapidly evolving market and technology landscapes.",
      image: img2,
    },
    {
      title: "Defense Research",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, exercitationem obcaecati rem fugit ut, autem corporis vero explicabo eveniet incidunt.",
      image: img3,
    },
    {
      title: "Skill Upgradation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      image: img4,
    },
    {
      title: "Industry Academia Colloboration ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",
      image: img5,
    },
  ];

  const values = [
    {
      title: "Innovation",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec leo nec lorem vestibulum convallis.",
      icon: "💡",
    },
    {
      title: "Collaboration",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nunc sit amet tincidunt facilisis, augue dui tempor lorem.",
      icon: "🤝",
    },
    {
      title: "Impact",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan sem at quam iaculis, a blandit justo efficitur.",
      icon: "🎯",
    },
  ];

  const detailCards = {
    Collaboration: [
      {
        title: "Aloomatech",
        desc: "Strategic partnership focused on AI product development and real-world deployment of emerging technologies.",
      },
      {
        title: "BIT Mesra",
        desc: "Academic collaboration for research projects, workshops, and innovation-driven learning.",
      },
    ],
    Innovation: [
      {
        title: "Innovation Sprint",
        desc: "Cross-functional hackathons and prototype development labs to bring new ideas to life.",
      },
      {
        title: "R&D Incubation",
        desc: "Nurturing early-stage research concepts into scalable, impactful solutions.",
      },
    ],
    Impact: [
      {
        title: "Tech for Good",
        desc: "Leveraging AI for social initiatives, education, and inclusive technology projects.",
      },
      {
        title: "Sustainability Program",
        desc: "Focused research and outreach toward environmentally responsible computing.",
      },
    ],
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setActiveCard(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#0070c0] via-[#0056a3] to-[#003d7a] text-white py-20 px-6 text-center rounded-b-[15px] rounded-t-sm overflow-hidden mt-2 w-[90%] mx-auto">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-1">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">ACM</span>
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90 fo">
             Shaping Research into life
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 text-black font-semibold">Estd. 2020</div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 text-black font-semibold ">ISO 9001:2015, 27001:2022 Certified</div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 text-black font-semibold">CMMI Level-5</div>
          </div>
        </div>
      </section>

            <main className="flex-1">
        {/* Who We Are */}
        <section className="py-20 px-6 sm:px-10 lg:px-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <div className="relative group w-full lg:w-1/2">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0070c0] to-[#00a8ff] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <img src={img} alt="About ACM" className="relative w-full h-full max-h-[500px] object-contain rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-300" />
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Who <span className="text-[#0070c0]">We Are</span></h2>
              <p className="text-gray-700 text-lg text-justify">At Artificial Computing Machines, we are committed to leading the way in cutting-edge research and development of the latest computing technologies. Whether it’s OT Security, Cybersecurity, Machine Learning, Artificial Intelligence or Defence, our goal is to provide innovative solutions that improve security, effectiveness and resilience in vital sectors across the globe. </p>
              <p className="text-gray-700 text-lg text-justify">Our team of highly skilled engineers, scientists, and security professionals specialises in creating innovative protection technologies, intelligent threat detection systems, and automation powered by artificial intelligence. Our goal is to transform industries by combining strong cybersecurity frameworks with AI-powered insights to protect infrastructure, businesses, and national security.</p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full text-sm font-semibold">🌍 Global Community</div>
                <div className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full text-sm font-semibold">🚀 Innovation Focused</div>
              </div>
            </div>
          </div>
        </section>

        {/* Initiatives */}
        <section className="py-20 bg-gray-200/50">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-[#0070c0]">Initiatives</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dive into our portfolios that blends cutting-edge innovation with meaningful social change.
              </p>
            </div>

            <div className="space-y-16">
              {initiatives.map((initiative, idx) => (
                <div key={idx} className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`relative group ${idx % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#000000]/10 to-[#000000]/80 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                    <img src={initiative.image} alt={initiative.title} className="relative w-full h-80 object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition duration-300" />
                  </div>
                  <div className={`space-y-6 ${idx % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">{initiative.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed text-justify">{initiative.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-gradient-to-br from-[#0070c0] to-[#0056a3] text-white relative overflow-hidden">
          <div className="relative max-w-5xl mx-auto text-center px-6 sm:px-10 lg:px-24">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">Our <span className="text-yellow-400">Mission</span></h2>
            <p className="text-xl sm:text-2xl leading-relaxed opacity-95 mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit...
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-sm opacity-80">Fostering continuous learning and knowledge sharing</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold mb-2">Research</h3>
                <p className="text-sm opacity-80">Pushing the boundaries of computational science</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-sm opacity-80">Creating solutions for tomorrow's challenges</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white" ref={cardRef}>
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-[#0070c0]">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our work and define our community culture.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white border-2 border-gray-100 hover:border-[#0070c0] rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                  onClick={() => setActiveCard((prev) => (prev === value.title ? null : value.title))}
                >
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-[#0070c0] mb-4 group-hover:text-[#0056a3] transition-colors">{value.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>

            {activeCard && detailCards[activeCard] && (
              <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2 gap-8">
                {detailCards[activeCard].map((detail, i) => (
                  <div key={i} className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                    <h4 className="text-xl font-bold text-[#0070c0] mb-2">{detail.title}</h4>
                    <p className="text-gray-700">{detail.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutAcm;
