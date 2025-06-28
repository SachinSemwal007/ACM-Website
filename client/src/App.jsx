
// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs.jsx";
import Product from "./pages/Products.jsx";
import Solution from "./pages/Solution.jsx";
import Support from "./pages/Support.jsx";
import VantaWavesBackground from "./components/VantaWavesBackground.jsx";


function App() {
  return (

    <BrowserRouter>
     <div className="relative min-h-screen overflow-hidden text-white">
        {/* <VantaWavesBackground /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/product" element={<Product />} />
          <Route path="/support" element={<Support />} />
          <Route path="/solution" element={<Solution />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
