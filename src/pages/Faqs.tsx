import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import faqCategories from '../data/faqCategories.json';
import faqData from '../data/faqData.json';

type Category = {
  id: string;
  name: string;
};

type FAQ = {
  question: string;
  answer: string;
};

const Faqs = () => {
  const [activeCategory, setActiveCategory] = useState('orders');
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleFaq = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [`${activeCategory}-${index}`]: !prev[`${activeCategory}-${index}`]
    }));
  };

  const categoryList = faqCategories as Category[];
  const currentFaqs = (faqData as Record<string, FAQ[]>)[activeCategory];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  const categoryListVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    hover: { scale: 1.03, boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', transition: { duration: 0.2 } },
  };

  const faqItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const faqAnswerVariants = {
    open: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeOut' } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  const contactUsVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    hover: { y: -2, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', transition: { duration: 0.2 } },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <motion.main
        className="flex-grow pt-28 pb-16 px-4 mt-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our products and services"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
            <div className="lg:col-span-1">
              <motion.div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-32">
                <h3 className="bg-mh-black text-white p-4 font-bold">Categories</h3>
                <ul>
                  {categoryList.map(category => (
                    <motion.li
                      key={category.id}
                      variants={categoryListVariants}
                      whileHover="hover"
                      style={{ cursor: 'pointer' }}
                    >
                      <button
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full text-left p-4 hover:bg-gray-100 transition-colors ${activeCategory === category.id ? 'bg-mh-pink-light text-mh-black-dark font-medium' : ''}`}
                      >
                        {category.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-6">
                  {categoryList.find(c => c.id === activeCategory)?.name}
                </h3>

                <div className="space-y-4">
                  <AnimatePresence>
                    {currentFaqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        className="border border-gray-200 rounded-md overflow-hidden"
                        variants={faqItemVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, height: 0, transition: { duration: 0.2, ease: 'easeIn' } }}
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100"
                        >
                          <span className="font-medium">{faq.question}</span>
                          {expandedItems[`${activeCategory}-${index}`] ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </button>

                        <motion.div
                          className="p-4 bg-white"
                          variants={faqAnswerVariants}
                          initial="closed"
                          animate={expandedItems[`${activeCategory}-${index}`] ? 'open' : 'closed'}
                        >
                          <p className="text-gray-600">{faq.answer}</p>
                        </motion.div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              <motion.div
                className="mt-8 bg-mh-pink-light p-6 rounded-lg text-center"
                variants={contactUsVariants}
                whileHover="hover"
              >
                <h4 className="text-lg font-bold mb-2">Still have questions?</h4>
                <p className="mb-4">Our customer service team is here to help you with any questions or concerns.</p>
                <motion.a
                  href="/contact"
                  className="inline-block bg-mh-black text-white px-6 py-2 rounded hover:bg-mh-black-light transition-colors"
                >
                  Contact Us
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Faqs;