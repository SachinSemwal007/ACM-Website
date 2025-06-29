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
  const [current, setCurrent] = useState(0);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full mx-auto sm:mt-10 px-[10%]">
      {/* Book-style Container with Arrow Buttons */}
      <div className="relative h-[50vh] sm:h-[500px] perspective-1000">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 z-40 bg-white/10 backdrop-blur-lg hover:bg-white/30 rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 border border-white/20"
          aria-label="Previous slide"
        >
          <svg 
            className="w-4 h-4 sm:w-6 sm:h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 z-40 bg-white/10 backdrop-blur-lg hover:bg-white/30 rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 border border-white/20"
          aria-label="Next slide"
        >
          <svg 
            className="w-4 h-4 sm:w-6 sm:h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="flex items-center justify-center h-full px-8 sm:px-12">
          {slides.map((slide, index) => {
            const offset = index - current;
            const isActive = index === current;
            const isPrev = offset === -1 || (current === 0 && index === slides.length - 1);
            const isNext = offset === 1 || (current === slides.length - 1 && index === 0);
            
            return (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`absolute transition-all duration-1000 ease-in-out cursor-pointer rounded-lg shadow-2xl overflow-hidden ${
                  isActive 
                    ? 'w-full h-full z-30 scale-100 opacity-100' 
                    : isPrev
                    ? 'w-[85%] sm:w-[75%] h-[85%] sm:h-[90%] z-20 scale-90 opacity-70 -translate-x-8 sm:-translate-x-16 rotate-y-15'
                    : isNext  
                    ? 'w-[85%] sm:w-[75%] h-[85%] sm:h-[90%] z-20 scale-90 opacity-70 translate-x-8 sm:translate-x-16 -rotate-y-15'
                    : 'w-[70%] sm:w-[60%] h-[70%] sm:h-[80%] z-10 scale-75 opacity-40'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isActive 
                    ? 'translateX(0) rotateY(0deg) scale(1)' 
                    : isPrev
                    ? 'translateX(-40px) sm:translateX(-80px) rotateY(15deg) scale(0.9)'
                    : isNext
                    ? 'translateX(40px) sm:translateX(80px) rotateY(-15deg) scale(0.9)'
                    : `translateX(${offset * 20}px) sm:translateX(${offset * 40}px) rotateY(${offset * 20}deg) scale(0.75)`,
                }}
              >
                {/* Page Background */}
                <div 
                  className="w-full h-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-black/40 dark:bg-black/10 flex flex-col justify-end p-4 sm:p-6 text-white">
                    <div className={`transition-all duration-500 dark:backdrop-blur-lg rounded-[20px] ${isActive ? 'opacity-100' : 'opacity-80'}`}>
                      <span className="text-sm sm:text-lg text-blue-300 font-medium px-10 py-2">{slide.topic}</span>
                      <h2 className={`font-bold mt-1 mb-2 ${isActive ? 'text-2xl sm:text-4xl' : 'text-base sm:text-lg'} px-10 `}>
                        {slide.title}
                      </h2>
                      {isActive && (
                        <p className="text-xs sm:text-sm text-gray-200 mb-3 leading-relaxed px-10 ">
                          {slide.description}
                        </p>
                      )}
                      <a 
                        href={slide.link} 
                        className="inline-flex items-center text-blue-300 hover:text-blue-200 text-xs sm:text-sm font-medium px-10 pb-4 "
                      >
                        Learn More
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  {/* Book spine shadow effect */}
                  <div className="absolute left-0 top-0 w-1 sm:w-2 h-full bg-black/20"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Simple Indicators */}
      <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current 
                ? 'bg-blue-500 w-6 sm:w-8' 
                : 'bg-gray-400 hover:bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;