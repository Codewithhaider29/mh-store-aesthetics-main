import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';

const PrivacyPolicy = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
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
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={itemVariants}>
            <SectionHeading 
              title="Privacy Policy" 
              subtitle="Last updated: May 2, 2025"
            />
          </motion.div>
          
          <motion.div 
            className="prose prose-lg mt-12"
            variants={containerVariants}
          >
            <motion.section variants={sectionVariants} className="mb-12">
              <h2>Introduction</h2>
              <p>
                MH Store ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </p>
            </motion.section>
            
            <motion.section variants={sectionVariants} className="mb-12">
              <h2>Information We Collect</h2>
              <p>
                We collect several types of information from and about users of our website, including:
              </p>
              <motion.ul variants={containerVariants}>
                <motion.li variants={itemVariants}>Personal information such as name, postal address, email address, telephone number, and payment information.</motion.li>
                <motion.li variants={itemVariants}>Information about your internet connection, the equipment you use to access our website, and usage details.</motion.li>
                <motion.li variants={itemVariants}>Information collected through cookies, web beacons, and other tracking technologies.</motion.li>
              </motion.ul>
            </motion.section>
            
            <motion.section variants={sectionVariants} className="mb-12">
              <h2>How We Use Your Information</h2>
              <p>
                We use information that we collect about you or that you provide to us:
              </p>
              <motion.ul variants={containerVariants}>
                <motion.li variants={itemVariants}>To present our website and its contents to you.</motion.li>
                <motion.li variants={itemVariants}>To provide you with information, products, or services that you request from us.</motion.li>
                <motion.li variants={itemVariants}>To fulfill any other purpose for which you provide it.</motion.li>
                <motion.li variants={itemVariants}>To carry out our obligations and enforce our rights.</motion.li>
                <motion.li variants={itemVariants}>To notify you about changes to our website or any products or services we offer.</motion.li>
                <motion.li variants={itemVariants}>For any other purpose with your consent.</motion.li>
              </motion.ul>
            </motion.section>
            
            <motion.section variants={sectionVariants} className="mb-12">
              <h2>Disclosure of Your Information</h2>
              <p>
                We may disclose personal information that we collect or you provide as described in this privacy policy:
              </p>
              <motion.ul variants={containerVariants}>
                <motion.li variants={itemVariants}>To our subsidiaries and affiliates.</motion.li>
                <motion.li variants={itemVariants}>To contractors, service providers, and other third parties we use to support our business.</motion.li>
                <motion.li variants={itemVariants}>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets.</motion.li>
                <motion.li variants={itemVariants}>To fulfill the purpose for which you provide it.</motion.li>
                <motion.li variants={itemVariants}>For any other purpose disclosed by us when you provide the information.</motion.li>
                <motion.li variants={itemVariants}>With your consent.</motion.li>
              </motion.ul>
            </motion.section>
            
            <motion.section variants={sectionVariants} className="mb-12">
              <h2>Data Security</h2>
              <p>
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
              </p>
            </motion.section>
            
            <motion.section variants={sectionVariants} className="mb-12">
              <h2>Changes to Our Privacy Policy</h2>
              <p>
                We may update our privacy policy from time to time. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the website home page.
              </p>
            </motion.section>
            
            <motion.section variants={sectionVariants}>
              <h2>Contact Information</h2>
              <p>
                To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:privacy@mhstore.com" className="text-mh-pink hover:underline">privacy@mhstore.com</a>
              </p>
            </motion.section>
          </motion.div>
        </div>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;