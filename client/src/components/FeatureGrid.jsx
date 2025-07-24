import React from "react";
import {
  Brain,
  Code2,
  GitBranch,
  Gamepad2,
  Cloud,
  Cpu,
  Bot,
  Share2,
  Shield,
} from "lucide-react";

const features = [
  { name: "Developer Tool", link: "/developer-tool", icon: <Code2 size={34} /> },
  { name: "Open Source", link: "/open-source", icon: <GitBranch size={34} /> },
  { name: "Gaming", link: "/gaming", icon: <Gamepad2 size={34} /> },
  { name: "Cloud", link: "/cloud", icon: <Cloud size={34} /> },
  { name: "AI PC", link: "/ai-pc", icon: <Bot size={34} /> },
  { name: "Edge", link: "/edge", icon: <Share2 size={34} /> },
  { name: "HPC", link: "/hpc", icon: <Cpu size={34} /> },
  { name: "Cyber Security", link: "/cyber-security", icon: <Shield size={34} /> },
];

const FeatureGrid = () => {
  return (
    <div className="w-[90%] max-w-7xl mx-auto my-12 flex flex-wrap gap-6 justify-center lg:justify-start">
      {/* Large AI Box */}
      <a
        href="/ai"
        data-aos="fade-right"
        data-aos-duration="800"
        className="bg-gray-700 p-6 flex flex-col justify-between rounded-lg shadow-xl w-full lg:w-[48%] min-h-[250px] hover:bg-blue-900 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <Brain className="text-blue-400" size={34} />
          <h2 className="text-3xl font-bold text-white">AI</h2>
        </div>
        <p className="text-gray-100 mt-3 leading-relaxed">
          Discover the world of Artificial Intelligence and how it's powering the future.
        </p>

        {/* Flip Button */}
        <div className="relative mt-6 w-max">
          <button className="flip-btn px-5 py-2 border border-white bg-white text-blue-900  rounded-md transition duration-200 hover:bg-blue-100 hover:text-blue-500">
            <span className="front">Explore</span>
          </button>
        </div>
      </a>

      {/* Small Feature Boxes */}
      {features.map((feature, idx) => (
        <a
          key={idx}
          data-aos="fade-up"
          data-aos-delay={idx * 100 + 200}
          data-aos-duration="700"
          href={feature.link}
          className="group bg-gray-800 w-[47%] sm:w-[30%] md:w-[23%] lg:w-[15%] aspect-square flex flex-col items-center justify-center rounded-lg font-semibold text-gray-300 hover:bg-blue-800 hover:text-white transition-colors cursor-pointer space-y-3"
        >
          <div className="text-blue-400 group-hover:text-white transition-colors duration-900">
            {feature.icon}
          </div>
          <div className="text-center text-base group-hover:text-white transition-colors duration-400">
            {feature.name}
          </div>
        </a>
      ))}
    </div>
  );
};

export default FeatureGrid;
