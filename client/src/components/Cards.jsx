// import React from "react";

// const ProjectCard = ({ image, title, description }) => {
//   return (
//     <div className="w-full bg-gray-200/30 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-gray-300 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
//       <div className="aspect-video w-full overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//         />
//       </div>
//       <div className="p-4 sm:p-6">
//         <h2 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2 sm:mb-3 text-center line-clamp-2">
//           {title}
//         </h2>
//         <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed line-clamp-3">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;


import React from "react";

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="w-full bg-gray-200/30 dark:bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-gray-300 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="aspect-video w-full overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2 sm:mb-3 text-center line-clamp-2">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
