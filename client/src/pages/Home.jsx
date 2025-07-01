import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel.jsx';
import CardInfo from '../components/CardInfo.jsx';
import FeatureGrid from '../components/FeatureGrid.jsx';
import Footer from '../components/Footer.jsx';
import JoinSection from '../components/JoinSection.jsx';
import Header from '../components/Header.jsx';
import Cards from '../components/Cards.jsx';
import FutureInnovation from '../assets/FutureInnovation.jpg';
import EmpoweringAI from '../assets/EmpoweringAI.jpg';
import { ModeToggle } from '../components/ThemeToggle.jsx';
import bg from "../assets/bg.jpg";
import VantaWavesBackground from '../components/VantaWavesBackground.jsx';
import StarBackground from '../components/StarBackground.jsx';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#0f0f0f] dark:via-[#1e1e1e] dark:to-[#2d2d2d] backdrop-blur-3xl transition-all duration-700 overflow-hidden">
        {/* ✅ StarBackground only shows in dark mode */}
    
      {/* Enhanced Background Image with Overlay */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center opacity-15 dark:opacity-8 "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundAttachment: "fixed",
        }}
      />
      
      {/* Gradient Overlay for Better Contrast */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-white/10 to-white/30 dark:from-transparent dark:via-black/20 dark:to-black/40" />
      
        {/* ✅ StarBackground here — now above bg image/overlay but still behind content */}
  <div className="absolute inset-0 z-0 pointer-events-none dark:block hidden">
    <StarBackground />
  </div>

      {/* Multiple Glowing Squares with Different Sizes and Positions */}
      
      {/* Large Square - Top Left */}
      <div className="fixed top-20 left-20 transform z-5 animate-pulse">
        <div className="w-[280px] h-[280px] bg-black dark:bg-white rounded-2xl shadow-[0_0_40px_15px_rgba(0,0,0,0.3)] dark:shadow-[0_0_40px_15px_rgba(255,255,255,0.3)] opacity-20 dark:opacity-20 rotate-12 animate-float" />
      </div>

      {/* Medium Square - Top Right */}
      <div className="fixed top-32 right-16 transform z-5">
        <div className="w-[200px] h-[200px] bg-black dark:bg-white rounded-xl shadow-[0_0_30px_10px_rgba(0,0,0,0.25)] dark:shadow-[0_0_30px_10px_rgba(255,255,255,0.25)] opacity-15 dark:opacity-15 -rotate-45 animate-float-slow" />
      </div>

      {/* Small Square - Middle Left */}
      <div className="fixed top-1/2 left-8 transform -translate-y-1/2 z-5">
        <div className="w-[120px] h-[120px] bg-black dark:bg-white rounded-lg shadow-[0_0_25px_8px_rgba(0,0,0,0.2)] dark:shadow-[0_0_25px_8px_rgba(255,255,255,0.2)] opacity-25 dark:opacity-25 rotate-30 animate-pulse" />
      </div>

      {/* Extra Small Square - Middle Right */}
      <div className="fixed top-1/3 right-32 transform z-5">
        <div className="w-[80px] h-[80px] bg-black dark:bg-white rounded-md shadow-[0_0_20px_6px_rgba(0,0,0,0.15)] dark:shadow-[0_0_20px_6px_rgba(255,255,255,0.15)] opacity-30 dark:opacity-30 -rotate-12 animate-bounce-slow" />
      </div>

      {/* Large Square - Bottom Left */}
      <div className="fixed bottom-40 left-32 transform z-5">
        <div className="w-[240px] h-[240px] bg-black dark:bg-white rounded-xl shadow-[0_0_35px_12px_rgba(0,0,0,0.2)] dark:shadow-[0_0_35px_12px_rgba(255,255,255,0.2)] opacity-18 dark:opacity-18 rotate-45 animate-float" />
      </div>

      {/* Medium Square - Bottom Right */}
      <div className="fixed bottom-24 right-24 transform z-5">
        <div className="w-[160px] h-[160px] bg-black dark:bg-white rounded-lg shadow-[0_0_28px_9px_rgba(0,0,0,0.22)] dark:shadow-[0_0_28px_9px_rgba(255,255,255,0.22)] opacity-20 dark:opacity-20 -rotate-30 animate-pulse" />
      </div>

      {/* Tiny Squares - Scattered */}
      <div className="fixed top-1/4 left-1/3 transform z-5">
        <div className="w-[60px] h-[60px] bg-black dark:bg-white rounded shadow-[0_0_15px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_4px_rgba(255,255,255,0.1)] opacity-35 dark:opacity-35 rotate-60 animate-spin-slow" />
      </div>

      <div className="fixed top-3/4 left-2/3 transform z-5">
        <div className="w-[90px] h-[90px] bg-black dark:bg-white rounded-md shadow-[0_0_18px_5px_rgba(0,0,0,0.12)] dark:shadow-[0_0_18px_5px_rgba(255,255,255,0.12)] opacity-28 dark:opacity-28 -rotate-75 animate-bounce-slow" />
      </div>

      {/* Floating Particles */}
      <div className="fixed top-16 right-1/4 transform z-5">
        <div className="w-[40px] h-[40px] bg-black dark:bg-white rounded-full shadow-[0_0_12px_3px_rgba(0,0,0,0.08)] dark:shadow-[0_0_12px_3px_rgba(255,255,255,0.08)] opacity-40 dark:opacity-40 animate-pulse" />
      </div>

      <div className="fixed bottom-1/3 left-1/4 transform z-5">
        <div className="w-[50px] h-[50px] bg-black dark:bg-white rounded-full shadow-[0_0_14px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_0_14px_4px_rgba(255,255,255,0.1)] opacity-35 dark:opacity-35 animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <div className="relative z-10 backdrop-blur-sm">
        <div className="bg-white/40 dark:bg-black/20 backdrop-blur-md">
          <Navbar />
        </div>
        
        <div className="relative">
          {/* <VantaWavesBackground/> */}
          {/* <StarBackground/> */}
          <Header />
          {/* Subtle glow effect behind header */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10 blur-3xl" />
        </div>
        
        <div className="relative z-10">
          <Carousel />
        </div>

        {/* Enhanced CardInfo sections with glass morphism */}
        <div className="relative">
           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10 blur-3xl" />
          <CardInfo
            image={FutureInnovation}
            smallTopic="Cyber Security"
            mainHeading="Secure Your Digital World"
            description="Protect your business from modern threats with intelligent cybersecurity solutions built to detect, defend, and prevent breaches in real-time."
          />
        </div>

        <div className="relative">
         <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10 blur-3xl" />
          <CardInfo
            image={EmpoweringAI}
            smallTopic="Artificial Intelligence"
            mainHeading="Empowering Innovation with AI"
            description="Discover how AI is revolutionizing industries by enabling smarter decisions, predictive insights, and automation like never before."
            reverse
          />
        </div>

        {/* Enhanced JoinSection */}
        <div className="relative">
         <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10 blur-3xl" />
        </div>

        {/* Enhanced Cards Grid with Glass Effect */}
        <div className="relative py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12 sm:my-16 lg:my-20">
           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10 blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 p-8">
            <Cards
              image="https://bsmedia.business-standard.com/_media/bs/img/article/2025-03/09/full/1741498516-8066.jpg?im=FeatureCrop,size=(826,465)"
              title="Aircraft Detection"
              description="A smart chatbot built using NLP and machine learning to handle customer queries in real time."
            />
            <Cards
              image="https://img.freepik.com/premium-photo/aerial-view-modern-city-with-glowing-digital-network-running-down-street_14117-1104552.jpg"
              title="Gov and ACM"
              description="A smart chatbot built using NLP and machine learning to handle customer queries in real time."
            />
            <Cards
              image="https://www.technetexperts.com/wp-content/uploads/2024/08/AI-And-Robotics.jpg"
              title="Robotic Based Project"
              description="A smart chatbot built using NLP and machine learning to handle customer queries in real time."
            />
            <Cards
              image="https://www.repeato.app/wp-content/uploads/2024/06/AI-computer-vision-automation.jpg"
              title="Computer Vision Project"
              description="A smart chatbot built using NLP and machine learning to handle computer queries in real time."
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-500/5 dark:from-violet-400/10 dark:to-purple-400/10 blur-2xl" />
          <FeatureGrid />
        </div>
        
        <Footer />
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(-45deg); }
          50% { transform: translateY(-15px) rotate(-45deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;