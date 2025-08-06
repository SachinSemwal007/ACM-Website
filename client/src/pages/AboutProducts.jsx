import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutProducts = () => {
  const { category, productName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { title, description, image,image2} = location.state || {};

  // Optionally fallback title and category from URL params if state not passed
  const displayTitle = title || productName?.replace(/-/g, " ");
  const displayCategory = category?.replace(/-/g, " ");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Image Section */}
      <div className="w-[90%] mx-auto mt-4 mb-8">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
          {/* Hero Image */}
          <div className="aspect-[16/9] sm:aspect-[21/9] lg:aspect-[5/2] overflow-hidden">
            <img
              src={image2 || "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"}
              alt={displayTitle || "Service Overview"}
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-6 sm:px-8 lg:px-12 max-w-4xl">
              {/* Breadcrumb */}
              {displayCategory && (
                <nav className="flex justify-center mb-4 sm:mb-6">
                  <ol className="flex items-center space-x-2 text-sm text-white/80">
                    <li><span className="hover:text-white transition-colors cursor-pointer">Home</span></li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-white">{displayCategory}</span>
                    </li>
                  </ol>
                </nav>
              )}
              
              {/* Main Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight transform group-hover:scale-105 transition-transform duration-300">
                {displayTitle || "Digital Service Platform"}
              </h1>
              
              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-6 transform group-hover:translate-y-1 transition-transform duration-300">
                {description ? 
                  description.slice(0, 180) + (description.length > 180 ? "..." : "")
                  : 
                  "Streamlined digital services designed to enhance efficiency and provide seamless user experience for modern administrative needs."
                }
              </p>
              
              {/* Category Badge */}
              {displayCategory && (
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 border border-white/30">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <span className="text-sm sm:text-base font-medium text-white">{displayCategory}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Interactive Elements */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Content */}
      <h1 className="text-5xl text-center text-black font-semibold mt-12"
      >About The Product</h1>
 
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {displayTitle ? (
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col">
                
                {/* Enhanced Image Section */}
                <div className="w-full relative group">
                  <div className="aspect-[16/9] sm:aspect-[2/1] md:aspect-[5/2] overflow-hidden">
                    <img
                      src={image || "/images/placeholder.png"}
                      alt={displayTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Enhanced Content Section */}
                <div className="p-6 sm:p-8 lg:p-12">
                  <div className="flex flex-col h-full">
                    <div className="flex-1 space-y-6">
                      {/* Enhanced Title */}
                      <div className="text-center sm:text-left">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                          {displayTitle}
                        </h2>
                        {displayCategory && (
                          <div className="flex justify-center sm:justify-start mt-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                              {displayCategory}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* Enhanced Description */}
                      <div className="prose prose-lg prose-gray max-w-none">
                        <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#0070c0]">
                          <p className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line m-0">
                            {description || "Description not available."}
                          </p>
                        </div>
                      </div>
                      
                      {/* Additional Info Section */}
                      {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                        <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <svg className="w-8 h-8 text-blue-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          <p className="text-sm font-medium text-blue-800">Secure & Reliable</p>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                          <svg className="w-8 h-8 text-green-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <p className="text-sm font-medium text-green-800">High Performance</p>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                          <svg className="w-8 h-8 text-purple-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-sm font-medium text-purple-800">24/7 Support</p>
                        </div>
                      </div> */}
                    </div>

                    {/* Enhanced Back Button */}
                    <div className="mt-8 pt-6 border-t border-gray-200 text-center sm:text-left">
                      <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center px-8 py-3 bg-[#0070c0] text-white font-semibold rounded-lg hover:bg-[#005a9f] focus:outline-none focus:ring-4 focus:ring-blue-200 transform hover:scale-105 transition-all duration-200 shadow-lg"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                          />
                        </svg>
                        Back to Services
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Enhanced No Data State */
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-200">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg 
                    className="w-10 h-10 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" 
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  No Service Details Found
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  The service information could not be loaded. Please try again or contact support if the issue persists.
                </p>
                <button
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center px-8 py-3 bg-[#0070c0] text-white font-semibold rounded-lg hover:bg-[#005a9f] focus:outline-none focus:ring-4 focus:ring-blue-200 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  <svg 
                    className="w-5 h-5 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                    />
                  </svg>
                  Back to Services
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutProducts;