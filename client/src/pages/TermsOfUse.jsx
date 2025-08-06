import React from "react";
import acmLogo from "../assets/ACM2.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsOfUse = () => {
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
            <h1 className="text-3xl font-bold mt-20">Terms of Use</h1>
            <p className="text-sm mt-1">Artificial Computing Machines</p>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 space-y-8 text-gray-800">
            {/* 1. Introduction */}
            <section>
              <h2 className="text-xl font-semibold text-[#0070c0] mb-2">
                1. Introduction
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  These Terms of Use govern your access to and use of the services, products, and materials provided by Artificial Computing Machines.
                </li>
                <li>
                  By using the website, services, or entering into any agreement with Artificial Computing Machines, you agree to be bound by these terms.
                </li>
              </ul>
            </section>

            {/* 2. Acceptance of Terms */}
            <section>
              <h2 className="text-xl font-semibold text-[#0070c0] mb-2">
                2. Acceptance of Terms
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  Use of Artificial Computing Machines products, technologies, or services (including R&D solutions, reports, and prototypes) implies acceptance of all terms stated herein.
                </li>
                <li>
                  If you do not accept these terms, do not use the company’s services or products.
                </li>
              </ul>
            </section>

            {/* 3. Intellectual Property */}
            <section>
              <h2 className="text-xl font-semibold text-[#0070c0] mb-2">
                3. Intellectual Property
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  All content, data, and materials developed or provided by Artificial Computing Machines, including research findings, prototypes, software, and documentation, are the exclusive property of the company or its licensors.
                </li>
                <li>
                  Users are not permitted to copy, distribute, modify, or create derivative works without explicit authorization.
                </li>
              </ul>
            </section>

            {/* 4. Use of Services and Products */}
            <section>
              <h2 className="text-xl font-semibold text-[#0070c0] mb-2">
                4. Use of Services and Products
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>Use services/products only for their intended purposes and in compliance with laws.</li>
                <li>Unauthorized use, reverse engineering, or system intrusion is strictly prohibited.</li>
                <li>Data provided is for informational use and not guaranteed unless specified by contract.</li>
              </ul>
            </section>

            {/* 5. Confidentiality */}
            <section>
              <h2 className="text-xl font-semibold text-[#0070c0] mb-2">
                5. Confidentiality
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  Clients may access confidential data and must not disclose it without prior written consent.
                </li>
                <li>
                  Both parties are responsible for safeguarding confidential information with reasonable care.
                </li>
              </ul>
            </section>

            {/* 6. Limitation of Liability */}
            <section>
              <h2 className="text-xl font-semibold text-[#0070c0] mb-2">
                6. Limitation of Liability
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  Artificial Computing Machines is not liable for indirect or consequential damages.
                </li>
                <li>
                  Total liability is limited to the amount paid by the customer for the product or service.
                </li>
              </ul>
            </section>

            {/* 7. Termination */}
            <section>
              <h2 className="text-xl font-semibold text-[#0070c0] mb-2">
                7. Termination
              </h2>
              <p>
                Artificial Computing Machines may suspend or terminate access to services for violation of these terms at its discretion.
              </p>
            </section>

            {/* 8. Changes to Terms */}
            <section>
              <h2 className="text-xl font-semibold text-[#0070c0] mb-2">
                8. Changes to Terms
              </h2>
              <p>
                Terms may be updated periodically. Continued use implies acceptance of any revised terms. Material updates will be communicated appropriately.
              </p>
            </section>

            {/* 9. Governing Law */}
            <section>
              <h2 className="text-xl font-semibold text-[#0070c0] mb-2">
                9. Governing Law
              </h2>
              <p>
                These terms are governed by the laws of India. Disputes shall fall under the exclusive jurisdiction of courts in Ranchi.
              </p>
            </section>

            {/* 10. Contact Information */}
            <section>
              <h2 className="text-xl font-semibold text-[#0070c0] mb-2">
                10. Contact Information
              </h2>
              <p>
                For queries regarding these terms, please contact The Director (Personal and Administration) at{" "}
                <a href="mailto:info@acmindia.co.in" className="text-[#0070c0] underline">
                  info@acmindia.co.in
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
