import React, { useState } from "react";
import img2 from "../assets/AIbrain.jpg";
import img3 from "../assets/DEFENSEDR1.jpg";
import img4 from "../assets/OTSEC3.jpg";

const slides = [
  {
    topic: "OT FOR INDUSTRY",
    title: "Protecting Critical Infrastructure: Perspectives on Industrial OT Security Environments",
    link: "#",
    image: img4,
  },
  {
    topic: "INNOVATE, AUTOMATE & ELEVATE",
    title: "AI for a Limitless Future with Artificial Computing Machines",
    link: "#",
    image: img2,
  },
  {
    topic: "NATIONAL DEFENSE",
    title: "Innovating for Supremacy. Designing for Security",
    description:
      "Leveraging innovation and expertise to build resilient defense solutions for a safer, stronger nation.",
    link: "#",
    image: img3,
  },
];

const Carousel = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

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
                        {slide.description && (
                          <p className="text-gray-200 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm md:text-base max-w-2xl">
                            {slide.description}
                          </p>
                        )}
                        <a
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
                        </a>
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
