import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import acmLogo from "../assets/ACM2.png";


const Privacy = () => {
  return (
    <>
      <Navbar />
      
      <div className="bg-[#0070c0] text-white text-center py-6 px-6 relative w-[50%] mx-auto rounded-sm shadow-md shadow-black mt-2">
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 shadow-lg ">
          <img
            src={acmLogo}
            alt="ACM Logo"
            className="w-20 h-20 rounded-full shadow-lg border-4 border-white pb-2 pr-1"
          />
        </div>
        <h1 className="text-3xl font-bold mt-20">Privacy Policy</h1>
        <p className="text-sm mt-1">Artificial Computing Machines</p>
      </div>

      <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-32 py-12 text-gray-800 w-[50%] mx-auto shadow-md shadow-black mb-10 mt-5">
        <p className="mb-6 text-justify">
          Artificial Computing Machines business brings technology to businesses, consumers, and society in a way that makes amazing experiences possible but doesn’t come at the expense of your privacy. We believe in innovation and performance that supports your privacy rights and in technology designed with those rights in mind.
        </p>

        <p className="mb-6 text-justify">
          This Privacy Notice describes how we use your personal information and respect your privacy rights. In particular, this Privacy Notice explains how our products, services and, technologies use your personal information. It applies to our use of personal information across our websites, products, online services, software, apps, tools, and other services and functionality we provide, both online and offline (collectively referred to as “ACM Services”), unless a separate, or supplementary, privacy notice is offered.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-blue-500">
          What Kinds of Information Do We Collect?
        </h2>

        <p className="mb-4 text-justify">
          Artificial Computing Machines collects information as part of its business operations, to provide services, to respond to requests and offer customer support, to fulfil legal and contractual obligations and to build its innovative products. You provide some of this data directly, such as when you order an ACM product, contact customer support, or register for an Intel event or publication.
        </p>

        <p className="mb-4 text-justify">
          We also collect information through your interaction with ACM Services and our website, for example, using software product technologies and cookies. We also obtain data from third parties.
        </p>
      </div>
      
      <Footer />
    </>
  );
};

export default Privacy;
