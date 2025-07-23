import React from 'react';

const Header = ({ title, description }) => {
  const defaultTitle = "Empowering Your Technology with AI ";
  const defaultDescription =
    "Deliver AI to make systems smarter, more autonomous and capable of solving complex challenges - that's the power of ACM";

  return (
    <div className="relative w-[90%] mx-auto flex flex-col items-center justify-center text-center py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Stylish Background Stripe Gradient */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="shadow-2xl shadow-white w-full max-w-7xl h-49 sm:h-48 lg:h-56 rounded-2xl opacity-50 dark:opacity-[5%] dark:[background-image:repeating-linear-gradient(45deg,#2f2f2f_0px,#2f2f2f_8px,#1c1c1c_8px,#1c1c1c_16px)]"
          style={{
            background: `repeating-linear-gradient(
              45deg,
              #f3f4f6 0px,
              #f3f4f6 8px,
              #e5e7eb 8px,
              #e5e7eb 16px
            )`,
          }}
        />
      </div>

      {/* Header Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl sm:text-3xl md:text-4xl xl:text-5xl  leading-snug font-extralight break-words text-gray-800 dark:text-white  ">
          {title || defaultTitle}
        </h1>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-[15px] lg:text-[17px] leading-relaxed break-words text-gray-600 dark:text-gray-300">
          {description || defaultDescription}
        </p>
      </div>
    </div>
  );
};

export default Header;
