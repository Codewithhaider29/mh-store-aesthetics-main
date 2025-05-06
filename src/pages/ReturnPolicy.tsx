import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';

const ReturnPolicy = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  const numberedListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const numberedItemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <motion.main 
        className="flex-grow pt-28 pb-16 px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={itemVariants}>
            <SectionHeading 
              title="Return Policy" 
              subtitle="Last updated: May 2, 2025"
            />
          </motion.div>
          
          <motion.div 
            className="prose prose-lg mt-12"
            variants={containerVariants}
          >
            <motion.section variants={sectionVariants} className="mb-12">
              <h2>Return Period</h2>
              <motion.p variants={itemVariants}>
                MH Store offers a 30-day return policy for most items. To be eligible for a return, your item must be unused, in the same condition that you received it, and in the original packaging.
              </motion.p>
            </motion.section>
            
            <motion.section variants={sectionVariants} className="mb-12">
              <h2>Eligibility</h2>
              <motion.p variants={itemVariants}>
                The following items are not eligible for return:
              </motion.p>
              <motion.ul variants={listVariants}>
                <motion.li variants={listItemVariants}>Gift cards</motion.li>
                <motion.li variants={listItemVariants}>Downloadable software products</motion.li>
                <motion.li variants={listItemVariants}>Items marked as "Final Sale" or "Non-Returnable"</motion.li>
                <motion.li variants={listItemVariants}>Personal care items (for hygiene reasons)</motion.li>
                <motion.li variants={listItemVariants}>Custom or personalized products</motion.li>
              </motion.ul>
            </motion.section>
            
            <motion.section variants={sectionVariants} className="mb-12">
              <h2>Return Process</h2>
              <motion.p variants={itemVariants}>
                To initiate a return, please follow these steps:
              </motion.p>
              <motion.ol variants={numberedListVariants}>
                <motion.li variants={numberedItemVariants}>Log into your account and navigate to your order history</motion.li>
                <motion.li variants={numberedItemVariants}>Select the order containing the item(s) you wish to return</motion.li>
                <motion.li variants={numberedItemVariants}>Click on "Return Items" and follow the instructions</motion.li>
                <motion.li variants={numberedItemVariants}>Print the prepaid return shipping label (if applicable)</motion.li>
                <motion.li variants={numberedItemVariants}>Pack the item(s) securely in the original packaging if possible</motion.li>
                <motion.li variants={numberedItemVariants}>Attach the return shipping label to the package</motion.li>
                <motion.li variants={numberedItemVariants}>Drop off the package at the designated shipping carrier</motion.li>
              </motion.ol>
              <motion.p variants={itemVariants}>
                If you received a defective or incorrect item, please contact our customer service team immediately, and we will provide specific instructions for your situation.
              </motion.p>
            </motion.section>
            
            <motion.section variants={sectionVariants} className="mb-12">
              <h2>Refunds</h2>
              <motion.p variants={itemVariants}>
                Once we receive and inspect your return, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
              </motion.p>
              <motion.p variants={itemVariants}>
                If you are approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 5-10 business days. Please note that depending on your financial institution, it may take longer for the refund to be reflected in your account.
              </motion.p>
            </motion.section>
            
            <motion.section variants={sectionVariants} className="mb-12">
              <h2>Exchanges</h2>
              <motion.p variants={itemVariants}>
                If you need to exchange an item for a different size, color, or product, please return the original item following our return process and place a new order for the desired item. This ensures the fastest processing time.
              </motion.p>
            </motion.section>
            
            <motion.section variants={sectionVariants} className="mb-12">
              <h2>Return Shipping Costs</h2>
              <motion.p variants={itemVariants}>
                For standard returns, customers are responsible for return shipping costs. If you received a defective or incorrect item, MH Store will provide a prepaid return shipping label at no cost to you.
              </motion.p>
            </motion.section>
            
            <motion.section variants={sectionVariants} className="mb-12">
              <h2>Late or Missing Returns</h2>
              <motion.p variants={itemVariants}>
                If you attempt to return an item after the 30-day return period, we reserve the right to refuse the return or offer store credit instead of a refund. If you believe your returned item was lost in transit, please contact our customer service team with your tracking information.
              </motion.p>
            </motion.section>
            
            <motion.section variants={sectionVariants}>
              <h2>Contact Information</h2>
              <motion.p variants={itemVariants}>
                If you have any questions about our return policy, please contact our customer service team at <a href="mailto:returns@mhstore.com" className="text-mh-pink hover:underline">returns@mhstore.com</a> or call us at <span className="font-medium">(555) 123-4567</span>, Monday through Friday, 9:00 AM to 5:00 PM EST.
              </motion.p>
            </motion.section>
          </motion.div>
        </div>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default ReturnPolicy;