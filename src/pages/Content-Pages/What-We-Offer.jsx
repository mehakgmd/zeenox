"use client"
import React from "react";
import { FaChartLine, FaUsers, FaShieldAlt, FaHandshake } from "react-icons/fa";
import CTA from "../../components/CTA-Section";
import Hero from "../../components/Hero-Section";
import { motion } from "framer-motion";
const WhatWeOffer = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        bgImage="/Home-imgs/idea-funding.jpeg"
        heading="What We Offer"
        subheading="Through ethical equity participation, we create opportunities for growth, innovation, and sustainable success."
        primaryBtnText="Become a Partner"
        primaryBtnLink="/subscriptions"
        secondaryBtnText="Learn More"
        secondaryBtnLink="/"
      />

      {/* Core Offerings */}
      <section className="max-w-7xl mx-auto py-20 px-6 text-center">
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our Core Offerings
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaChartLine className="text-blue-600 text-5xl mb-4" />,
              title: "Wealth Growth",
              desc: "Maximize your returns with smart, data-driven investment strategies.",
            },
            {
              icon: <FaUsers className="text-green-600 text-5xl mb-4" />,
              title: "Equity Participation",
              desc: "Join equity opportunities that empower sustainable financial growth.",
            },
            {
              icon: <FaShieldAlt className="text-purple-600 text-5xl mb-4" />,
              title: "Secure Investment",
              desc: "Your investments are backed with transparency and safety protocols.",
            },
            {
              icon: <FaHandshake className="text-yellow-600 text-5xl mb-4" />,
              title: "Partnerships",
              desc: "We work alongside you to achieve long-term financial success.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 p-8 transition"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-gradient-to-r from-gray-800 via-blue-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Partner With Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "10+", label: "Years Experience", icon: <FaChartLine /> },
              { value: "500+", label: "Investors Trust Us", icon: <FaUsers /> },
              { value: "$50M+", label: "Assets Managed", icon: <FaShieldAlt /> },
              { value: "99%", label: "Client Satisfaction", icon: <FaHandshake /> },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-xl p-6 shadow hover:bg-white/20 transition"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </h3>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Flexible Investment Plans
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We offer five tailored investment plans designed to meet different needs,
          from beginners to seasoned investors. Plans start as low as{" "}
          <span className="font-semibold text-blue-600">Rs. 100,000</span>.
          Explore all our plans and choose the one that fits your goals.
        </p>
        <button
          onClick={() => (window.location.href = "/subscriptions")}
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          View All Plans
        </button>
      </section>


      {/* Final CTA */}
      <CTA />
    </div>
  );
};

export default WhatWeOffer;
