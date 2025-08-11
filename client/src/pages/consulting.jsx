import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from "react-router-dom"
import { assets } from '../assets/assets'

const Consulting = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <section className="relative h-[60vh] w-full mt-1">
        <img
          src={assets.Consultancy}
          alt="Consulting Hero"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Collaboration Innovation Stratergy Expertise </h2>
          <p className="max-w-4xl text-lg">
            Expert guidance and tailored solutions to accelerate your innovation and research goals
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl  mb-4 text-black">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Artificial Computing Machines, we dont just adapt to technological evolution - we drive it. Join us in shaping a smarter, more secure, and technologically advance future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 text-left">
            {[
              {
                title: "Innovation - Driven",
                desc: "Our state-of-the-art R&D labs focus on developing solutions that redefine industry standards."
              },
              {
                title: "Security First Approach",
                desc: "We prioritize robust security architectures, ensuring resilience against evolving cyber threats."
              },
              {
                title: "Trusted by Industry",
                desc: "Collaborating with government agencies, corporate companies and defense organization globally."
              },
               {
                title: "Future Ready Solutions",
                desc: "Preparing for the future with AI-driven automation and next-gen security frameworks."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-[#0070c0] mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm ">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          {/* <h2 className="text-3xl font-bold mb-4">Ready to Transform?</h2> */}
          <p className="text-gray-600 mb-6">
           Reach out to connect with our experts and accelerate your innovation journey.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#0070c0] text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
          >
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consulting;
