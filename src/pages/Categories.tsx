import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import { Link } from 'react-router-dom';
import categories from '../data/categoryData.json'; // ⬅️ Import JSON
import { motion } from 'framer-motion'; // Import Framer Motion

interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-16 px-4 mt-16">
        <div className="container mx-auto">
          <SectionHeading 
            title="Browse Categories" 
            subtitle="Explore our collections of premium products"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {(categories as Category[]).map(category => (
              <motion.div
                key={category.id}
                className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}  // Initial state: invisible and slightly below
                animate={{ opacity: 1, y: 0 }}   // Animate to full opacity and original position
                transition={{ duration: 0.5 }}   // Animation duration
              >
                <Link to={`/categories/${category.id}`} className="block">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <span className="inline-block text-mh-pink font-medium group-hover:translate-x-2 transition-transform">
                      View Products →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
