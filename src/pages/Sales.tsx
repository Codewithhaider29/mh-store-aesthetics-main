import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/components/ui/sonner';
import saleProducts from '@/data/sale-products.json';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  description: string;
  discount: string;
}

const Sales = () => {
  const { addItem } = useCart();

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.salePrice,
      image: product.image,
      quantity: 1
    });

    toast.success('Added to cart', {
      description: `${product.name} has been added to your cart`,
    });
  };

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

  const productCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
  };

  const imageVariants = {
    hover: { scale: 1.05 },
  };

  const discountTagVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
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
        <div className="container mx-auto">
          <SectionHeading
            title="Sales & Offers"
            subtitle="Grab these limited-time deals before they're gone"
          />

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {saleProducts.map((product: Product) => (
              <motion.div
                key={product.id}
                className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative"
                variants={productCardVariants}
                whileHover="hover"
              >
                <motion.div
                  className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-md font-medium z-10"
                  variants={discountTagVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {product.discount} OFF
                </motion.div>
                <Link to={`/product/${product.id}`}>
                  <div className="aspect-square overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      variants={imageVariants}
                      whileHover="hover"
                    />
                  </div>
                </Link>
                <div className="p-6 bg-white">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  </Link>
                  <p className="text-gray-600 mb-3 text-sm">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium text-mh-pink text-lg">${product.salePrice.toFixed(2)}</span>
                      <span className="text-gray-500 line-through text-sm ml-2">${product.originalPrice.toFixed(2)}</span>
                    </div>
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

export default Sales;