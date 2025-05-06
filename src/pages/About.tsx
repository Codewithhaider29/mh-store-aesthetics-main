import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  const valueVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const iconVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
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
            title="About MH Store"
            subtitle="Our story and mission"
          />

          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <motion.div
              className="rounded-lg overflow-hidden"
              variants={imageVariants}
            >
              <img
                src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="MH Store Team"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div variants={textVariants}>
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="text-gray-600 mb-6">
                Founded in 2020, MH Store began with a simple mission: to provide high-quality, stylish products that enhance everyday experiences. What started as a small passion project has grown into a beloved brand recognized for its premium quality and elegant designs.
              </p>
              <p className="text-gray-600 mb-6">
                Our founder, Michael Hayes, noticed a gap in the market for affordable yet sophisticated accessories that didn't compromise on quality. Drawing from his background in design and technology, he created MH Store to bridge this gap, offering products that seamlessly blend function and fashion.
              </p>
              <p className="text-gray-600">
                Today, MH Store continues to expand its collection, always staying true to our core values of quality, elegance, and customer satisfaction.
              </p>
            </motion.div>
          </motion.div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Our Values</h3>
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white p-8 rounded-lg shadow-md text-center"
                variants={valueVariants}
                whileHover="hover"
              >
                <motion.div className="h-16 w-16 bg-mh-pink-light rounded-full flex items-center justify-center mx-auto mb-4" variants={iconVariants} whileHover="hover">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mh-black-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </motion.div>
                <h4 className="text-xl font-bold mb-2">Quality</h4>
                <p className="text-gray-600">
                  We never compromise on quality. Every product undergoes rigorous testing to ensure it meets our high standards.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-lg shadow-md text-center"
                variants={valueVariants}
                whileHover="hover"
              >
                <motion.div className="h-16 w-16 bg-mh-pink-light rounded-full flex items-center justify-center mx-auto mb-4" variants={iconVariants} whileHover="hover">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mh-black-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </motion.div>
                <h4 className="text-xl font-bold mb-2">Design</h4>
                <p className="text-gray-600">
                  We believe great design enhances life. Our products are crafted with attention to aesthetics and functionality.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-lg shadow-md text-center"
                variants={valueVariants}
                whileHover="hover"
              >
                <motion.div className="h-16 w-16 bg-mh-pink-light rounded-full flex items-center justify-center mx-auto mb-4" variants={iconVariants} whileHover="hover">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mh-black-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </motion.div>
                <h4 className="text-xl font-bold mb-2">Customer Satisfaction</h4>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. We strive to exceed expectations with every interaction.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default About;