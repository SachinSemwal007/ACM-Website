import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel.jsx';
import CardInfo from '../components/CardInfo.jsx';
// import FeatureGrid from '../components/FeatureGrid.jsx';
import Footer from '../components/Footer.jsx';
import JoinSection from '../components/JoinSection.jsx';   
import Header from '../components/Header.jsx';
import Cards from '../components/Cards.jsx';
import FutureInnovation from '../assets/CSSEC.png';
import EmpoweringAI from '../assets/EmpoweringAI.jpg';
import InfoSection from '../components/InfoSection.jsx';
import SimpleMap from '../components/SimpleMap.jsx';

const Home = () => {
  return (
    <div className="relative min-h-screen transition-all duration-700 overflow-hidden bg-gradient-to-br from-white/10 via-white/20 to-white/30">
      <div className="relative z-10">
        <Navbar />

        <div className="relative">
          <Header />
        </div>

        <div className="relative z-10">
          <Carousel />
        </div>

        <div className="relative">
          <CardInfo
            image={FutureInnovation}
            smallTopic="Cyber Security"
            mainHeading="Safeguard Your Digital World"
            description="Detect, defend and prevent breaches in real time using sophisticated cyber security solutions that secures you against contemporary threats. "
          />
        </div>

        <div className="relative">
          <CardInfo
            image={EmpoweringAI}
            smallTopic="Artificial Intelligence"
            mainHeading="Optimizing Industry through AI"
            description="Discover how AI is enabling unprecedented automation, predictive insights and smarter decision making, transforming industries."
            reverse
          />
        </div>

        <div className="w-full bg-gray-50">
          <h1 className="text-center text-5xl pt-13 text-black">Projects</h1>
          <p className="lg:w-[50%] md:w-[70%] sm:w-[80%] w-[90%] sm:px-12 text-center mx-auto text-md  mt-3 text-blue-500">
            Pioneering tommorows technologies today. Explore our latest research and developement initiatives driving the future of intelligent systems.
          </p>

          <div className="relative pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12 sm:my-10 lg:my-8">
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 p-8">
              <Cards
                image="https://www.radartutorial.eu/19.kartei/07.naval/pic/img07-002-01.jpg"
                title="BH 9"
                description="A sophisticated system that leverages AI to automatically identify, track and monitor Aircrafts in realtime enhancing situational awareness and enabliing faster decision making"
              />
              <Cards
                image="https://focus.namirial.com/en/wp-content/uploads/sites/4/2023/12/artificial-intelligence-in-hr.jpeg"
                title="YOGYATA PORTAL"
                description="An AI based recruitment system that offers a smarter, faster and more efficient solution for modern hiring needs"
              />
              <Cards
                image="https://i.pinimg.com/736x/c9/49/f5/c949f56386fb3bf3ca901814052b5481.jpg"
                title="EPAULETTE ANTENNA"
                description="The epaulette GPS Antenna system integrates advance positioning capibilities into wearable platform, often used in security, defence or critical field operations "
              />
              <Cards
                image="https://echopx.com/wp-content/uploads/2022/07/Human-resource-management-HRM.png"
                title="SQUADFORCE 360"
                description="A fully automated HRMS offering a transformative solution, streamlining all core HR functions through intelligent automation and centralized management"
              />
            </div>
          </div>
        </div>
        <InfoSection className="mt-6"/>

        
        <SimpleMap/>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
