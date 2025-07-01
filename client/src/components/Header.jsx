import React from 'react';

const Header = ({ title, description }) => {
  // Default values if no props passed
  const defaultTitle = "Shield Your Digital World";
  const defaultDescription =
    "AI Powered Protection, Defending Critical Infrastructure, ICS, Risk Assesment, Intrusion Detection & Resilient Security Architecture - thats the Power of ACM";

  return (
    <div className="relative flex flex-col items-center justify-center text-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden  ">

      {/* Stylish Background Stripe Gradient */}
      <div className="absolute inset-0 flex items-center justify-center ">
        <div
          className="shadow-2xl shadow-white   w-[85%] sm:w-[80%] lg:w-[75%] h-40 sm:h-58 lg:h-56 rounded-2xl opacity-50 dark:opacity-[5%] dark:[background-image:repeating-linear-gradient(45deg,#2f2f2f_0px,#2f2f2f_8px,#1c1c1c_8px,#1c1c1c_16px)]"
          style={{
            background: `repeating-linear-gradient(
              45deg,
              #f3f4f6 0px,
              #f3f4f6 8px,
              #e5e7eb 8px,
              #e5e7eb 16px
            )`
          }}
        />
      </div>

      {/* Header Content */}
      <div className="relative z-10 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight sm:leading-tight lg:leading-tight py-4 sm:py-6 text-gray-800 dark:text-white">
          {title || defaultTitle}
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed max-w-sm sm:max-w-xl lg:max-w-2xl mx-auto px-2 sm:px-0 text-gray-600 dark:text-gray-300">
          {description || defaultDescription}
        </p>
      </div>
    </div>
  );
};

export default Header;
