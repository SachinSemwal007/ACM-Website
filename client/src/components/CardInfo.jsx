import React from "react";
import { useNavigate } from "react-router-dom";

const CardInfo = ({
  image,
  smallTopic,
  mainHeading,
  description,
  details,
  buttonText = "Explore Now",
  reverse = false,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about-services", {
      state: {
        title: mainHeading,
        description: details,
        image2: image,
      },
    });
  };

  return (
    <div
      className={`w-[90%] max-w-[75%] mx-auto my-12 sm:my-22 flex flex-col md:flex-row items-center gap-6 bg-gray-100 rounded-md ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
      style={{ minHeight: "50vh" }}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center sm:py-4 py-2 sm:px-3 px-2">
        <img
          src={image}
          alt="Card visual"
          className="w-full sm:w-[80%] sm:h-[60vh] h-[30vh] rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Info */}
      <div className="w-full md:w-1/2 space-y-3 text-center md:text-left px-4 sm:px-6">
        <h5 className="text-blue-500 uppercase tracking-wide text-xs sm:text-sm font-semibold mt-2">
          {smallTopic}
        </h5>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800">
          {mainHeading}
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
          {description}
        </p>
        <button
          onClick={handleNavigate}
          className="mt-2 my-1 px-5 py-2 text-sm sm:text-base border border-blue-500 text-blue-500 bg-white rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CardInfo;
