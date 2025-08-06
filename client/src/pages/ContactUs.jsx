import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import SimpleMap from "../components/SimpleMap";
import Footer from "../components/Footer";
import JoinSection from "../components/JoinSection";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import Header from "../components/Header";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobTitle: '',
    company: '',
    message: '',
    privacyConsent: false,
    marketingConsent: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0070c0] to-[#005a9c] text-white py-6 lg:py-20 mt-2 w-[80%] mx-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-4">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto opacity-90">
            We'd love to hear from you. Get in touch today.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl  text-gray-800 mb-6">
                Connect with us
              </h2>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0070c0] bg-opacity-10 rounded-full flex items-center justify-center">
                  <FaPhoneAlt className=" text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Phone</p>
                  <p className="text-gray-800 font-semibold">+91 9471765402</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0070c0] bg-opacity-10 rounded-full flex items-center justify-center">
                  <FaEnvelope className=" text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <p className="text-gray-800 font-semibold">info@acmindia.co.in</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-6">
              <div className="w-16 h-px bg-gradient-to-r from-[#0070c0] to-transparent mb-6"></div>
              <p className="text-gray-600 mb-4 font-medium">Get with us on social media</p>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=100089490903737" 
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-sm" />
                </a>
                <a 
                  href="https://x.com/AcmltdIndia" 
                  className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors"
                  aria-label="Twitter"
                >
                  <BsTwitterX className="text-sm" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/75619230/admin/dashboard/" 
                  className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin className="text-sm" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                How can we help you?
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0070c0] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your work email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0070c0] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      placeholder="Enter your job title"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0070c0] focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter your company name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0070c0] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0070c0] focus:border-transparent transition-all resize-none"
                    required
                  ></textarea>
                </div>

                {/* Checkbox Section */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacyConsent"
                      name="privacyConsent"
                      checked={formData.privacyConsent}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-[#0070c0] border border-gray-300 rounded focus:ring-2 focus:ring-[#0070c0]"
                      required
                    />
                    <label htmlFor="privacyConsent" className="text-sm text-gray-700 leading-relaxed">
                      I confirm that I have read and agree to the{' '}
                      <a href="#" className="text-[#0070c0] hover:underline font-medium">
                        Artificial Computing Machines Privacy Policy
                      </a>{' '}
                      and consent to sharing my information. *
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="marketingConsent"
                      name="marketingConsent"
                      checked={formData.marketingConsent}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-[#0070c0] border border-gray-300 rounded focus:ring-2 focus:ring-[#0070c0]"
                    />
                    <label htmlFor="marketingConsent" className="text-sm text-gray-700 leading-relaxed">
                      I would like to receive alerts and updates from Artificial Computing Machines.
                    </label>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#0070c0] text-white font-semibold rounded-lg hover:bg-[#005a9c] focus:outline-none focus:ring-2 focus:ring-[#0070c0] focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Visit Our Office
            </h3>

          </div>
          <div className="flex justify-center">
            <SimpleMap />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;

