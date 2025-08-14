import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRight } from 'react-icons/fa6';

export default function Dashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 via-blue-800 to-gray-800 text-white py-20 px-6 text-center relative">
        <img
          src="/Home-imgs/idea-funding.jpeg"
          alt="Teamwork Vision"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Empower Individuals, Enable Businesses, Enrich Communities
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Through ethical equity participation, we create opportunities for
            growth, innovation, and sustainable success.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="whitespace-nowrap bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow border border-white hover:bg-transparent hover:text-white transition sm:px-6 px-4">
              Become a Partner
            </button>

            <button className="whitespace-nowrap bg-transparent border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition sm:px-6 px-4">
              Learn More
            </button>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto py-12 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Mission",
            desc: "We aim to create a functional, ethical, and inclusive equity system that empowers citizens to own and grow businesses.",
            img: "/Home-imgs/mission.jpeg",
          },
          {
            title: "Equity Participation",
            desc: "Become a partner in real businesses with transparent, performance-based profit sharing.",
            img: "/Home-imgs/equity-participation.jpg",
          },
          {
            title: "Idea Funding Partnership",
            desc: "We support innovators with funding, expertise, and operational guidance to scale ideas.",
            img: "/Home-imgs/idea-funding.jpeg",
          },
          {
            title: "Strategic Business Agreements",
            desc: "Partnering with established companies to minimize risk and maximize returns.",
            img: "/Home-imgs/business-agreement.jpg",
          },
          {
            title: "Why Choose ZEENOX EQUITY?",
            desc: "Performance-based profits, diversified investments, transparency, and sustainable growth.",
            img: "/Home-imgs/why-choose-us.jpeg",
          },
          {
            title: "What We Offer",
            desc: "Equity participation, funding, collaboration with companies, and transparent profit sharing.",
            img: "/Home-imgs/what-we-offer.jpeg",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition flex flex-col"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-40 w-full object-cover"
            />

            {/* Make content fill space and push link down */}
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
              </div>

              <a
                href="#"
                className="text-blue-600 font-semibold inline-flex items-center gap-1 group mt-auto"
              >
                Learn More
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                  <FaArrowRight style={{ fontSize: "15px" }} />
                </span>
              </a>
            </div>
          </div>


        ))}
      </section>

      {/* Why Choose Section */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose ZEENOX EQUITY?</h2>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            {[
              "Performance-based profits",
              "Diversified investments",
              "Accessibility & transparency",
              "20-year master plan for growth",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-blue-600 mt-1" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-gray-800 via-blue-800 to-gray-800 text-white py-16 px-6 text-center">
        <img
          src="/Home-imgs/what-we-offer.jpeg"
          alt="Join Movement"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join the Movement
          </h2>
          <p className="max-w-2xl mx-auto mb-6 opacity-90">
            Be part of the change that benefits everyone. Partner with us to
            create opportunities, grow businesses, and strengthen communities.
          </p>
          <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow border border-white hover:bg-transparent hover:text-white transition">
            Become a Partner
          </button>
        </div>
      </section>
    </div>
  );
}
