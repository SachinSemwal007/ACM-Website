import React from "react";
const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="w-full bg-gray-100 rounded-xl shadow-lg overflow-hidden border border-gray-300 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="aspect-video w-full overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2 sm:mb-3 text-center line-clamp-2">
          {title}
        </h2>
        <div className="text-sm sm:text-base text-gray-600 text-center leading-relaxed overflow-hidden max-h-[4.5rem] hover:max-h-[20rem] transition-[max-height] duration-700 ease-in-out">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;




