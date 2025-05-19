"use client";
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import styles from "../styles/navigation.module.css";

export default function WorkWithUs() {
  return (
    <div
      className={`min-h-screen font-[family-name:var(--font-geist-sans)] ${styles.contentPadding}`}
    >
      {/* Hero Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Accent line */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "3rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-blue-500 mb-4 mx-auto"
            ></motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-medium text-4xl sm:text-5xl leading-tight tracking-tight mb-6"
            >
              Work With Us
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-500 text-base md:text-lg mb-12 leading-relaxed"
            >
              We're open to collaborations, partnerships, and app pitches. If
              you have an idea or project you'd like to discuss, we'd love to
              hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full bg-white py-10 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
