import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import productsData from '@/data/products.json';
import SectionHeading from '@/components/SectionHeading';

const PremiumBags = () => {
  const { addItem } = useCart();
  const bags = productsData.productsByCategory.bags.slice(0, 3); // Show 3 bags

  const handleAddToCart = (product: { id: string; name: string; price: number; image: string }) => {
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
    <section className="px-4 py-16 bg-pink-50"> {/* Light pink background */}
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Luxury Handbags"
          subtitle="Exquisite craftsmanship meets timeless elegance in our premium collection"
          titleClassName="text-gray-900"
          subtitleClassName="text-gray-600"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {bags.map((bag) => (
            <div
              key={bag.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={bag.image}
                  alt={bag.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {bag.isNew && (
                  <span className="absolute top-4 right-4 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    NEW ARRIVAL
                  </span>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-gray-900">{bag.name}</h3>
                  {'material' in bag && bag.material ? (
                    <span className="text-sm text-gray-500">{String(bag.material)}</span>
                  ) : (
                    <span className="text-sm text-gray-500">Material not specified</span>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    {bag.isSale ? (
                      <>
                        <span className="text-rose-600 text-lg font-bold mr-2">
                          ${(bag.price * 0.9).toFixed(2)}
                        </span>
                        <span className="text-gray-400 line-through text-sm">
                          ${bag.price.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="text-gray-900 text-lg font-bold">
                        ${bag.price.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    {['#000000', '#c0a796', '#964b00'].map((color) => (
                      <span
                        key={color}
                        className="w-5 h-5 rounded-full border border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => handleAddToCart(bag)}
                  className="w-full mt-6 bg-pink-200 hover:bg-pink-300 text-black transition-colors" // Light pink button with black text
                >
                  <ShoppingCart className="mr-2" size={18} />
                  Add to Bag
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
  <Link to="/categories/bags">
    <Button
      variant="outline"
      className="border-gray-900 bg-gray-900 text-pink-50 hover:bg-pink-50 hover:text-black px-8 py-3 text-base transition-all duration-300"
    >
      Browse All Handbags
    </Button>
  </Link>
</div>

      </div>
    </section>
  );
};

export default PremiumBags;