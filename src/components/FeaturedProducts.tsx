import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import SectionHeading from './SectionHeading';
import featuredProducts from '../data/featuredProducts.json';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturedProducts = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <SectionHeading title="Featured Products" subtitle="Our most popular items" />

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {featuredProducts.map(product => (
            <motion.div 
              key={product.id} 
              variants={itemVariants}
              whileInView={{ opacity: 1, y: 0 }} // trigger when in view
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }} // triggers only once when in view
            >
              <ProductCard 
                id={product.id} 
                name={product.name} 
                price={product.price} 
                image={product.image} 
                category={product.category}
                isNew={product.isNew}
                isSale={product.isSale}
                discount={product.discount}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
