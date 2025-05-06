import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion'; // Import Framer Motion

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          className="container mx-auto"
        >
          <SectionHeading 
            title="Contact Us" 
            subtitle="We'd love to hear from you"
          />
          
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            {/* Left Side - Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8">
                Have questions about our products or need assistance with your order? 
                Fill out the form or contact us through our information below.
              </p>
              
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-start">
                  <div className="bg-mh-pink-light p-3 rounded-full mr-4">
                    <MapPin className="text-mh-black-dark" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Location</h4>
                    <p className="text-gray-600">123 Fashion Street, Design District, New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-mh-pink-light p-3 rounded-full mr-4">
                    <Mail className="text-mh-black-dark" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Us</h4>
                    <p className="text-gray-600">support@mhstore.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-mh-pink-light p-3 rounded-full mr-4">
                    <Phone className="text-mh-black-dark" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right Side - Contact Form */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-8"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mh-pink focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mh-pink focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mh-pink focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mh-pink focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mh-pink focus:border-transparent"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-mh-black text-white font-medium py-3 px-4 rounded-md hover:bg-mh-black-light transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
