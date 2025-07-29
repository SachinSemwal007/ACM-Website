
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/consulting.jsx";
import Products from "./pages/Products.jsx";
import Solution from "./pages/Solution";
import AOS from "aos";
import "aos/dist/aos.css";
import Support from "./pages/Support.jsx";
import Consulting from "./pages/consulting.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import CareersPage from "./pages/Careers.jsx";
import AboutProducts from "./pages/AboutProducts.jsx"; 
import PublicPolicy from "./pages/PublilcPolicy.jsx";
import AboutAcm from "./pages/AboutAcm.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="relative w-full min-h-screen overflow-hidden text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/support" element={<Support />} />
          <Route path="/product" element={<Products />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/products/:category/:productName" element={<AboutProducts />} />
          <Route path="/policy" element={<PublicPolicy/>} />
          <Route path="/aboutACM" element={<AboutAcm/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
