import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { assets } from "../assets/assets";

const PublicPolicy = () => {
  return (
    
<div>
    <Navbar/>
        <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
        
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-[#0070c0] text-white text-center py-6 px-6 relative">
          {/* Logo in the center top */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
            <img
              src={assets.ACM2}
              alt="ACM Logo"
              className="w-20 h-20 rounded-full shadow-lg border-4 border-white pb-2 pr-1"
            />
          </div>

          <h1 className="text-3xl font-bold mt-20">Public Policy</h1>
          <p className="text-sm mt-1">Artificial Computing Machines</p>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-10 space-y-8 text-gray-800">
          {/* Purpose & Vision */}
          <section>
            <h2 className="text-xl font-semibold text-[#0070c0] mb-2">
              Purpose and Vision
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Purpose:</strong> To drive world-class innovation, foster
                scientific advancement and deliver technology solutions that create
                sustainable societal value.
              </li>
              <li>
                <strong>Vision:</strong> To become a global leader in cutting-edge IT
                research and development, setting benchmarks for responsible
                innovation and ethical technology use.
              </li>
            </ul>
          </section>

          {/* Policy Statement */}
          <section>
            <h2 className="text-xl font-semibold text-[#0070c0] mb-2">
              Policy Statement
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Commit significant resources to both foundational and applied R&D in IT
                and technology.
              </li>
              <li>
                Prioritize research that addresses pressing societal challenges,
                enhances digital inclusion and promotes environmental sustainability.
              </li>
              <li>
                Ensure all activities are conducted ethically, transparently and aligned
                with regulatory obligations.
              </li>
            </ul>
          </section>

          {/* Scope */}
          <section>
            <h2 className="text-xl font-semibold text-[#0070c0] mb-2">Scope</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Applies to all employees and contractors engaged in R&D.</li>
              <li>Covers internal projects, external collaborations, and joint ventures.</li>
              <li>Encompasses hardware, software, and cross-disciplinary technology fields.</li>
            </ul>
          </section>

          {/* Funding */}
          <section>
            <h2 className="text-xl font-semibold text-[#0070c0] mb-2">
              Funding and Resource Allocation
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Maintain a dedicated annual R&D budget, with a minimum percentage of
                company revenue allocated to research activities.
              </li>
              <li>
                Pursue diverse funding: government grants, private investment and
                collaborative public-private partnerships.
              </li>
              <li>
                Establish a central fund for high-risk, high-reward exploratory projects.
              </li>
            </ul>
          </section>

          {/* Add other sections similarly */}
          <section>
            <h2 className="text-xl font-semibold text-[#0070c0] mb-2">
              Ethics and Social Responsibility
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Require ethics review and risk assessment for every R&D project,
                especially in AI, data analytics, and automation.
              </li>
              <li>Form an internal Ethics Council to guide policy.</li>
              <li>
                Commit to sustainable R&D processes, prioritizing projects with
                environmental and social value.
              </li>
            </ul>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-xl font-semibold text-[#0070c0] mb-2">Conclusion</h2>
            <p>
              This comprehensive policy provides a robust framework to guide Artificial
              Computing Machines - IT and technology R&D activities. By maintaining high
              standards in ethics, transparency and innovation, Artificial Computing
              Machines aims to contribute not only to its own growth but also to
              societal advancement and technological progress globally.
            </p>
          </section>
        </div>

      </div>
    </div>
    <Footer/>
</div>
  );
};

export default PublicPolicy;
