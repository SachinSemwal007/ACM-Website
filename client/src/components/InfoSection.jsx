import React from "react";
import { useNavigate } from "react-router-dom";

const InfoSection = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Our Company",
      description:
        "Explore ACM's culture  of using technology to solve real world problems.",
      link: "/aboutACM",
      tag: "About ACM →",
    },
    {
      title: "Our Innovations",
      description:
        "Seek what lies ahead in technology as you visit the ACM Lab.",
      link: "/innovations",
      tag: "ACM Research →",
    },
    {
      title: "Our People",
      description:
        "Explore the requirements for becoming an ACM Employee or sharpen your abilities with our training programs.",
      link: "/careers", 
      tag: "Become an ACMer →",
    },
  ];

  const handleClick = (link) => {
      navigate(link);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl mb-12 text-center pt-1 text-black">
          Inside ACM
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-start hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-black mb-3 text-start">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm flex-1 text-start">
                {card.description}
              </p>
              <div className="mt-6 text-end">
                <button

                  onClick={() => handleClick(card.link)}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  {card.tag}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
