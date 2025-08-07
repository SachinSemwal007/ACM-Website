import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const CareersPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedWorkMode, setSelectedWorkMode] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const jobs = [
    {
      title: "Python ML Developer",
      category: "AI/ML Engineers",
      workMode: "Office",
      experience: "2-5",
      location: "Ranchi, Jharkhand",
      type: "Full-Time",
      description:
        "We are looking for a skilled Python ML Developer with experience in Machine Learning, Deep Learning, and Data Processing. The candidate should be familiar with TensorFlow, PyTorch, and large datasets handling.",
    },
    {
      title: "Frontend Developer",
      category: "Full Stack Developers",
      workMode: "Hybrid",
      experience: "0-2",
      location: "Mumbai, Maharashtra",
      type: "Full-Time",
      description:
        "Join our team to build responsive, modern web applications using React and Tailwind CSS.",
    },
    {
      title: "Data Analyst",
      category: "Data Analyst",
      workMode: "WFH",
      experience: "2-5",
      location: "Remote",
      type: "Full-Time",
      description:
        "Analyze and visualize large datasets to generate actionable insights for our projects. Knowledge of SQL and BI tools is required.",
    },
    {
      title: "Ethical Hacker",
      category: "Cyber Security Analyst",
      workMode: "Office",
      experience: "5-7",
      location: "Delhi",
      type: "Full-Time",
      description:
        "Perform penetration testing, vulnerability assessments, and ensure system security across networks.",
    },
    {
      title: "HR Manager",
      category: "Human Resources",
      workMode: "Hybrid",
      experience: "7-10",
      location: "Delhi",
      type: "Full-Time",
      description:
        "Manage hiring, employee relations, and organizational development for growing teams.",
    },
    {
      title: "R Developer",
      category: "AI/ML Engineers",
      workMode: "Office",
      experience: "3-5",
      location: "Ranchi, Jharkhand",
      type: "Full-Time",
      description:
        "We are looking for a skilled Python ML Developer with experience in Machine Learning, Deep Learning, and Data Processing. The candidate should be familiar with TensorFlow, PyTorch, and large datasets handling.",
    },
  ];

  const categories = [
    "AI/ML Engineers",
    "Full Stack Developers",
    "Data Analyst",
    "Cyber Security Analyst",
    "Human Resources",
    "Embeded System Design",
    "Ethical Hacker",
    "Quality Assurance Engineer",
    "OT Security Architects",
    "Manual / Automation Tester"
  ];

  const workModes = ["Office", "WFH", "Hybrid"];
  const experienceLevels = ["0-2", "2-5", "5-7", "7-10", "10+"];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleWorkModeChange = (value) => {
    setSelectedWorkMode(selectedWorkMode === value ? "" : value);
  };

  const handleExperienceChange = (value) => {
    setSelectedExperience(selectedExperience === value ? "" : value);
  };

  const filteredJobs = jobs.filter((job) => {
    const categoryMatch =
      selectedCategories.length === 0 || selectedCategories.includes(job.category);
    const workModeMatch =
      !selectedWorkMode || job.workMode === selectedWorkMode;
    const experienceMatch =
      !selectedExperience || job.experience === selectedExperience;
    const searchMatch =
      searchTerm.trim() === "" || job.title.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && workModeMatch && experienceMatch && searchMatch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Header
        title="Start Your ACM Journey"
        description="Join our team and work on cutting-edge technology projects that make an impact."
      />

      {/* Main Section */}
      <section className="flex-1 max-w-7xl mx-auto py-16 px-2 w-full flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/4 bg-white p-6 rounded-xl shadow border border-gray-200">
          <div className="bg-[#0070c0]/80 rounded-md">
            <h3 className="text-lg font-semibold mb-4 text-center my-auto text-white p-2">
              Filter Jobs
            </h3>
          </div>

          {/* Category Filter */}
          <div className="mb-1">
            <div
              onClick={() => toggleDropdown("category")}
              className="flex justify-between items-center cursor-pointer py-2"
            >
              <h4 className=" text-black">Job Category</h4>
              <span className="text-gray-600">{openDropdown === "category" ? "▲" : "▼"}</span>
            </div>
            {openDropdown === "category" && (
              <div className="flex flex-col gap-2 mt-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 text-gray-700">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => handleCategoryChange(cat)}
                      className="accent-[#0070c0] w-4 h-4"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Work Mode Filter */}
          <div className="mb-1">
            <div
              onClick={() => toggleDropdown("workMode")}
              className="flex justify-between items-center cursor-pointer py-2"
            >
              <h4 className=" text-black">Work Mode</h4>
              <span className="text-gray-600">{openDropdown === "workMode" ? "▲" : "▼"}</span>
            </div>
            {openDropdown === "workMode" && (
              <div className="flex flex-col gap-2 mt-2">
                {workModes.map((mode) => (
                  <label key={mode} className="flex items-center gap-2 text-gray-700">
                    <input
                      type="checkbox"
                      checked={selectedWorkMode === mode}
                      onChange={() => handleWorkModeChange(mode)}
                      className="accent-[#0070c0] w-4 h-4"
                    />
                    {mode}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Experience Filter */}
          <div className="mb-1">
            <div
              onClick={() => toggleDropdown("experience")}
              className="flex justify-between items-center cursor-pointer py-2"
            >
              <h4 className=" text-black">Experience Level</h4>
              <span className="text-gray-600">{openDropdown === "experience" ? "▲" : "▼"}</span>
            </div>
            {openDropdown === "experience" && (
              <div className="flex flex-col gap-2 mt-2">
                {experienceLevels.map((exp) => (
                  <label key={exp} className="flex items-center gap-2 text-gray-700">
                    <input
                      type="checkbox"
                      checked={selectedExperience === exp}
                      onChange={() => handleExperienceChange(exp)}
                      className="accent-[#0070c0] w-4 h-4"
                    />
                    {exp} years
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Reset Filters Button */}
          <button
            onClick={() => {
              setSelectedCategories([]);
              setSelectedWorkMode("");
              setSelectedExperience("");
              setSearchTerm("");
            }}
            className="w-full bg-gray-200 text-black py-2 px-4 rounded-md hover:bg-gray-300 transition"
          >
            Clear Filters
          </button>
        </aside>

        {/* Job Listings */}
        <div className="flex-1">
          {/* Search Input */}
          <div className="mb-6 w-full flex justify-end">
            <input
              type="text"
              placeholder="Search job title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="  px-4 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#0070c0]"
            />
          </div>

          {(searchTerm || selectedCategories.length || selectedWorkMode || selectedExperience) ? (
            filteredJobs.length === 0 ? (
              <p className="text-center text-gray-600">
                No jobs available in selected filters.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col"
                  >
                    <h3 className="text-sm text-black text-start">{job.title}</h3>
                    <p
                      className={`text-gray-600 mt-2 text-sm cursor-default transition-all duration-300 ${
                        expandedIndex === index
                          ? ""
                          : "overflow-hidden text-ellipsis line-clamp-3"
                      }`}
                    >
                      {job.description}
                    </p>
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-[#0070c0] mt-1 text-sm font-medium hover:underline self-start"
                    >
                      {expandedIndex === index ? "Show less" : "Click to know more"}
                    </button>
                    <div className="mt-4 text-sm text-gray-500">
                      {/* <p>📍 {job.location}</p> */}
                      <p>💼 {job.type} | {job.workMode}</p>
                      <p>🧑‍💻 Experience: {job.experience} years</p>
                    </div>
                    {/* <div className="mt-auto">
                      <button
                        onClick={() => alert("Application form coming soon!")}
                        className="mt-6 w-full bg-[#0070c0] text-white py-2 px-4 rounded-md hover:bg-blue-800 transition"
                      >
                        Apply Now
                      </button>
                    </div> */}
                  </div>
                ))}
              </div>
            )
          ) : (
            <p className="text-center text-gray-400 italic">
              Thankyou for your interest, But there are currently no open positions at ACM
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
