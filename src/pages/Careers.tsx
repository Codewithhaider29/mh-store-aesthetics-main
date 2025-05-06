import React from 'react';
import { motion } from 'framer-motion';

const Careers = () => {
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

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-50 text-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-5xl font-extrabold text-gray-800 mb-4"
        variants={headingVariants}
      >
        Careers at MH Store
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 max-w-xl"
        variants={textVariants}
      >
        🚧 We're building something exciting. Our careers page is coming soon. Stay tuned!
      </motion.p>
    </motion.div>
  );
};

export default Careers;