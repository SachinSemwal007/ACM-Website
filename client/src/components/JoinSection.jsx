import React from "react";
import logo from '../assets/ACM2.png'
const JoinSection = () => {
  return (
    <div className="bg-gray-100 py-15 px-10 w-[90%] sm:w-[75%] mx-auto ">
      <div className="max-w-[70%] sm:max-w-[70%] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left Column */}
        <div className="flex flex-col space-y-2 md:w-2/3">
          <span className="text-sm text-gray-600">We're growing fast</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Build the Future with Us
          </h1>
          <p className="text-gray-700 text-base max-w-xl">
            Join our mission to create innovative technology solutions that shape the digital world. We're looking for people who are passionate, curious, and ready to lead.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center md:items-end space-y-2 md:w-1/3">
          <div className="flex items-center gap-4">
            <img src={logo}
                 alt="Company Logo"
                 className="w-24 h-24 object-contain"
              />

            <button className="px-5 py-2 border border-blue-600 text-blue-600 bg-transparent rounded hover:bg-blue-600 hover:text-white transition-all">
              Join
            </button>
          </div>
          <span className="text-xs text-gray-600">
            Empowering Innovation. Together.
          </span>
        </div>
      </div>
    </div>
  );
};

export default JoinSection;
