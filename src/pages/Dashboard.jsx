"use client";

import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRight } from 'react-icons/fa6';
import CTA from "../components/CTA-Section";
import Hero from "../components/Hero-Section";
export default function Dashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <Hero
        bgImage="/Home-imgs/idea-funding.jpeg"
        heading=" Empower Individuals, Enable Businesses, Enrich Communities"
        subheading="Through ethical equity participation, we create opportunities for
            growth, innovation, and sustainable success."
        primaryBtnText="Become a Partner"
        primaryBtnLink="/subscriptions"
        secondaryBtnText="Learn More"
        secondaryBtnLink="/"
      />
      {/* Features Section */}
      <section className="max-w-7xl mx-auto py-12 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
      title: "Mission",
      desc: "We aim to create a functional, ethical, and inclusive equity system that empowers citizens to own and grow businesses.",
      img: "/Home-imgs/mission.jpeg",
      link: "/mission",
    },
    {
      title: "Equity Participation",
      desc: "Become a partner in real businesses with transparent, performance-based profit sharing.",
      img: "/Home-imgs/equity-participation.jpg",
      link: "/equity-participation",
    },
    {
      title: "Idea Funding Partnership",
      desc: "We support innovators with funding, expertise, and operational guidance to scale ideas.",
      img: "/Home-imgs/idea-funding.jpeg",
      link: "/idea-funding",
    },
    {
      title: "Strategic Business Agreements",
      desc: "Partnering with established companies to minimize risk and maximize returns.",
      img: "/Home-imgs/business-agreement.jpg",
      link: "/strategic-agreements",
    },
    {
      title: "Why Choose ZEENOX EQUITY?",
      desc: "Performance-based profits, diversified investments, transparency, and sustainable growth.",
      img: "/Home-imgs/why-choose-us.jpeg",
      link: "/why-choose-us",
    },
    {
      title: "What We Offer",
      desc: "Equity participation, funding, collaboration with companies, and transparent profit sharing.",
      img: "/Home-imgs/what-we-offer.jpeg",
      link: "/what-we-offer",
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
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
              </div>

              <a
                href={item.link}
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
      <CTA />

    </div>
  );
}
