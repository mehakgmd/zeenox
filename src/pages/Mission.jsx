"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaLightbulb, FaGlobe } from "react-icons/fa";
import CTA from "../components/CTA-Section";
import Hero from "../components/Hero-Section";

const Mission = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
{/* Hero Section */}
      <Hero
        bgImage="/Home-imgs/idea-funding.jpeg"
        heading="Our Mission at ZEENOX EQUITY"
        subheading="Driving equity, empowering ideas, and building an inclusive economy for everyone."

      />
      {/* SECTION 1 */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Building an Inclusive Equity System
          </motion.h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold">ZEENOX EQUITY</span>, we are redefining opportunities by
            making entrepreneurship accessible for everyone. Our mission is to democratize equity
            participation, ensuring that innovation and growth are not just for the privileged few
            but for all who dare to dream.
          </p>
        </div>

        <motion.img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
          alt="Collaborative mission in action"
          className="rounded-2xl shadow-xl ring-1 ring-black/5 w-full object-cover filter brightness-105 contrast-105"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        />
      </section>

      {/* SECTION 2 */}
      <section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
      Our Vision Path
    </h2>

    <div className="relative max-w-5xl mx-auto">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-blue-700/80 md:-translate-x-1/3 rounded-full" />

      <div className="space-y-12 md:space-y-16">
        <div className="relative md:flex md:justify-start">
          <div className="absolute top-4 md:top-6 left-[1.125rem] md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-700 rounded-full border-4 border-white" />
          {/* Card */}
          <div className="md:w-[45%] md:pl-0 pl-10">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md ring-1 ring-gray-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Step 1: Inclusivity</h3>
              <p className="text-gray-700">
                We start by making equity accessible to all, ensuring everyone can
                participate in business growth.
              </p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative md:flex md:justify-end">
          <div className="absolute top-4 md:top-6 left-[1.125rem] md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-700 rounded-full border-4 border-white" />
          <div className="md:w-[45%] md:pr-0 pl-10 md:pl-0">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md ring-1 ring-gray-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Step 2: Collaboration</h3>
              <p className="text-gray-700">
                Partnerships between citizens and businesses create a shared sense
                of responsibility and success.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative md:flex md:justify-start">
          <div className="absolute top-4 md:top-6 left-[1.125rem] md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-700 rounded-full border-4 border-white" />
          <div className="md:w-[45%] md:pl-0 pl-10">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md ring-1 ring-gray-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Step 3: Sustainable Growth</h3>
              <p className="text-gray-700">
                Our ultimate goal is a sustainable, ethical economy where everyone
                grows together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* SECTION 3 */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What Drives Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHandsHelping size={32} aria-hidden="true" />,
                title: "Empowerment",
                desc: "Providing equal opportunities for individuals from every background.",
              },
              {
                icon: <FaLightbulb size={32} aria-hidden="true" />,
                title: "Innovation",
                desc: "Encouraging creativity to shape the businesses of tomorrow.",
              },
              {
                icon: <FaGlobe size={32} aria-hidden="true" />,
                title: "Inclusivity",
                desc: "Building a system where everyone has a stake in growth.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg ring-1 ring-gray-200 hover:shadow-2xl transition-transform focus-within:ring-2 focus-within:ring-blue-600"
                whileHover={{ y: -6 }}
              >
                <div className="mx-auto mb-5 flex items-center justify-center w-14 h-14 rounded-full ring-1 ring-blue-200">
                  <span className="text-blue-700">{card.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*  CTA */}
      <CTA/>
    </div>
  );
};

export default Mission;
