
// App.jsx
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs.jsx";
import Product from "./pages/Products.jsx";
import Solution from "./pages/Solution.jsx";
import VantaWavesBackground from "./components/VantaWavesBackground.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Support from "./pages/Support.jsx";
import StarBackground from "./components/StarBackground.jsx";
function App() {

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,          // 🔁 Enables repeat on scroll
    mirror: true,         // 👥 Also animate on scroll-up
    offset: 100,          // 👇 Start animation 100px before element comes into view
  });
}, []);

  return (

    <BrowserRouter>
     <div className="relative w-full min-h-screen overflow-hidden text-white">
        {/* <VantaWavesBackground /> */}
           <StarBackground/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/support" element={<Support/>} />
          <Route path="/product" element={<Product />} />
          <Route path="/solution" element={<Solution />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
