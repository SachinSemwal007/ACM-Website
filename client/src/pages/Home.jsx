import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel.jsx';
import CardInfo from '../components/CardInfo.jsx';
import Footer from '../components/Footer.jsx';   
import Header from '../components/Header.jsx';
import Cards from '../components/Cards.jsx';
import FutureInnovation from '../assets/CSSEC.jpg';
import EmpoweringAI from '../assets/EmpoweringAI.jpg';
import InfoSection from '../components/InfoSection.jsx';

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
            details="
Cyber Security & Management is the strategic and systematic approach your company takes to protect its digital infrastructure, sensitive data, and information systems from unauthorized access, cyber threats, and potential breaches. It combines advanced technologies, robust policies, proactive risk management, and continuous monitoring to ensure the confidentiality, integrity, and availability of your business-critical assets.

In today’s interconnected and digital business environment, cyber threats such as malware, ransomware, phishing, insider threats, and sophisticated cyberattacks pose a significant risk to companies of all sizes. Effective cybersecurity management addresses these risks by implementing a comprehensive defense strategy that includes firewalls, intrusion detection and prevention systems, encryption, identity and access controls, vulnerability management, and incident response plans.

Cybersecurity management is not just about technology — it involves governance, employee awareness, and compliance with legal and regulatory requirements to create a security-conscious culture throughout the organization. It requires ongoing assessment of security posture, rapid detection and mitigation of vulnerabilities, and a clear assignment of responsibility among the security team and leadership.

By investing in cyber security management, your company ensures business continuity even in the face of cyber incidents, protects intellectual property and customer data, builds trust with stakeholders, and meets industry standards. Furthermore, it enables your business to adapt quickly to evolving cyber risks and complex regulatory landscapes, maintaining a strong security posture in a dynamic threat environment.

Key benefits include minimized financial losses from cyberattacks, reduced operational disruptions, improved regulatory compliance, proactive risk identification, and fostering a resilient organizational culture that prioritizes security at every level.

In summary, cyber security and management safeguard your company’s digital assets and reputation, delivering a secure and reliable operational foundation necessary for sustainable growth and competitive advantage.

If you would like, I can also help you create a shorter summary or a more technical version for your website.

This definition is synthesized from trusted sources describing corporate cybersecurity management frameworks and practices."

          />
        </div>

        <div className="relative">
          <CardInfo
            image={EmpoweringAI}
            smallTopic="Artificial Intelligence"
            mainHeading="Optimizing Industry through AI"
            details="ACM helps you in designing and integrating artificial intelligence solutions uniquely tailored to your company’s operations, workflows and strategic goals. Unlike generic AI tools, custom AI is built to fit your specific data, business challenges and industry context—delivering maximum efficiency, precision and competitive advantage.
With AI-powered customization, your business can automate routine processes, analyze large datasets for actionable insights and deliver highly personalized user experiences. Whether it's through intelligent chatbots, dynamic recommendation engines, predictive analytics or workflow automation, AI drives operational excellence and creates new avenues for innovation and growth. These solutions are developed collaboratively with your to understand your current systems, future vision and compliance requirements—ensuring seamless integration and safeguarding sensitive data within your secure environment.
Custom AI not only boosts productivity by streamlining repetitive tasks, but it also adapts and scales alongside your business. As your operations evolve, these solutions can be retrained and extended to accommodate new data, trends and business priorities. Advanced features like real-time decision-making, automated A/B testing and tailored customer engagement help your company optimize resources and make smarter, faster decisions based on real-time insights.
Importantly, a customized approach to AI provides you with full control and ownership over your data, which is essential for meeting regulatory requirements and maintaining user privacy. By embedding AI into your IT ecosystem, your future-proof your business, staying agile and ready to seize emerging opportunities in a fast-changing digital landscape.

Key Benefits of Customized AI Enhancement:

• Solutions precisely aligned with your business objectives and KPIs.
• Automated workflows that reduce manual effort and costs while improving operational speed and accuracy.
• Personalization at scale—for both customer-facing experiences and internal processes.
• Robust data privacy and seamless integration into existing systems.
• Scalable, flexible architecture that grows alongside your company’s needs.
• Proprietary AI that delivers differentiation and isn’t easily replicable by competitors."

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
        <Footer />
      </div>
    </div>
  );
};

export default Home;
