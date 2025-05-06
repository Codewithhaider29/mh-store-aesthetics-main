
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import { toast } from '@/components/ui/sonner';

const Cart = () => {
  const { state, updateQuantity, removeItem } = useCart();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id: string, name: string) => {
    removeItem(id);
    toast.success('Item removed', {
      description: `${name} has been removed from your cart`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-16 px-4">
        <div className="container mx-auto">
          <SectionHeading title="Your Shopping Cart" subtitle="Review your items before checkout" />

          {state.items.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl mb-4">Your cart is empty</h3>
              <p className="text-gray-500 mb-8">Looks like you haven't added any products to your cart yet.</p>
              <Link to="/categories">
                <Button className="bg-mh-pink hover:bg-mh-pink/80">Start Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="mt-12">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {state.items.map(item => {
                        const itemPrice = item.discount 
                          ? (item.price - (item.price * item.discount / 100))
                          : item.price;
                          
                        return (
                          <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-16 w-16 flex-shrink-0">
                                  <img className="h-full w-full object-cover" src={item.image} alt={item.name} />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {item.discount ? (
                                <div>
                                  <span className="text-sm line-through text-gray-400">${item.price.toFixed(2)}</span>
                                  <span className="ml-2">${itemPrice.toFixed(2)}</span>
                                </div>
                              ) : (
                                <span>${itemPrice.toFixed(2)}</span>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center border rounded-lg w-min">
                                <button 
                                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                >
                                  <Minus size={16} />
                                </button>
                                <span className="px-4 py-1">{item.quantity}</span>
                                <button 
                                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                >
                                  <Plus size={16} />
                                </button>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="font-medium">${(itemPrice * item.quantity).toFixed(2)}</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <button 
                                className="text-red-500 hover:text-red-700"
                                onClick={() => handleRemoveItem(item.id, item.name)}
                              >
                                <Trash2 size={18} />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="bg-gray-50 px-6 py-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-medium">Total Items: {state.totalItems}</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold">
                        Total: ${state.totalPrice.toFixed(2)}
                      </p>
                      <Button className="mt-4 bg-mh-pink hover:bg-mh-pink/80">
                        Proceed to Checkout
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
