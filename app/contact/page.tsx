'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

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
              Get In Touch
            </h1>
            <p className="section-subtitle mx-auto">
              Ready to discuss your next venture or explore partnership opportunities? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-valeford-blue focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-valeford-blue focus:border-transparent transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-valeford-blue focus:border-transparent transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-valeford-blue focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="investment">Investment Inquiry</option>
                    <option value="venture">New Venture Discussion</option>
                    <option value="consulting">Consulting Services</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-valeford-blue focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project, partnership opportunity, or how we can help..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We're always interested in discussing new opportunities, partnerships, and innovative projects. Reach out to us through any of the channels below.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-valeford-blue/10 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-valeford-blue text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">hello@valeford.com</p>
                    <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-valeford-blue/10 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-valeford-blue text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Berlin, Germany</p>
                    <p className="text-sm text-gray-500">Available for meetings by appointment</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-valeford-blue/10 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-valeford-blue text-xl">💼</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday, 9:00 AM - 6:00 PM CET</p>
                    <p className="text-sm text-gray-500">Emergency consultations available</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">What to expect:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-valeford-blue mr-3 mt-1">•</span>
                    <span className="text-gray-600">Initial response within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-valeford-blue mr-3 mt-1">•</span>
                    <span className="text-gray-600">Detailed project discussion call</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-valeford-blue mr-3 mt-1">•</span>
                    <span className="text-gray-600">Strategic assessment and recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-valeford-blue mr-3 mt-1">•</span>
                    <span className="text-gray-600">Proposal for next steps</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="section-subtitle mx-auto">
              Common questions about working with Valeford and our venture development process.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "What types of projects do you work on?",
                  answer: "We focus exclusively on mobile-first digital products with significant market potential. This includes mobile applications, mobile-optimized web platforms, and digital services designed for mobile users."
                },
                {
                  question: "How long does the venture development process take?",
                  answer: "Our process typically takes 6-12 months from initial concept to market launch, depending on complexity. We start with 2-4 weeks of validation before moving to full development."
                },
                {
                  question: "Do you provide funding for ventures?",
                  answer: "Yes, we provide both strategic guidance and funding for ventures that meet our criteria. We typically invest $100K-$500K in the initial development phase."
                },
                {
                  question: "Can you help with existing products?",
                  answer: "Absolutely. We work with existing products that need strategic repositioning, technical improvements, or scaling support. We assess each situation individually."
                },
                {
                  question: "What's your typical partnership structure?",
                  answer: "Partnership structures vary based on the project and client needs. We offer consulting, co-development, and equity partnership models depending on the situation."
                },
                {
                  question: "Do you work with international clients?",
                  answer: "Yes, we work with clients globally. While we're based in Berlin, we have experience working with teams across Europe, North America, and other regions."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="section-title text-gradient mb-6">
              Ready to Start Your Venture?
            </h2>
            <p className="section-subtitle mb-8">
              Let's discuss how we can help you build, validate, and scale your next digital product. Every great venture starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact-form" className="btn-primary">
                Send Message
              </a>
              <a href="/strategy" className="btn-secondary">
                Learn Our Process
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}