
// App.jsx
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/consulting.jsx";
import Products from "./pages/Products.jsx";
import Solution from "./pages/Solution";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Support from "./pages/Support.jsx";
import Consulting from "./pages/consulting.jsx";
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
          <Route path="/" element={<Home/>} />
          <Route path="/consulting" element={<Consulting/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/product" element={<Products />} />
          <Route path="/solution" element={<Solution/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
