import React from "react";

const CardInfo = ({
  image,
  smallTopic,
  mainHeading,
  description,
  buttonText = "Explore Now",
  reverse = false,
}) => {
  return (
    <div
      className={`w-[90%] max-w-[75%] mx-auto my-12 sm:my-22 flex flex-col md:flex-row items-center gap-6  bg-gray-400/50
         dark:bg-gray-800/70 backdrop-blur-md  rounded-md 
        ${reverse ? "md:flex-row-reverse" : ""}`}
      style={{ minHeight: "50vh" }}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center sm:py-4 py-2 sm:px-3 px-2" >
        <img
          src={image}
          alt="Card visual"
          className="w-full sm:w-[80%] sm:h-[60vh] h-[30vh] rounded-lg shadow-md object-cover dark:brightness-90"
        />
      </div>

      {/* Info Section */}
      <div className="w-full md:w-1/2 space-y-3 text-center md:text-left px-4 sm:px-6">
        <h5 className="text-blue-500 uppercase tracking-wide text-xs sm:text-sm font-semibold mt-2 dark:text-blue-400">
          {smallTopic}
        </h5>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100">
          {mainHeading}
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg dark:text-gray-300 leading-relaxed">
          {description}
        </p>
        <button className="mt-2 my-1 px-5 py-2 text-sm sm:text-base border border-blue-500 text-blue-500 bg-white rounded-md hover:bg-blue-500 hover:text-white transition duration-300
          dark:bg-transparent dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-white
        ">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CardInfo;
