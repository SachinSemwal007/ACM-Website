import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutServices = () => {
  const location = useLocation();
  const { title, description, image2 } = location.state || {};

  const displayTitle = title || "Service Title";

  // Split description into paragraphs for better formatting
  const paragraphs = description?.split('\n\n') || ["No service description available."];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <Navbar />
      {/* Hero Section */}
      <div className="w-[90%] mx-auto mt-4 mb-8">
        <div className="relative rounded-md overflow-hidden shadow-2xl group">
          <div className="aspect-[16/9] sm:aspect-[21/9] lg:aspect-[5/2] overflow-hidden">
          
            <img
              src={image2}
              alt={displayTitle}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
          <div className="absolute inset-0 flex items-center  justify-center">
            <div className="text-center text-white px-6 max-w-4xl transform group-hover:scale-105 transition-transform duration-500">
             
              {displayTitle !== "Cert-in Certified Security Audits" && (
                  <h1 className="text-md md:text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white text-shadow-sm text-shadow-black  drop-shadow-2xl">
                    {displayTitle}
                  </h1>
                )}
              {displayTitle !== "Cert-in Certified Security Audits" && (
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-indigo-500 mx-auto rounded-full"></div>
                )}
              
            </div>
          </div>
        </div>
      </div>

      {/* About Service Details */}
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-md shadow-2xl overflow-hidden border border-white/50 hover:shadow-3xl transition-all duration-500 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white to-black rotate-45 -translate-y-20 translate-x-20 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white to-black rotate-45 translate-y-16 -translate-x-16 opacity-50"></div>
            
            <div className="relative z-10 p-8 sm:p-12 lg:p-16">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  About This Service
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
              </div>

              {/* Content Grid */}
              <div className="grid gap-4 lg:gap-4">
                {paragraphs.map((paragraph, index) => (
                  <div 
                    key={index}
                    className="group relative"
                  >
                    {/* Paragraph with enhanced styling */}
                    <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                      {/* Accent line */}
                      <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-500 rounded-full group-hover:w-2 transition-all duration-300"></div>
                      
                      {/* Content */}
                      <div className="sm:pl-6 pl-0">
                        <p className="text-gray-700 md:text-lg leading-relaxed font-light tracking-wide whitespace-pre-line text-[13px] text-justify">
                          {paragraph.trim()}
                        </p>
                      </div>

                      {/* Decorative corner */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-60"></div>
                    </div>
                  </div>
                ))}

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