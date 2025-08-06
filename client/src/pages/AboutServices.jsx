import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutServices = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, description, image, image2, category } = location.state || {};

  const displayTitle = title || "Service Title";
  const displayCategory = category || "Our Services";

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="w-[90%] mx-auto mt-4 mb-8">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
          <div className="aspect-[16/9] sm:aspect-[21/9] lg:aspect-[5/2] overflow-hidden">
            <img
              src={image2}
              alt={displayTitle}
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-6 max-w-4xl">
              <h1 className="text-4xl font-bold mb-4">{displayTitle}</h1>
              <p className="text-lg leading-relaxed">
                {description?.slice(0, 180) + (description?.length > 180 ? "..." : "") || "Explore our cutting-edge services tailored for digital transformation and innovation."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Service Details */}
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col">
              <div className="w-full relative group">
                <div className="aspect-[16/9] sm:aspect-[2/1] md:aspect-[5/2] overflow-hidden">
                  <img
                    src={image || "/images/placeholder.png"}
                    alt={displayTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-6 sm:p-8 lg:p-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">{displayTitle}</h2>
                  {displayCategory && (
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {displayCategory}
                    </span>
                  )}
                  <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                    {description || "No service description available."}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center px-8 py-3 bg-[#0070c0] text-white font-semibold rounded-lg hover:bg-[#005a9f] focus:ring-4 focus:ring-blue-200 transition-all duration-200 shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutServices;
