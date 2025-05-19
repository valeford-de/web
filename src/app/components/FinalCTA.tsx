"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Minimal blue accent line */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "3rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[2px] bg-blue-500 mb-6 mx-auto"
          ></motion.div>
          
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-medium text-4xl md:text-5xl leading-tight tracking-tight mb-5"
          >
            Let&apos;s build something that matters.
          </motion.h2>
          
          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-500 text-base md:text-lg mb-12 leading-relaxed"
          >
            We&apos;re open to collaborations, pitches, and smart ideas.
          </motion.p>
          
          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/work-with-us">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-500 text-white px-8 py-4 text-base rounded-lg font-medium shadow transition-colors duration-300 ease-out hover:bg-blue-600"
              >
                Work With Us →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
