import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";
import Consultancy from "../assets/Consultancy.jpg"

const Consulting = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <section className="relative h-[60vh] w-full mt-1">
        <img
          src={Consultancy}
          alt="Consulting Hero"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Empowering Businesses with Insight</h2>
          <p className="max-w-2xl text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl  mb-4 text-black">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
            {[
              {
                title: "Lorem Ipsum 1",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
              },
              {
                title: "Lorem Ipsum 2",
                desc: "Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
              },
              {
                title: "Lorem Ipsum 3",
                desc: "Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-[#0070c0] mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Consulting Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Lorem Service A",
              "Lorem Service B",
              "Lorem Service C",
              "Lorem Service D",
              "Lorem Service E",
              "Lorem Service F"
            ].map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition"
              >
                <h3 className="text-lg font-medium text-[#0070c0] mb-2">{service}</h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-[#0070c0] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Abcd efg",
                feedback:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero."
              },
              {
                name: "Abcd efg",
                feedback:
                  "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
              }
            ].map((client, i) => (
              <div key={i} className="bg-white text-[#0070c0] p-6 rounded-lg shadow-md">
                <p className="italic">"{client.feedback}"</p>
                <p className="mt-4 font-bold">- {client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform?</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
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
