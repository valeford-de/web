'use client'

import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export default function About() {
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
            <h1 className="section-title text-gradient mb-6">
              About Valeford
            </h1>
            <p className="section-subtitle mx-auto">
              We are a venture studio dedicated to building, validating, and scaling digital products that make a meaningful impact in the mobile-first world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Valeford, we believe that exceptional digital products are born from the intersection of strategic insight, rigorous validation, and disciplined execution. Our mission is to identify high-potential concepts and transform them into commercially viable businesses that create lasting value.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We focus exclusively on mobile applications because we understand that mobile is not just a platform—it's the primary way people interact with digital services today.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Focus</h3>
                  <p className="text-gray-600">Mobile-first digital products with proven market demand</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Rigorous Process</h3>
                  <p className="text-gray-600">Data-driven validation before significant investment</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Long-term Value</h3>
                  <p className="text-gray-600">Sustainable business models designed for growth</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="section-subtitle mx-auto">
              These principles guide every decision we make and every venture we build.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence",
                description: "We pursue excellence in every aspect of our work, from initial concept to final execution.",
                icon: "⭐"
              },
              {
                title: "Integrity",
                description: "We operate with complete transparency and honesty in all our business relationships.",
                icon: "🤝"
              },
              {
                title: "Innovation",
                description: "We constantly seek new ways to solve problems and create value for users and markets.",
                icon: "💡"
              },
              {
                title: "Impact",
                description: "We focus on building products that make a meaningful difference in people's lives.",
                icon: "🎯"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
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
              Our Approach
            </h2>
            <p className="section-subtitle mx-auto">
              We combine disciplined execution with strategic analysis to create ventures designed for long-term success.
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Market Analysis",
                description: "We begin with comprehensive market research to identify opportunities with genuine potential for sustainable growth."
              },
              {
                step: "02",
                title: "Concept Development",
                description: "Our team develops detailed product concepts that address real market needs with innovative mobile solutions."
              },
              {
                step: "03",
                title: "Rapid Validation",
                description: "We test concepts quickly and efficiently in the market to validate assumptions before significant investment."
              },
              {
                step: "04",
                title: "Strategic Execution",
                description: "Validated concepts are developed into full products with careful attention to user experience and business viability."
              },
              {
                step: "05",
                title: "Sustainable Growth",
                description: "We focus on building sustainable business models that can scale effectively and create long-term value."
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="text-valeford-blue font-bold text-lg mr-4">{item.step}</span>
                    <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                <div className="flex-1 bg-white p-8 rounded-lg shadow-sm">
                  <div className="w-16 h-16 bg-valeford-blue/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-valeford-blue">{item.step}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}