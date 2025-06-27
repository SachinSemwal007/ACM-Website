import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel.jsx';
import CardInfo from '../components/CardInfo.jsx';
import FeatureGrid from '../components/FeatureGrid.jsx';
import Footer from '../components/Footer.jsx';
import JoinSection from '../components/JoinSection.jsx';
import Header from '../components/Header.jsx';
import Cards from '../components/Cards.jsx';


// Import images
import FutureInnovation from '../assets/FutureInnovation.jpg';
import EmpoweringAI from '../assets/EmpoweringAI.jpg';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Carousel />
      <CardInfo
        image={FutureInnovation}
        smallTopic="Cyber Security"
        mainHeading="Secure Your Digital World"
        description="Protect your business from modern threats with intelligent cybersecurity solutions built to detect, defend, and prevent breaches in real-time."
      />
      <CardInfo
        image={EmpoweringAI}
        smallTopic="Artificial Intelligence"
        mainHeading="Empowering Innovation with AI"
        description="Discover how AI is revolutionizing industries by enabling smarter decisions, predictive insights, and automation like never before."
        reverse
      />

      <JoinSection />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12 sm:my-16 lg:my-20">
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
          description="A smart chatbot built using NLP and machine learning to handle customer queries in real time."
        />
      </div>

      <FeatureGrid />
      <Footer />
    </div>
  );
};

export default Home;
