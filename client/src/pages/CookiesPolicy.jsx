import React from "react";
import acmLogo from "../assets/ACM2.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CookiesPolicy = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-[#0070c0] text-white text-center py-6 px-6 relative">
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
              <img
                src={acmLogo}
                alt="ACM Logo"
                className="w-20 h-20 rounded-full shadow-lg border-4 border-white pb-2 pr-1"
              />
            </div>
            <h1 className="text-3xl font-bold mt-20">Cookies Policy</h1>
            <p className="text-sm mt-1">Artificial Computing Machines</p>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 space-y-8 text-gray-800">
            {/* Intro */}
            <section>
              <p>
                This Cookies Policy outlines how Artificial Computing Machines
                collects, uses, and manages cookies and similar tracking
                technologies on our website. It ensures transparency,
                safeguards user privacy, and complies with global laws like GDPR
                and CCPA.
              </p>
            </section>

            {/* Types of Cookies */}
            <section>
              <h2 className="text-xl font-semibold text-[#0070c0] mb-2">
                Types of Cookies Used
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <strong>Essential Cookies:</strong> Required for core
                  website functions like security and access control.
                </li>
                <li>
                  <strong>Analytical/Performance Cookies:</strong> Measure how
                  users interact with the website to improve experience.
                </li>
                <li>
                  <strong>Functionality Cookies:</strong> Remember user
                  preferences to enhance usability.
                </li>
                <li>
                  <strong>Marketing/Third-Party Cookies:</strong> Set by trusted
                  partners to deliver relevant content and analytics.
                </li>
              </ul>
            </section>

            {/* Purpose */}
            <section>
              <h2 className="text-xl font-semibold text-[#0070c0] mb-2">
                Purpose of Cookie Usage
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>Secure and stabilize website functionality.</li>
                <li>Improve user experience through personalization.</li>
                <li>
                  Collect insights to enhance content and research offerings.
                </li>
                <li>
                  Support marketing and collaboration tools for R&D clients.
                </li>
              </ul>
            </section>

            {/* User Control */}
            <section>
              <h2 className="text-xl font-semibold text-[#0070c0] mb-2">
                User Choice and Control
              </h2>
              <p>
                Users can manage or disable cookies via their browser settings.
                However, disabling certain cookies may affect website
                functionality and user experience.
              </p>
            </section>

            {/* Third-Party Cookies */}
            <section>
              <h2 className="text-xl font-semibold text-[#0070c0] mb-2">
                Third-Party Cookies
              </h2>
              <p>
                Our website may use third-party cookies from analytics or
                collaboration platforms. We recommend reviewing their respective
                privacy policies for more details.
              </p>
            </section>

            {/* Policy Updates */}
            <section>
              <h2 className="text-xl font-semibold text-[#0070c0] mb-2">
                Policy Updates
              </h2>
              <p>
                This Cookies Policy may be updated periodically. Revised
                versions will be posted on this page with a modified effective
                date.
              </p>
            </section>

            {/* Contact Info */}
            <section>
              <h2 className="text-xl font-semibold text-[#0070c0] mb-2">
                Contact Information
              </h2>
              <p>
                For questions or concerns regarding our use of cookies or this
                policy, please contact us at{" "}
                <a
                  href="mailto:info@acmindia.co.in"
                  className="text-[#0070c0] underline"
                >
                  info@acmindia.co.in
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiesPolicy;
