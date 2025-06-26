import React from "react";

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="w-full sm:w-72 bg-gray-200/30 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-gray-300 mx-auto" >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-1">
        <h2 className="text-xl font-semibold text-blue-700 mb-2 text-center">{title}</h2>
        <p className="text-sm text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
