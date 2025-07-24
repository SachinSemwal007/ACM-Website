import React from "react";

const InfoSection = () => {
  const cards = [
    {
      title: "Our Company",
      description:
        "Explore ACM's culture  of using technology to solve real world problems.",
      link: "#",
      tag:"About ACM ->"
    },
    {
      title: "Our Innovations",
      description:
        "Seek what lies ahead in technology as you visit the ACM Lab.",
      link: "#",
      tag:"ACM Research ->"
    },
    {
      title: "Our People",
      description:
        "Explore the requirements for becoming an ACM Employee or sharpen your abilities with our training programs.",
      link: "#",
      tag:"Become an ACMer ->"
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl  mb-12 text-center  pt-1 text-black">
          Inside ACM
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-start hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-black mb-3 text-start">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm flex-1 text-start">
                {card.description}
              </p>

              {/* Learn more */}
              <div className="mt-6 text-end">
                <a
                  href={card.link}
                  className="text-blue-600  hover:underline"
                >
                  {card.tag}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
