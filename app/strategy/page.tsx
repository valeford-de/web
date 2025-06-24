"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Strategy() {
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
            <h1 className="section-title text-gradient mb-6">Our Strategy</h1>
            <p className="section-subtitle mx-auto">
              We combine disciplined execution with strategic analysis to create
              ventures designed for long-term value and sustainable growth in
              the mobile-first economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Framework */}
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
              Strategic Framework
            </h2>
            <p className="section-subtitle mx-auto">
              Our proven methodology ensures consistent results across all
              ventures we build and scale.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                phase: "Identify",
                title: "Market Opportunity Analysis",
                description:
                  "We systematically analyze market trends, user behaviors, and technological shifts to identify high-potential opportunities in the mobile ecosystem.",
                keyActivities: [
                  "Market research and analysis",
                  "Competitive landscape assessment",
                  "Technology trend evaluation",
                  "User behavior studies",
                ],
                duration: "2-4 weeks",
              },
              {
                phase: "Validate",
                title: "Concept Testing & Validation",
                description:
                  "Before significant investment, we rigorously test concepts through rapid prototyping, user feedback, and market validation experiments.",
                keyActivities: [
                  "Rapid prototyping",
                  "User testing and feedback",
                  "Market validation experiments",
                  "Business model validation",
                ],
                duration: "4-8 weeks",
              },
              {
                phase: "Execute",
                title: "Product Development & Launch",
                description:
                  "Validated concepts are developed into full products with careful attention to user experience, technical excellence, and scalable architecture.",
                keyActivities: [
                  "Full product development",
                  "Quality assurance testing",
                  "Go-to-market strategy",
                  "Launch and optimization",
                ],
                duration: "3-6 months",
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-valeford-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-valeford-blue">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-valeford-blue mb-2">
                    {phase.phase}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {phase.title}
                  </h4>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {phase.description}
                </p>

                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3">
                    Key Activities:
                  </h5>
                  <ul className="space-y-2">
                    {phase.keyActivities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start">
                        <span className="text-valeford-blue mr-2">•</span>
                        <span className="text-gray-600 text-sm">
                          {activity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {phase.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
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
              Investment Criteria
            </h2>
            <p className="section-subtitle mx-auto">
              We apply rigorous criteria to ensure every venture has the
              potential for significant impact and sustainable growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What We Look For
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Large Addressable Market",
                    description:
                      "Opportunities in markets with significant size and growth potential",
                  },
                  {
                    title: "Mobile-First Opportunity",
                    description:
                      "Problems best solved through mobile applications and experiences",
                  },
                  {
                    title: "Clear Value Proposition",
                    description:
                      "Solutions that provide obvious and measurable value to users",
                  },
                  {
                    title: "Scalable Business Model",
                    description:
                      "Revenue models that can scale efficiently with user growth",
                  },
                  {
                    title: "Defensible Position",
                    description:
                      "Sustainable competitive advantages through technology or market position",
                  },
                ].map((criteria, index) => (
                  <div key={criteria.title} className="flex items-start">
                    <div className="w-6 h-6 bg-valeford-blue/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-valeford-blue text-sm font-bold">
                        ✓
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {criteria.title}
                      </h4>
                      <p className="text-gray-600">{criteria.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Investment Metrics
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Market Size</span>
                    <span className="font-semibold text-gray-900">
                      $1B+ TAM
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-valeford-blue h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Mobile Penetration</span>
                    <span className="font-semibold text-gray-900">
                      80%+ Mobile Usage
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-valeford-blue h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Growth Potential</span>
                    <span className="font-semibold text-gray-900">
                      20%+ CAGR
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-valeford-blue h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Validation Timeline</span>
                    <span className="font-semibold text-gray-900">
                      3-6 Months
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-valeford-blue h-2 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Risk Management */}
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
              Risk Management
            </h2>
            <p className="section-subtitle mx-auto">
              Our systematic approach to risk management ensures sustainable
              growth and protects stakeholder investments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Market Risk",
                description:
                  "Comprehensive market analysis and validation before significant investment",
                mitigation:
                  "Early validation, market testing, competitive analysis",
                icon: "📈",
              },
              {
                title: "Technical Risk",
                description:
                  "Proven technology stack and experienced development teams",
                mitigation:
                  "Best practices, code reviews, scalable architecture",
                icon: "⚙️",
              },
              {
                title: "Execution Risk",
                description:
                  "Disciplined project management and milestone tracking",
                mitigation: "Agile methodology, regular reviews, clear KPIs",
                icon: "🎯",
              },
              {
                title: "Financial Risk",
                description:
                  "Conservative financial planning and diversified portfolio",
                mitigation:
                  "Staged funding, financial controls, portfolio diversification",
                icon: "💰",
              },
            ].map((risk, index) => (
              <motion.div
                key={risk.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="text-4xl mb-4 text-center">{risk.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {risk.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {risk.description}
                </p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 text-sm">
                    Mitigation:
                  </h4>
                  <p className="text-gray-600 text-sm">{risk.mitigation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
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
              Success Metrics
            </h2>
            <p className="section-subtitle mx-auto">
              We measure success through clear, quantifiable metrics that align
              with long-term value creation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "User Metrics",
                metrics: [
                  {
                    name: "Monthly Active Users",
                    target: "100K+ within 12 months",
                  },
                  { name: "User Retention Rate", target: "70%+ at 30 days" },
                  { name: "App Store Rating", target: "4.5+ stars" },
                  { name: "Net Promoter Score", target: "50+ NPS" },
                ],
              },
              {
                category: "Business Metrics",
                metrics: [
                  { name: "Revenue Growth", target: "100%+ YoY" },
                  { name: "Customer Acquisition Cost", target: "<$50 CAC" },
                  { name: "Lifetime Value", target: "$500+ LTV" },
                  { name: "Gross Margin", target: "70%+ margin" },
                ],
              },
              {
                category: "Market Metrics",
                metrics: [
                  { name: "Market Share", target: "Top 3 in category" },
                  { name: "Brand Recognition", target: "25%+ awareness" },
                  { name: "Competitive Position", target: "Unique value prop" },
                  { name: "Strategic Partnerships", target: "3+ key partners" },
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-6 text-gray-900">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.metrics.map((metric, metricIndex) => (
                    <div
                      key={metric.name}
                      className="flex justify-between items-start"
                    >
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm">
                          {metric.name}
                        </div>
                        <div className="text-valeford-blue text-sm font-semibold">
                          {metric.target}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
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
              Ready to Build Together?
            </h2>
            <p className="section-subtitle mb-8">
              Our strategic approach has proven successful across multiple
              ventures. Let's discuss how we can apply this methodology to your
              next opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Discuss Your Project
              </a>
              <a href="/ventures" className="btn-secondary">
                View Our Ventures
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
