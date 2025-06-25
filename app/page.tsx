"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useVideo } from "./contexts/VideoContext";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const backgroundFade = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

export default function Home() {
  const { videoEnabled } = useVideo();

  // Dynamic video path that works locally and on GitHub Pages
  const getVideoPath = () => {
    const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";
    return `${assetPrefix}/videos/hero_8000.mp4`;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video or Static Background */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-0" />
        <AnimatePresence>
          {videoEnabled ? (
            <motion.div
              key="video"
              className="absolute inset-0 w-full h-full z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={getVideoPath()} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          ) : (
            <motion.div
              key="static"
              className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Content */}
        <div className="container-wide relative z-20">
          <div className="institutional-grid items-center">
            <div className="content-left">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="hero-text text-white mb-8">
                  Digital Ventures
                  <span className="block">Built for Scale</span>
                </h1>

                <p className="section-subtitle mb-12 max-w-2xl text-gray-200">
                  We build and invest in digital ventures designed for long-term
                  value. Through disciplined execution and strategic analysis,
                  we create sustainable businesses in the mobile-first economy.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/ventures" className="btn-primary">
                    Our Platform
                  </Link>
                  <Link
                    href="/strategy"
                    className="btn-secondary bg-white text-gray-900 border-white hover:bg-gray-100"
                  >
                    Investment Strategy
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="content-right">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <div className="stat-number text-white">$48B+</div>
                  <div className="stat-label text-gray-300">
                    Market Opportunity
                  </div>
                </div>
                <div>
                  <div className="stat-number text-white">240+</div>
                  <div className="stat-label text-gray-300">
                    Markets Analyzed
                  </div>
                </div>
                <div>
                  <div className="stat-number text-white">125+</div>
                  <div className="stat-label text-gray-300">
                    Concepts Validated
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
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
                  Investment Strategy
                </h2>
                <p className="section-subtitle mb-12">
                  We focus on digital ventures with proven market demand,
                  scalable business models, and strong competitive positioning
                  in the mobile-first economy.
                </p>

                <div className="space-y-8">
                  <div className="border-l-4 border-gray-900 pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Market Analysis
                    </h3>
                    <p className="text-gray-600">
                      Comprehensive evaluation of market size, competitive
                      landscape, and growth potential across target segments.
                    </p>
                  </div>
                  <div className="border-l-4 border-gray-900 pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Concept Validation
                    </h3>
                    <p className="text-gray-600">
                      Rigorous testing methodologies to validate product-market
                      fit before significant capital deployment.
                    </p>
                  </div>
                  <div className="border-l-4 border-gray-900 pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Strategic Execution
                    </h3>
                    <p className="text-gray-600">
                      Disciplined approach to venture development with clear
                      milestones and performance metrics.
                    </p>
                  </div>
                </div>
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
                  Investment Criteria
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-900">
                      Market Size
                    </span>
                    <span className="text-gray-600">$1B+ TAM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-900">
                      Revenue Model
                    </span>
                    <span className="text-gray-600">Recurring/Scalable</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-900">
                      Platform
                    </span>
                    <span className="text-gray-600">Mobile-First</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold text-gray-900">
                      Timeline
                    </span>
                    <span className="text-gray-600">3-7 Years</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="section-padding bg-white">
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
                  Platform Capabilities
                </h2>
                <p className="section-subtitle mb-12">
                  Our integrated platform combines market intelligence,
                  technical expertise, and operational excellence to build
                  ventures that scale.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Market Intelligence
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Competitive landscape analysis</li>
                      <li>• Consumer behavior insights</li>
                      <li>• Technology trend assessment</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Technical Excellence
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Native mobile development</li>
                      <li>• Scalable cloud architecture</li>
                      <li>• Data-driven optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Operational Support
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Go-to-market strategy</li>
                      <li>• Performance monitoring</li>
                      <li>• Strategic partnerships</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Capital Efficiency
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Lean development methodology</li>
                      <li>• Risk-adjusted investment</li>
                      <li>• Value creation focus</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="content-right">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-institutional-50 p-6 border border-institutional-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Focus Areas
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-900 font-medium">
                        Mobile Commerce
                      </span>
                      <span className="text-institutional-600">35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-900 font-medium">
                        Digital Services
                      </span>
                      <span className="text-institutional-600">28%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-900 font-medium">
                        Enterprise Solutions
                      </span>
                      <span className="text-institutional-600">22%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-900 font-medium">
                        Consumer Applications
                      </span>
                      <span className="text-institutional-600">15%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">
                    Performance Metrics
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-black">18 months</div>
                      <div className="text-sm text-gray-300">
                        Average time to market
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-black">3.2x</div>
                      <div className="text-sm text-gray-300">
                        Average revenue multiple
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-wide">
          <div className="institutional-grid items-center">
            <div className="content-left">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="section-title text-white mb-8">
                  We build and invest in digital ventures designed for long-term
                  value.
                </h2>
                <p className="section-subtitle text-gray-300 mb-8">
                  Partner with us to create sustainable businesses in the
                  mobile-first economy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-accent">
                    Investment Opportunities
                  </Link>
                  <Link
                    href="/ventures"
                    className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
                  >
                    View Portfolio
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="content-right">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-right"
              >
                <div className="text-white/60 text-sm font-semibold tracking-wide uppercase mb-2">
                  Contact
                </div>
                <div className="text-white text-lg mb-4">
                  hello@valeford.com
                </div>
                <div className="text-white/60 text-sm">
                  London • New York • San Francisco
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
