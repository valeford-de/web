"use client";

import { motion } from "framer-motion";

export default function Imprint() {
  return (
    <div className="pt-20 sm:pt-24">
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-text text-gray-900 mb-12">
                Imprint
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Company Information</h2>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Company Name:</strong> Valeford UG (haftungsbeschränkt)</p>
                    <p><strong>Legal Form:</strong> Unternehmergesellschaft (haftungsbeschränkt)</p>
                    <p><strong>Country:</strong> Germany</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Email:</strong> hello@valeford.de</p>
                    <p><strong>Website:</strong> valeford.de</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsible for Content</h2>
                  <div className="space-y-2 text-gray-600">
                    <p>Valeford UG (haftungsbeschränkt)</p>
                    <p>Represented by the Managing Director(s)</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
                  <div className="space-y-4 text-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900">Liability for Content</h3>
                    <p>
                      The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness, or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this matter, please note that we are not under obligation to supervise merely the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900">Liability for Links</h3>
                    <p>
                      Our offer contains links to external third parties' websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for the contents of the linked websites.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900">Copyright</h3>
                    <p>
                      The content and works on these pages created by the site operators are subject to German copyright law. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h2>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      The use of our website is generally possible without providing personal data. As far as personal data (e.g. name, address or email addresses) are collected on our pages, this always happens on a voluntary basis, as far as possible. This data will not be passed on to third parties without your express consent.
                    </p>
                    <p>
                      We point out that data transmission over the Internet (e.g. communication by email) can have security gaps. Complete protection of data against access by third parties is not possible.
                    </p>
                  </div>
                </div>

                <div className="text-sm text-gray-500 pt-8 border-t border-gray-200">
                  <p>This imprint is valid as of {new Date().toLocaleDateString('en-GB')} and complies with German law requirements.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}