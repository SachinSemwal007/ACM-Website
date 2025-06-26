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
  { name: "AI PC", link: "/ai-pc", icon: <Bot size={34} /> }, // ✅ Replaced CpuZap with Bot
  { name: "Edge", link: "/edge", icon: <Share2 size={34} /> },
  { name: "HPC", link: "/hpc", icon: <Cpu size={34} /> },
  { name: "Cyber Security", link: "/cyber-security", icon: <Shield size={34} /> },
];

const FeatureGrid = () => {
  return (
    <div className="w-[90%] max-w-7xl mx-auto my-12 flex flex-wrap gap-4 justify-center lg:justify-start">
      {/* Large AI Box */}
      <a
        href="/ai"
        className="bg-gray-200 p-6 flex flex-col justify-between rounded-md shadow-md w-full lg:w-[48%] min-h-[250px] hover:bg-gray-300 transition-all"
      >
        <div className="flex items-center gap-3">
          <Brain className="text-blue-600" size={32} />
          <h2 className="text-2xl font-bold text-gray-800">AI</h2>
        </div>
        <p className="text-gray-600 mt-3">
          Discover the world of Artificial Intelligence and how it's powering the future.
        </p>
        <button className="mt-4 w-max px-4 py-2 border border-blue-500 text-blue-500 bg-white rounded hover:bg-blue-500 hover:text-white transition duration-300">
          Explore
        </button>
      </a>

      {/* Small Feature Boxes */}
      {features.map((feature, idx) => (
        <a
          key={idx}
          href={feature.link}
          className="bg-black/25 w-[47%] sm:w-[30%] md:w-[23%] lg:w-[15%] aspect-square flex flex-col items-center justify-center rounded-md text-center font-semibold text-gray-700 hover:bg-gray-300 transition-all space-y-2"
        >
          <div className=" text-blue-500">{feature.icon}</div>
          <div>{feature.name}</div>
        </a>
      ))}
    </div>
  );
};

export default FeatureGrid;
