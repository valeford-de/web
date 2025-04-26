"use client";
import React from "react";
import { motion } from "framer-motion";

const OurApproach = () => {
  const approachPoints = [
    {
      title: "Fast MVP Development",
      description:
        "We rapidly transform ideas into working prototypes, focusing on core functionality to validate market fit quickly.",
    },
    {
      title: "Native Swift Excellence",
      description:
        "Our expertise in Swift ensures high-performance, beautiful iOS applications with seamless user experiences.",
    },
    {
      title: "Data-Driven Scaling",
      description:
        "We use analytics and user feedback to make informed decisions that drive product growth and refinement.",
    },
  ];

  return (
    <section className="relative bg-white py-20 md:py-28">
      {/* Subtle background - simplified from gradient to lighter solid color */}
      <div className="absolute w-full h-full top-0 left-0 bg-gray-50/70"></div>

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

          {/* Section label - refined typography */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 uppercase text-xs tracking-wider mb-5 font-normal"
          >
            Our Approach
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-normal text-3xl sm:text-4xl md:text-5xl leading-tight mb-16"
          >
            Fast. Focused. Scalable.
          </motion.h2>

          {/* Cleaner card layout with more minimal styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {approachPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03),0_2px_8px_-3px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_20px_-3px_rgba(0,0,0,0.05),0_4px_12px_-3px_rgba(0,0,0,0.03)] transition-shadow duration-300 ease-in-out relative"
              >
                {/* Simplified number indicator */}
                <div className="mb-5 text-blue-500 font-light text-lg">
                  0{index + 1}
                </div>
                <h3 className="font-normal text-xl mb-4">{point.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed font-light">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
