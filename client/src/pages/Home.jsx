import React, { useEffect, useState } from 'react';
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
import VantaBackground from "../components/VantaBackground";

const Home = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative min-h-screen transition-all duration-700 overflow-hidden ${isDark ? 'bg-black' : 'bg-gradient-to-br from-slate-100/10 via-slate-100/20 to-slate-500/30'}`}>
      <div className="relative z-10">
        <div className="bg-slate-900/60 dark:bg-black/80 backdrop-blur-md border-b border-cyan-500/20 dark:border-green-500/30 shadow-lg shadow-cyan-500/10 dark:shadow-green-500/20">
          <Navbar />
        </div>

        <div className="relative">
          <Header />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-green-400/20 dark:to-cyan-400/20 blur-2xl animate-tech-pulse" />
        </div>

        <div className="relative z-10">
          <Carousel /> 
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-cyan-400/20 dark:to-blue-400/20 blur-2xl" />
          <CardInfo
            image={FutureInnovation}
            smallTopic="Cyber Security"
            mainHeading="Secure Your Digital World"
            description="Protect your business from modern threats with intelligent cybersecurity solutions built to detect, defend, and prevent breaches in real-time."
          />
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 blur-2xl" />
          <CardInfo
            image={EmpoweringAI}
            smallTopic="Artificial Intelligence"
            mainHeading="Empowering Innovation with AI"
            description="Discover how AI is revolutionizing industries by enabling smarter decisions, predictive insights, and automation like never before."
            reverse
          />
        </div>

      <div className='w-full'>-
        <h1 className='text-center text-5xl font-bold dark:text-white text-black'>PROJECTS</h1>
        <p className='lg:w-[50%] md:w-[70%] sm:w-[80%] w-[90%] sm:px-12 text-center mx-auto  text-md font-bold dark:text-white mt-2 text-blue-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, dolore.  Omnis, nisi.</p>
      </div>

        <div className="relative pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12 sm:my-16 lg:my-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-green-400/20 dark:to-cyan-400/20 blur-2xl" />
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 dark:from-purple-400/20 dark:to-blue-400/20 blur-2xl" />
          <FeatureGrid />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
