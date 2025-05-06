import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
  };

  const comingSoonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut', delay: 0.4 } },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen py-10 px-4 bg-gray-50 text-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-5xl font-extrabold text-gray-800"
        variants={headingVariants}
      >
        Our Blog
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-600 max-w-2xl"
        variants={textVariants}
      >
        Stay tuned for expert tips, tech trends, and updates from <strong>MH Store</strong>.
        We’re working hard to bring you valuable content that helps you stay informed and inspired.
      </motion.p>
      <motion.div
        className="mt-10 px-6 py-4 bg-white rounded-xl shadow-lg"
        variants={comingSoonVariants}
      >
        <p className="text-gray-500 text-md">🚧 Blog section is under development. Coming soon...</p>
      </motion.div>
    </motion.div>
  );
};

export default Blog;