import React, { useState } from "react";
import img1 from "../assets/Cyber.jpg";
import img2 from "../assets/AI.jpg";
import img3 from "../assets/CyberSecurity.jpg";
const slides = [
  {
    topic: "Topic 1",
    title: "Natural Language Processing",
    description: "Harness the power of NLP to understand, analyze, and respond to human language with speed, accuracy, and intelligent automation.",
    link: "#",
    image: img1,
  },
  {
    topic: "Topic 2",
    title: "Artificial Intelligence",
    description: "Unlock the full potential of your business with our intelligent AI platform that automates tasks, analyzes data, and boosts productivity.",
    link: "#",
    image: img2,
  },
  {
    topic: "Topic 3",
    title: "Cyber Security",
    description: "Protect your business from cyber threats with advanced security solutions that detect, prevent, and respond to attacks in real-time.",
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
    if (index % 2 === 0) {
      return "h-[65%]";
    } else {
      return "h-[85%]"; 
    }
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
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white">
                  {!isExpanded && (
                    <div className="transform -rotate-90 origin-bottom-left absolute bottom-6 left-6 whitespace-nowrap">
                      <h3 className="text-sm sm:text-base font-bold mb-2">{slide.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-blue-300 text-xs sm:text-sm">{slide.topic}</span>
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <svg
                            className="w-4 h-4 text-white transform rotate-90"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}

                  {isExpanded && (
                    <div className="transform transition-all duration-500 delay-200 opacity-100">
                      <div className="bg-black/20 sm:backdrop-blur-sm rounded-2xl p-4 sm:p-6">
                        <span className="text-blue-300 text-sm sm:text-base font-medium">{slide.topic}</span>
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-3">{slide.title}</h2>
                        <p className="text-gray-200 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm md:text-base max-w-2xl">
                          {slide.description}
                        </p>
                        <a
                          href={slide.link}
                          className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
                        >
                          Learn More
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {!isExpanded && (
                  <div className="absolute top-6 right-6">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                    </div>
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