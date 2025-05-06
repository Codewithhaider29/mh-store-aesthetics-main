import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import categories from '../data/categories.json';

const CategorySection = () => {
  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto">
        <SectionHeading title="Shop by Category" subtitle="Browse our collections" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {categories.map(category => (
            <Link 
              to={`/categories/${category.id}`}
              key={category.id} 
              className="group relative rounded-full overflow-hidden aspect-square w-full max-w-xs mx-auto"
            >
              <div className="relative w-full h-full">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;