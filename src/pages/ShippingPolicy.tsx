import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';

const ShippingPolicy = () => {
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
              title="Shipping Policy" 
              subtitle="Last updated: May 2, 2025"
            />
          </motion.div>
          
          <motion.div 
            className="prose prose-lg mt-12"
            variants={containerVariants}
          >
            <motion.section variants={sectionVariants} className="mb-12">
              <h2>Shipping Methods</h2>
              <p>
                MH Store offers the following shipping options for all orders:
              </p>
              <motion.ul variants={listVariants}>
                <motion.li variants={listItemVariants}><strong>Standard Shipping:</strong> 5-7 business days (Free for orders over $50)</motion.li>
                <motion.li variants={listItemVariants}><strong>Express Shipping:</strong> 2-3 business days ($9.99)</motion.li>
                <motion.li variants={listItemVariants}><strong>Next Day Delivery:</strong> Next business day ($19.99)</motion.li>
              </motion.ul>
              <motion.p variants={itemVariants}>
                Business days are Monday through Friday, excluding holidays. Orders placed after 2:00 PM EST will be processed the following business day.
              </motion.p>
            </motion.section>
            
            <motion.section variants={sectionVariants} className="mb-12">
              <h2>International Shipping</h2>
              <p>
                We currently ship to the following countries:
              </p>
              <motion.ul variants={listVariants}>
                <motion.li variants={listItemVariants}>United States (including Alaska and Hawaii)</motion.li>
                <motion.li variants={listItemVariants}>Canada</motion.li>
                <motion.li variants={listItemVariants}>United Kingdom</motion.li>
                <motion.li variants={listItemVariants}>Australia</motion.li>
                <motion.li variants={listItemVariants}>Germany</motion.li>
                <motion.li variants={listItemVariants}>France</motion.li>
                <motion.li variants={listItemVariants}>Japan</motion.li>
              </motion.ul>
              <motion.p variants={itemVariants}>
                International shipping rates and delivery times vary by location. Customs duties and taxes may apply for international orders and are the responsibility of the customer.
              </motion.p>
            </motion.section>
            
            <motion.section variants={sectionVariants} className="mb-12">
              <h2>Order Tracking</h2>
              <p>
                Once your order has been shipped, you will receive a confirmation email with a tracking number. You can track your order by:
              </p>
              <motion.ul variants={listVariants}>
                <motion.li variants={listItemVariants}>Logging into your account and viewing your order history</motion.li>
                <motion.li variants={listItemVariants}>Clicking the tracking link in your shipping confirmation email</motion.li>
                <motion.li variants={listItemVariants}>Contacting our customer service team</motion.li>
              </motion.ul>
            </motion.section>
            
            <motion.section variants={sectionVariants} className="mb-12">
              <h2>Shipping Restrictions</h2>
              <p>
                Certain products may have shipping restrictions due to regulations or other limitations. These restrictions will be noted on the product page.
              </p>
            </motion.section>
            
            <motion.section variants={sectionVariants} className="mb-12">
              <h2>Damaged or Lost Packages</h2>
              <p>
                If your package arrives damaged or is lost during transit, please contact our customer service team within 7 days of the expected delivery date. We will work with you to resolve the issue by either replacing the item or providing a refund.
              </p>
            </motion.section>
            
            <motion.section variants={sectionVariants} className="mb-12">
              <h2>Address Changes</h2>
              <p>
                If you need to change your shipping address after placing an order, please contact us immediately. We can only accommodate address changes if the order has not yet been processed for shipping.
              </p>
            </motion.section>
            
            <motion.section variants={sectionVariants}>
              <h2>Contact Information</h2>
              <p>
                If you have any questions about our shipping policy, please contact our customer service team at <a href="mailto:shipping@mhstore.com" className="text-mh-pink hover:underline">shipping@mhstore.com</a> or call us at <span className="font-medium">(555) 123-4567</span>, Monday through Friday, 9:00 AM to 5:00 PM EST.
              </p>
            </motion.section>
          </motion.div>
        </div>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default ShippingPolicy;