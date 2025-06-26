import React, { useState, useEffect } from "react";
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

  // Auto-slide every 6 seconds (slower)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="w-full mx-auto sm:mt-10  px-4">
      {/* Book-style Container */}
      <div className="relative h-[50vh] sm:h-[500px] perspective-1000">
        <div className="flex items-center justify-center h-full">
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
                    ? 'w-full sm:w-[70vw] h-full z-30 scale-100 opacity-100' 
                    : isPrev
                    ? 'w-[90%] sm:w-[60vw] h-[90%] z-20 scale-90 opacity-70 -translate-x-20 sm:-translate-x-40 rotate-y-15'
                    : isNext  
                    ? 'w-[90%] sm:w-[60vw] h-[90%] z-20 scale-90 opacity-70 translate-x-20 sm:translate-x-40 -rotate-y-15'
                    : 'w-[80%] sm:w-[50vw] h-[80%] z-10 scale-75 opacity-40'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isActive 
                    ? 'translateX(0) rotateY(0deg) scale(1)' 
                    : isPrev
                    ? 'translateX(-60px) sm:translateX(-120px) rotateY(15deg) scale(0.9)'
                    : isNext
                    ? 'translateX(60px) sm:translateX(120px) rotateY(-15deg) scale(0.9)'
                    : `translateX(${offset * 30}px) sm:translateX(${offset * 60}px) rotateY(${offset * 20}deg) scale(0.75)`,
                }}
              >
                {/* Page Background */}
                <div 
                  className="w-full h-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                    <div className={`transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-80'}`}>
                      <span className="text-lg text-blue-300 font-medium">{slide.topic}</span>
                      <h2 className={`font-bold mt-1 mb-2 ${isActive ? 'text-4xl' : 'text-lg'}`}>
                        {slide.title}
                      </h2>
                      {isActive && (
                        <p className="text-sm text-gray-200 mb-3 leading-relaxed">
                          {slide.description}
                        </p>
                      )}
                      <a 
                        href={slide.link} 
                        className="inline-flex items-center text-blue-300 hover:text-blue-200 text-sm font-medium"
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  {/* Book spine shadow effect */}
                  <div className="absolute left-0 top-0 w-2 h-full bg-black/20"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Simple Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current 
                ? 'bg-blue-500 w-8' 
                : 'bg-gray-400 hover:bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;