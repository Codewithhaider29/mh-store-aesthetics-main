
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/components/ui/sonner';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  discount?: number;
}

const ProductCard = ({ id, name, price, image, category, isNew, isSale, discount }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    
    addItem({
      id,
      name,
      price,
      image,
      quantity: 1,
      discount
    });

    toast.success('Added to cart', {
      description: `${name} has been added to your cart`,
    });
  };

  const actualPrice = isSale && discount ? price - (price * discount / 100) : price;

  return (
    <div className="product-card group">
      <div className="product-image-container relative overflow-hidden">
        <Link to={`/product/${id}`}>
          <img src={image} alt={name} className="product-image w-full h-64 object-cover" />
        </Link>
        <div className="absolute top-0 left-0 p-2">
          {isNew && (
            <span className="bg-mh-pink text-mh-black-dark text-xs font-bold px-2 py-1 rounded mr-1">
              NEW
            </span>
          )}
          {isSale && discount && (
            <span className="bg-mh-black text-white text-xs font-bold px-2 py-1 rounded">
              {discount}% OFF
            </span>
          )}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-opacity-20">
          <button 
            onClick={handleAddToCart}
            className="bg-white text-mh-black-dark hover:bg-mh-pink p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-mh-pink mb-1">{category}</p>
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-mh-black-dark hover:text-mh-pink transition-colors">{name}</h3>
        </Link>
        <div className="mt-2 flex justify-between items-center">
          <div className="flex items-center">
            {isSale && discount ? (
              <>
                <span className="text-sm text-gray-400 line-through mr-2">${price.toFixed(2)}</span>
                <span className="font-semibold">${actualPrice.toFixed(2)}</span>
              </>
            ) : (
              <span className="font-semibold">${price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
