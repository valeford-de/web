"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const QuoteSection = () => {
  return (
    <section className="w-full bg-white py-32 md:py-40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Quote mark decoration */}
          <div className="relative">
            <span className="absolute -top-24 left-0 text-9xl text-gray-50 font-serif select-none">
              &ldquo;
            </span>

            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 relative z-10">
              {/* Photo - positioned on the left side, faded */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative w-44 h-44 md:w-64 md:h-64 shrink-0 filter grayscale opacity-70"
              >
                <Image
                  src="/images/coco-chanel.jpg"
                  alt="Coco Chanel"
                  fill
                  className="object-cover rounded-full"
                />
              </motion.div>

              {/* Quote content */}
              <div className="flex-1">
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center md:text-left"
                >
                  <p className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tighter text-gray-800 font-light">
                    &quot;Simplicity is the keynote of all true elegance.&quot;
                  </p>
                  <footer className="mt-8 text-gray-400 text-base md:text-xl font-light tracking-wide">
                    — Coco Chanel
                  </footer>
                </motion.blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
