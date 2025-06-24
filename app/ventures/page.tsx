"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Ventures() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="section-title text-gradient mb-6">Our Ventures</h1>
            <p className="section-subtitle mx-auto">
              We build digital products that solve real problems and create
              lasting value. Each venture represents our commitment to
              excellence and innovation in the mobile-first world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-gradient mb-6">
              Portfolio Overview
            </h2>
            <p className="section-subtitle mx-auto">
              Our ventures span multiple industries, united by our focus on
              mobile innovation and strategic execution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                metric: "12+",
                label: "Ventures Built",
                description: "Successfully launched and scaled",
              },
              {
                metric: "$50M+",
                label: "Total Value Created",
                description: "Across our portfolio companies",
              },
              {
                metric: "2M+",
                label: "Users Reached",
                description: "Through our mobile applications",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white p-8 rounded-lg shadow-sm"
              >
                <div className="text-4xl font-bold text-valeford-blue mb-2">
                  {stat.metric}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Ventures */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-gradient mb-6">
              Featured Ventures
            </h2>
            <p className="section-subtitle mx-auto">
              Explore some of our most successful ventures that demonstrate our
              approach to building exceptional digital products.
            </p>
          </motion.div>

          <div className="space-y-16">
            {[
              {
                name: "MobileFirst",
                category: "Productivity",
                status: "Active",
                description:
                  "A comprehensive mobile productivity suite designed for modern professionals. Features intelligent task management, seamless collaboration tools, and AI-powered insights.",
                metrics: {
                  users: "500K+",
                  rating: "4.8/5",
                  growth: "+150%",
                },
                technologies: [
                  "React Native",
                  "Node.js",
                  "AI/ML",
                  "Cloud Infrastructure",
                ],
              },
              {
                name: "ConnectPro",
                category: "Communication",
                status: "Scaling",
                description:
                  "Enterprise communication platform that bridges the gap between remote and in-office teams. Combines video conferencing, project management, and real-time collaboration.",
                metrics: {
                  users: "250K+",
                  rating: "4.7/5",
                  growth: "+200%",
                },
                technologies: [
                  "Flutter",
                  "WebRTC",
                  "Microservices",
                  "Real-time Analytics",
                ],
              },
              {
                name: "HealthTrack",
                category: "Healthcare",
                status: "Launched",
                description:
                  "Personal health monitoring application that helps users track vital metrics, medication schedules, and wellness goals. Integrates with wearable devices and healthcare providers.",
                metrics: {
                  users: "300K+",
                  rating: "4.9/5",
                  growth: "+180%",
                },
                technologies: [
                  "Swift",
                  "Kotlin",
                  "HealthKit",
                  "FHIR Integration",
                ],
              },
            ].map((venture, index) => (
              <motion.div
                key={venture.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-4">
                    <span className="bg-valeford-blue/10 text-valeford-blue px-3 py-1 rounded-full text-sm font-medium mr-3">
                      {venture.category}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {venture.status}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {venture.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {venture.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-valeford-blue">
                        {venture.metrics.users}
                      </div>
                      <div className="text-sm text-gray-600">Active Users</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-valeford-blue">
                        {venture.metrics.rating}
                      </div>
                      <div className="text-sm text-gray-600">App Rating</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-valeford-blue">
                        {venture.metrics.growth}
                      </div>
                      <div className="text-sm text-gray-600">YoY Growth</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {venture.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`bg-gray-50 p-8 rounded-lg ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <div className="aspect-video bg-gradient-to-br from-valeford-blue/20 to-valeford-blue/5 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-valeford-blue mb-2">
                        {venture.name}
                      </div>
                      <div className="text-gray-600">Mobile Application</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-gradient mb-6">
              Investment Approach
            </h2>
            <p className="section-subtitle mx-auto">
              Our systematic approach to venture development ensures consistent
              results and sustainable growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Market Validation",
                description:
                  "Rigorous testing of market demand before significant investment",
                icon: "📊",
              },
              {
                title: "Technical Excellence",
                description:
                  "Best-in-class development practices and cutting-edge technology",
                icon: "⚡",
              },
              {
                title: "User-Centric Design",
                description:
                  "Deep focus on user experience and product-market fit",
                icon: "👥",
              },
              {
                title: "Scalable Architecture",
                description:
                  "Built for growth with robust, scalable technical foundations",
                icon: "🚀",
              },
            ].map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                <div className="text-4xl mb-4">{approach.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {approach.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {approach.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="section-title text-gradient mb-6">
              Partner With Us
            </h2>
            <p className="section-subtitle mb-8">
              Interested in learning more about our ventures or exploring
              partnership opportunities? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Get In Touch
              </a>
              <a href="/strategy" className="btn-secondary">
                Our Strategy
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
