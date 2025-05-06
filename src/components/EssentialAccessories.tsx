import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import productsData from '@/data/products.json'; // Assuming your data is here
import SectionHeading from '@/components/SectionHeading';

const EssentialAccessories = () => {
  const { addItem } = useCart();
  const accessories = productsData.productsByCategory.earbuds.slice(0, 3); // Example: Show 3 accessories

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
    <section className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Essential Accessories" // Placeholder title
          subtitle="Complete your look with our must-have accessories." // Placeholder subtitle
          titleClassName="text-gray-900"
          subtitleClassName="text-gray-600"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {accessories.map((accessory) => (
            <div
              key={accessory.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={accessory.image}
                  alt={accessory.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">{accessory.name}</h3>
                <div className="mt-4">
                  <span className="text-gray-900 text-lg font-bold">
                    ${accessory.price.toFixed(2)}
                  </span>
                </div>
                <Button
                  onClick={() => handleAddToCart(accessory)}
                  className="w-full mt-6 bg-pink-200 hover:bg-pink-300 text-black transition-colors"
                >
                  <ShoppingCart className="mr-2" size={18} />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
  <Link to="/categories/accessories">
    <Button
      variant="outline"
      className="border-gray-900 bg-gray-900 text-pink-50 hover:bg-pink-50 hover:text-black px-8 py-3 text-base transition-all duration-300"
    >
      Browse All Accessories
    </Button>
  </Link>
</div>

      </div>
    </section>
  );
};

export default EssentialAccessories;