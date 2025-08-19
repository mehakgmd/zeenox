import React from "react";
import { FaUsers, FaShieldAlt, FaChartLine } from "react-icons/fa";
import CTA from "../components/CTA-Section";
import Hero from "../components/Hero-Section";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        bgImage="/Home-imgs/why-choose-us-hero-img.jpeg"
        heading="Why Choose Us"
        subheading="We don’t just deliver services — we deliver trust, growth, and lasting impact."
        primaryBtnText="Become a Partner"
        primaryBtnLink="/subscriptions"
        secondaryBtnText="Learn More"
        secondaryBtnLink="/"
      />
      {/* Feature 1 */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <FaUsers className="text-blue-600 text-3xl" /> Community Driven
          </motion.h2>
          <motion.p className="text-gray-600 text-lg">
            We believe in people-first values. By building strong communities and partnerships,
            we ensure long-term growth and trust for everyone involved.
          </motion.p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
          alt="Community Driven"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Feature 2 */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80"
            alt="Trusted & Secure"
            className="rounded-2xl shadow-lg order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <FaShieldAlt className="text-blue-600 text-3xl" /> Trusted & Secure
            </h2>
            <p className="text-gray-600 text-lg">
              We maintain transparency, security, and ethical practices so you can
              have complete confidence in every decision and every process.
            </p>
          </div>
        </div>
      </section>

      {/* Feature 3 */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <FaChartLine className="text-blue-600 text-3xl" /> Proven Growth
          </h2>
          <p className="text-gray-600 text-lg">
            With a focus on results-driven strategies, we empower businesses to
            grow consistently and achieve measurable success.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
          alt="Proven Growth"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default WhyChooseUs;
