import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import productsData from '../data/products.json';

const EarbudsPage = () => {
  interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    rating: number;
    image: string;
    category: string;
  }

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const earbuds = productsData.productsByCategory.earbuds.slice(0, 3).map(earbud => ({
      id: Number(earbud.id),
      name: earbud.name,
      description: 'description' in earbud ? (earbud.description as string) : "No description available",
      price: earbud.price,
      rating: 'rating' in earbud ? Number(earbud.rating) : 0,
      image: earbud.image,
      category: earbud.category,
    }));
    setProducts(earbuds);
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <SectionHeading
        title="Wireless Earbuds"
        subtitle="Elegant timepieces that combine style and functionality. Discover the perfect balance of performance and aesthetics."
        titleClassName="text-mh-dark"
        subtitleClassName="text-mh-gray"
      />

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className="border rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-mh-dark">{product.name}</h2>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                <p className="text-lg font-bold mt-2 text-mh-pink">${product.price}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500">{'⭐'.repeat(Math.round(product.rating))}</span>
                  <span className="text-gray-500 ml-2 text-sm">({product.rating}/5)</span>
                </div>
                <Link
                  to={`/product/${product.id}`}
                  className="block mt-4 text-center bg-pink-200 hover:bg-pink-300 text-black py-2 px-4 rounded-lg transition-colors" // Light pink button with black text
                >
                  View Product
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No earbuds available at the moment.</p>
        )}
      </div>

      {/* View More Button */}
      <div className="text-center mt-12">
        <Link to="/categories/earbuds">
          <button className="px-8 py-3 bg-gray-900 text-pink-50 rounded-lg font-medium text-lg transition-all duration-300 hover:bg-pink-50 hover:text-black hover:shadow-lg">
            View More Earbuds
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EarbudsPage;