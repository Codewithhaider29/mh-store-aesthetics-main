import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import productsData from '@/data/products.json';
import SectionHeading from '@/components/SectionHeading';

const PremiumWatch = () => {
  const { addItem } = useCart();
  const watches = productsData.productsByCategory.watches.slice(0, 2); // Show only 2

  const handleAddToCart = (product: { id: string; name: string; price: number; image: string; quantity?: number }) => {
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
    <section className="px-4 py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title={productsData.categoryInfo.watches.title}
          subtitle={productsData.categoryInfo.watches.description}
          titleClassName="text-mh-black-dark"
          subtitleClassName="text-mh-gray"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {watches.map((watch) => (
            <div
              key={watch.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {watch.isNew && (
                  <span className="absolute top-4 right-4 bg-mh-pink text-white text-xs font-bold px-3 py-1 rounded-full">
                    NEW
                  </span>
                )}
                {watch.isSale && (
                  <span className="absolute top-4 left-4 bg-mh-black text-white text-xs font-bold px-3 py-1 rounded-full">
                    {watch.discount}% OFF
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-mh-black-dark mb-2">{watch.name}</h3>
                <div className="flex items-center mb-4">
                  {watch.isSale ? (
                    <>
                      <span className="text-mh-pink text-lg font-bold mr-2">
                        ${(watch.price - (watch.price * watch.discount) / 100).toFixed(2)}
                      </span>
                      <span className="text-gray-400 line-through text-sm">
                        ${watch.price.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-mh-black-dark text-lg font-bold">
                      ${watch.price.toFixed(2)}
                    </span>
                  )}
                </div>
                <Button
                  onClick={() => handleAddToCart(watch)}
                  className="w-full bg-pink-200 hover:bg-pink-300 text-black" // Light pink background and black text
                >
                  <ShoppingCart className="mr-2" size={18} />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <Link to="/categories/watches">
            <Button
              className="bg-gray-900 text-pink-50 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-pink-50 hover:text-black hover:shadow-lg" // Black background and light pink text on hover
            >
              View More Watches
            </Button>

          </Link>
        </div>
      </div>
    </section>
  );
};

export default PremiumWatch;