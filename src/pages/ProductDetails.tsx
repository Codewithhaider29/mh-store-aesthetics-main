import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/components/ui/sonner';
import { ShoppingCart, Heart, Share2, Star } from 'lucide-react';
import productsData from '@/data/2products.json';
import reviewsData from '@/data/2reviews.json';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  discount?: number;
  description: string;
  features: string[];
  availableColors: string[];
  stock: number;
}

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  image: string;
}

const ProductDetails = () => {
  const { productId } = useParams();
  const { addItem } = useCart();
  
  // Find the product from our sample data
  const product = productId ? productsData.products[productId as keyof typeof productsData.products] : null;
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <p className="mt-4">The product you're looking for doesn't exist or has been removed.</p>
        </div>
      </Layout>
    );
  }
  
  const { id, name, price, image, category, description, features, availableColors, stock } = product;
  const { discount, isSale, isNew } = product;
  
  const actualPrice = isSale && discount ? price - (price * discount / 100) : price;
  
  // Get reviews for this product
  const reviews = productId ? reviewsData.productReviews[productId as keyof typeof reviewsData.productReviews] || [] : [];
  
  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      image,
      quantity: 1,
      discount: discount || 0
    });
    
    toast.success('Added to cart', {
      description: `${name} has been added to your cart`,
    });
  };
  
  return (
    <Layout>
      <div className="container mx-auto py-16 px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="product-images">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={image} 
                alt={name} 
                className="w-full h-[500px] object-cover object-center"
              />
            </div>
          </div>
          
          {/* Product Details */}
          <div className="product-info">
            <div className="mb-2">
              <span className="text-mh-pink text-sm">{category}</span>
              {isSale && discount && (
                <span className="bg-mh-black text-white text-xs font-bold px-2 py-1 rounded ml-2">
                  {discount}% OFF
                </span>
              )}
              {isNew && (
                <span className="bg-mh-pink text-mh-black-dark text-xs font-bold px-2 py-1 rounded ml-2">
                  NEW
                </span>
              )}
            </div>
            
            <h1 className="text-3xl font-bold text-mh-black-dark mb-4">{name}</h1>
            
            <div className="price-block mb-6">
              {isSale && discount ? (
                <div className="flex items-center">
                  <span className="text-2xl font-bold mr-3">${actualPrice.toFixed(2)}</span>
                  <span className="text-lg text-gray-400 line-through">${price.toFixed(2)}</span>
                </div>
              ) : (
                <span className="text-2xl font-bold">${price.toFixed(2)}</span>
              )}
            </div>
            
            <div className="mb-6">
              <p className="text-gray-600">{description}</p>
            </div>
            
            {availableColors && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Available Colors:</h3>
                <div className="flex space-x-2">
                  {availableColors.map(color => (
                    <button 
                      key={color}
                      className="border border-gray-300 rounded-full px-4 py-1 text-sm hover:border-mh-pink transition-colors"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-2">Availability:</h3>
              <p className={`${stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {stock > 0 ? `In Stock (${stock} available)` : 'Out of Stock'}
              </p>
            </div>
            
            <div className="flex space-x-4 mb-8">
              <Button 
                onClick={handleAddToCart} 
                className="bg-mh-pink hover:bg-mh-pink/90 text-white px-8"
                disabled={stock <= 0}
              >
                <ShoppingCart className="mr-2" size={18} />
                Add to Cart
              </Button>
              
              <Button variant="outline" className="border-mh-pink text-mh-pink hover:bg-mh-pink/10">
                <Heart size={18} />
              </Button>
              
              <Button variant="outline" className="border-mh-pink text-mh-pink hover:bg-mh-pink/10">
                <Share2 size={18} />
              </Button>
            </div>
            
            {features && features.length > 0 && (
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium mb-4">Key Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {/* Product Reviews Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Customer Reviews</h2>
          
          {reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review: Review) => (
                <div key={review.id} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-mh-pink"
                    />
                    <div>
                      <h4 className="font-bold">{review.name}</h4>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-700">{review.text}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No reviews available for this product yet.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;