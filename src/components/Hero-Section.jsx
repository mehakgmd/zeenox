"use client";
import React from "react";
import { motion } from "framer-motion";
const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = ({
  bgImage,
  heading,
  subheading,
  primaryBtnText,
  primaryBtnLink,
  secondaryBtnText,
  secondaryBtnLink,
}) => {
  return (
    <section className="bg-gradient-to-r from-gray-800 via-blue-800 to-gray-800 text-white py-20 px-6 text-center relative">
      <img
        src={bgImage}
        alt="CTA Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
         <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {heading}
        </h1>
        </motion.h1>
         <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mt-6 text-lg md:text-xl text-white max-w-3xl mx-auto"
          >
        <p className="max-w-3xl mx-auto text-base sm:text-lg opacity-90">
          {subheading}
        </p>
       </motion.p>
        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {primaryBtnText && (
            <a
              href={primaryBtnLink}
              className="whitespace-nowrap bg-white text-blue-700 font-semibold px-4 sm:px-6 py-3 rounded-full shadow border border-white hover:bg-transparent hover:text-white transition"
            >
              {primaryBtnText}
            </a>
          )}

          {secondaryBtnText && (
            <a
              href={secondaryBtnLink}
              className="whitespace-nowrap bg-transparent border border-white px-4 sm:px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition"
            >
              {secondaryBtnText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
