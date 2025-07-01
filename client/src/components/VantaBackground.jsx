// import React, { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import NET from "vanta/dist/vanta.net.min";

// const VantaBackground = () => {
//   const vantaRef = useRef(null);
//   const [vantaEffect, setVantaEffect] = useState(null);

//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(
//         NET({
//           el: vantaRef.current,
//           THREE: THREE,
//           mouseControls: true,
//           touchControls: true,
//           gyroControls: false,
//           minHeight: 200.0,
//           minWidth: 200.0,
//           scale: 1.0,
//           scaleMobile: 1.0,

//           color: 0x3c2d21,          // Rich brown lines
//           backgroundColor: 0xcbd7cb, // Soft gray-green background
//           points: 10,
//           maxDistance: 20,
//           spacing: 15,
//           showDots: true,
//           dotColor: 0x4a3b2f       // Subtle dark dot color (custom tweak)
//         })
//       );
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);

//   return (
//     <div
//       ref={vantaRef}
//       className="absolute top-0 left-0 w-full h-full -z-10"
//     />
//   );
// };

// export default VantaBackground;

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  // Function to check if dark mode is active by Tailwind class on html
  const isDarkMode = () => document.documentElement.classList.contains("dark");

  // Initialize or re-initialize Vanta with correct colors
  const initVanta = () => {
    if (vantaEffect.current) {
      vantaEffect.current.destroy();
      vantaEffect.current = null;
    }

    vantaEffect.current = NET({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,

      color: 0x3c2d21, // lines brown

      backgroundColor: isDarkMode() ? 0x000000 : 0xcbd7cb, // black or light gray-green
      points: 10,
      maxDistance: 20,
      spacing: 15,
      showDots: true,
      dotColor: isDarkMode() ? 0x222222 : 0x4a3b2f,
    });
  };

  useEffect(() => {
    initVanta();

    // Optional: listen for dark mode class changes using MutationObserver
    const observer = new MutationObserver(() => {
      // Reinit vanta if dark mode class toggled
      initVanta();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default VantaBackground;
