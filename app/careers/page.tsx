"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

export default function Careers() {
  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-text text-gray-900 mb-8">Join Our Team</h1>
              <p className="section-subtitle mb-12 max-w-3xl mx-auto">
                We're building the future of digital ventures. Join us as we
                grow and create innovative solutions in the mobile-first
                economy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="section-padding bg-institutional-50">
        <div className="container-wide">
          <div className="institutional-grid">
            <div className="content-left">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="section-title text-gray-900 mb-8">
                  Growing Team
                </h2>
                <p className="section-subtitle mb-8">
                  As a startup, we're in the exciting phase of building our
                  team. While we don't have open positions right now, we're
                  always interested in connecting with talented individuals who
                  share our vision.
                </p>
                <p className="text-gray-600 mb-8">
                  We're currently focused on iOS development and will be
                  expanding our team as we grow. If you're passionate about
                  mobile development, digital ventures, or startup culture, we'd
                  love to hear from you.
                </p>
              </motion.div>
            </div>

            <div className="content-right">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What We're Looking For
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-gray-900 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      iOS Developers
                    </h4>
                    <p className="text-sm text-gray-600">
                      Swift, SwiftUI, mobile app development
                    </p>
                  </div>
                  <div className="border-l-4 border-gray-900 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Product Designers
                    </h4>
                    <p className="text-sm text-gray-600">
                      UI/UX, mobile-first design, user research
                    </p>
                  </div>
                  <div className="border-l-4 border-gray-900 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Business Development
                    </h4>
                    <p className="text-sm text-gray-600">
                      Strategy, partnerships, market analysis
                    </p>
                  </div>
                  <div className="border-l-4 border-gray-900 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Marketing
                    </h4>
                    <p className="text-sm text-gray-600">
                      Digital marketing, growth, content creation
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title text-gray-900 mb-8">Our Culture</h2>
              <p className="section-subtitle">
                We believe in building a company where talented people can do
                their best work.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-institutional-50 p-6 border border-institutional-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Remote-First
                </h3>
                <p className="text-gray-600">
                  We're a distributed team working remotely across Germany. We
                  believe in flexibility and work-life balance while maintaining
                  high standards of collaboration.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-institutional-50 p-6 border border-institutional-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Innovation Focus
                </h3>
                <p className="text-gray-600">
                  We're passionate about building innovative digital solutions.
                  Every team member has the opportunity to contribute ideas and
                  shape our products.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-institutional-50 p-6 border border-institutional-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Growth Mindset
                </h3>
                <p className="text-gray-600">
                  As a startup, we're all learning and growing together. We
                  encourage experimentation, learning from failures, and
                  continuous improvement.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-institutional-50 p-6 border border-institutional-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Long-term Vision
                </h3>
                <p className="text-gray-600">
                  We're building for the long term. We value sustainable growth,
                  quality over quantity, and creating lasting value for our
                  users and team.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-white mb-8">
                Interested in Joining Us?
              </h2>
              <p className="section-subtitle text-gray-300 mb-12">
                Even if we don't have open positions right now, we're always
                excited to connect with talented individuals. Send us your
                information and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-accent">
                  Get In Touch
                </Link>
                <a
                  href="mailto:hello@valeford.de?subject=Career Interest"
                  className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Send Your Resume
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
