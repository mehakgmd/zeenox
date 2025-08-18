import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaChartLine,
  FaHandshake,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import CTA from "../../components/CTA-Section";
import Hero from "../../components/Hero-Section";

const EquityParticipation = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        bgImage="/Home-imgs/equity-participation.jpg"
        heading="Equity Participation"
        subheading="Empowering individuals to invest, own, and thrive in a sustainable future."
      />

      {/* Why Participate Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Why Participate in Our Equity Model?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaHandshake className="text-blue-600 text-4xl" />,
              title: "Collaborative Growth",
              desc: "Invest alongside like-minded citizens and grow together.",
            },
            {
              icon: <FaUsers className="text-green-600 text-4xl" />,
              title: "Inclusive Ownership",
              desc: "Opportunities designed for everyone, regardless of background.",
            },
            {
              icon: <FaChartLine className="text-purple-600 text-4xl" />,
              title: "Sustainable Returns",
              desc: "Long-term benefits with transparent equity structures.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            How Equity Participation Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <FaLightbulb className="text-yellow-500 text-3xl" />,
                title: "Step 1",
                desc: "Explore available equity opportunities.",
              },
              {
                icon: <FaUsers className="text-blue-500 text-3xl" />,
                title: "Step 2",
                desc: "Join hands with other citizen investors.",
              },
              {
                icon: <MdOutlineSecurity className="text-red-500 text-3xl" />,
                title: "Step 3",
                desc: "Secure and transparent investment process.",
              },
              {
                icon: <FaChartLine className="text-green-500 text-3xl" />,
                title: "Step 4",
                desc: "Watch your equity grow sustainably.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white shadow rounded-xl p-6 text-center hover:shadow-md transition"
              >
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h4 className="font-semibold text-lg">{step.title}</h4>
                <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          The Impact of Your Participation
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Economic Empowerment",
              desc: "Boost communities by giving citizens the power to invest.",
              img: "/Home-imgs/Empower.jpg",
            },
            {
              title: "Shared Prosperity",
              desc: "Create wealth that benefits all, not just a few.",
              img: "/Home-imgs/Shared-Prosperity.jpg",
            },
            {
              title: "Stronger Future",
              desc: "Lay the foundation for sustainable and fair business ecosystems.",
              img: "/Home-imgs/Future.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition" 
            >
              <img
                src={item.img}
                alt={item.title}
                className="block h-48 w-full object-cover" 
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default EquityParticipation;
