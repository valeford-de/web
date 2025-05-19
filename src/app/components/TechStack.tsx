"use client";
import React from "react";
import { motion } from "framer-motion";

const TechStack = () => {
  const technologies = [
    { name: "Swift" },
    { name: "Xcode Cloud" },
    { name: "Firebase" },
    { name: "TestFlight" },
    { name: "Stripe" },
    { name: "Supabase" },
  ];

  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="container relative z-10 px-6 md:px-8 mx-auto">
        <div className="w-full max-w-5xl mx-auto text-center">
          {/* Minimal blue accent line */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "2rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[1px] bg-blue-500 mb-6 mx-auto"
          ></motion.div>

          {/* Section label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 uppercase text-xs tracking-wider mb-5 font-normal"
          >
            Stack
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-normal text-3xl sm:text-4xl md:text-5xl leading-tight mb-16"
          >
            Built with the best tools.
          </motion.h2>

          {/* Technologies grid */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-10">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  opacity: 0.85,
                }}
                className="flex items-center justify-center transition-all duration-300 ease-in-out"
              >
                <span className="text-gray-600 text-lg font-light">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
