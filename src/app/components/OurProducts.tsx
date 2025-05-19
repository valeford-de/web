"use client";
import React from "react";
import { motion } from "framer-motion";

const OurProducts = () => {
  const products = [
    {
      name: "GradeTrack",
      description:
        "GradeTrack is a modern app for tracking academic grades and progress",
      tag: "In Development",
    },
    {
      name: "Lorem ipsum",
      description: "Personalized health tracking with AI insights",
      tag: "Coming Soon",
    },
    {
      name: "Lorem ipsum",
      description: "Minimal task manager for focused productivity",
      tag: "",
    },
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
            Our Products
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-normal text-3xl sm:text-4xl md:text-5xl leading-tight mb-16"
          >
            What We Build
          </motion.h2>

          {/* Product grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 4px 20px -3px rgba(0,0,0,0.05), 0 4px 12px -3px rgba(0,0,0,0.03)",
                  borderColor: "#e5e7eb",
                }}
                className="bg-white p-8 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03),0_2px_8px_-3px_rgba(0,0,0,0.01)] border border-gray-100 transition-all duration-300 ease-in-out relative flex flex-col h-full"
              >
                <h3 className="font-normal text-xl mb-3">{product.name}</h3>
                <p className="text-gray-500 text-base leading-relaxed font-light flex-grow">
                  {product.description}
                </p>
                {product.tag && (
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-500 text-xs rounded-full">
                      {product.tag}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
