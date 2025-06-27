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
      className={`w-[90%] max-w-[75%] mx-auto my-12 sm:my-22 flex flex-col md:flex-row items-center gap-8 bg-gray-300/50 
        ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      {/* Image Section */}
      <div className="w-full h-full flex justify-center py-6">
        <img
          src={image}
          alt="Card visual"
          className="w-full sm:w-[80%] sm:h-[60vh] h-auto rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left px-6">
        <h5 className="text-blue-500 uppercase tracking-wide text-sm font-semibold mt-4">
          {smallTopic}
        </h5>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          {mainHeading}
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          {description}
        </p>
        <button className="my-4 px-6 py-2 border border-blue-500 text-blue-500 bg-white rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CardInfo;
