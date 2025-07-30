import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutProducts = () => {
  const { category, productName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { title, description, image } = location.state || {};

  // Optionally fallback title and category from URL params if state not passed
  const displayTitle = title || productName?.replace(/-/g, " ");
  const displayCategory = category?.replace(/-/g, " ");

  return (
    <div className="flex flex-col min-h-screen">
    <Navbar/>
      <div className="bg-[#0070c0] text-white py-12 text-center w-[80%] mx-auto my-2 rounded-b-2xl">
        <h1 className="text-4xl font-bold">{displayTitle || "Product Details"}</h1>
        <p className="mt-2 text-lg">{displayCategory ? `Category: ${displayCategory}` : ""}</p>
      </div>

      <section className="flex-1 container mx-auto px-6 py-12">
        {displayTitle ? (
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
            <img
              src={image || "/images/placeholder.png"}
              alt={displayTitle}
              className="w-full md:w-1/2 h-64 object-cover rounded-lg"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{displayTitle}</h2>
              <p className="text-gray-600 mt-3 whitespace-pre-line">{description || "Description not available."}</p>
              <button
                onClick={() => navigate(-1)}
                className="mt-6 bg-[#0070c0] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Back
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No product details found.</p>
        )}
      </section>

      <Footer/>
    </div>
  );
};

export default AboutProducts;
