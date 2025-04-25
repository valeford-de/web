"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background gradient for depth without being distracting */}
      <div className="absolute w-[80%] h-[60%] top-[15%] right-[20%] rounded-full blur-3xl bg-blue-400/3 opacity-5"></div>
      
      <div className="container relative z-10 px-8 py-10 md:py-16 mx-auto flex flex-col lg:flex-row items-center">
        {/* Left side - Content */}
        <div className="w-full lg:w-[45%] mb-12 lg:mb-0 text-center lg:text-left">
          {/* Blue line above eyebrow tag */}
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '3rem' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-blue-500 mb-4 mx-auto lg:mx-0"
          ></motion.div>
          
          {/* Section label with increased spacing */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-500 uppercase text-xs tracking-widest mb-10 font-medium"
          >
            Valeford
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-medium text-5xl sm:text-6xl md:text-6xl leading-[1.15] tracking-tight mb-8"
          >
            Innovative Apps for a <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 bg-clip-text text-transparent animate-gradient">Digital Future</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-500 text-base md:text-lg mb-12 leading-relaxed"
          >
            We create and scale iOS ventures, using native Swift development and data-driven strategies to craft meaningful products.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-row flex-wrap gap-3 justify-center lg:justify-start"
          >
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-500 text-white px-6 sm:px-8 lg:px-10 py-3 lg:py-4 text-sm sm:text-base rounded-lg font-medium shadow transition-colors duration-300 ease-out hover:bg-blue-600"
              >
                Discover Projects
              </motion.button>
            </Link>
            
            <Link href="/learn-more">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white border border-gray-200 text-gray-700 px-6 sm:px-8 lg:px-10 py-3 lg:py-4 text-sm sm:text-base rounded-lg font-normal hover:bg-gray-50 transition-colors duration-300 ease-out"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        {/* Right side - SVG Illustration - Only visible in horizontal layout */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="hidden lg:flex w-full lg:w-[55%] items-center justify-center lg:justify-end"
        >
          <motion.div 
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100, 
              damping: 20,
              delay: 0.9 
            }}
            className="relative w-full max-w-xl lg:max-w-2xl lg:-ml-6 lg:-mr-6 xl:mr-0 py-6"
          >
            <Image
              src="/assets/hero_illustration.svg"
              alt="Digital innovation illustration"
              width={600}
              height={600}
              priority
              className="w-full h-auto"
              style={{ border: 'none' }}
            />
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
