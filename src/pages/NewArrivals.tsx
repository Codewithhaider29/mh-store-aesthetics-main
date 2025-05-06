import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/components/ui/sonner';
import newArrivals from '@/data/new-arrivals.json';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  description: string;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.02 },
};

const imageVariants = {
  hover: { scale: 1.05 },
};

const NewArrivals = () => {
  const { addItem } = useCart();

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });

    toast.success('Added to cart', {
      description: `${product.name} has been added to your cart`,
    });
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
        <div className="container mx-auto">
          <SectionHeading
            title="New Arrivals"
            subtitle="Discover our latest products and collections"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
            variants={containerVariants}
          >
            {newArrivals.map((product: Product) => (
              <motion.div
                key={product.id}
                className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div
                  className="aspect-square overflow-hidden"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>

                <div className="p-6 bg-white">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  </Link>
                  <p className="text-gray-600 mb-3 text-sm">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-mh-black text-lg">${product.price.toFixed(2)}</span>
                    <Button
                      onClick={() => handleAddToCart(product)}
                      size="sm"
                      className="bg-mh-pink hover:bg-mh-pink/90 text-white"
                    >
                      <ShoppingCart size={16} className="mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default NewArrivals;
