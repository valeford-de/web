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
      <section className="hero-section relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24">
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
                  <div className="stat-number text-white">iOS</div>
                  <div className="stat-label text-gray-300">Primary Focus</div>
                </div>
                <div>
                  <div className="stat-number text-white">2024</div>
                  <div className="stat-label text-gray-300">Founded</div>
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
                  Our Approach
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-900">
                      Research-Driven
                    </span>
                    <span className="text-gray-600">Data-Based Decisions</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-900">
                      Platform Focus
                    </span>
                    <span className="text-gray-600">iOS Development</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-900">
                      Strategy
                    </span>
                    <span className="text-gray-600">Mobile-First</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold text-gray-900">Vision</span>
                    <span className="text-gray-600">Long-term Value</span>
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
                    Current Focus
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-900 font-medium">
                        iOS Development
                      </span>
                      <span className="text-institutional-600">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-900 font-medium">
                        Future Platforms
                      </span>
                      <span className="text-institutional-600">Exploring</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-900 font-medium">
                        Market Research
                      </span>
                      <span className="text-institutional-600">Ongoing</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-900 font-medium">
                        Team Building
                      </span>
                      <span className="text-institutional-600">Active</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Join Our Team</h3>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-300 mb-4">
                      We're building the future of digital ventures. Join us as
                      we grow.
                    </p>
                    <Link
                      href="/careers"
                      className="inline-block bg-white text-gray-900 px-4 py-2 text-sm font-semibold hover:bg-gray-100 transition-colors"
                    >
                      View Opportunities
                    </Link>
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
                  Have an idea? Pitch us.
                </h2>
                <p className="section-subtitle text-gray-300 mb-8">
                  We're always looking for innovative digital ventures to build
                  or invest in. Share your vision with us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-accent">
                    Pitch Your Idea
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
                <div className="text-white text-lg mb-4">hello@valeford.de</div>
                <div className="text-white/60 text-sm">
                  Remote Team • Germany
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
