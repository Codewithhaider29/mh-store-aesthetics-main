
import React, { createContext, useContext, useReducer } from 'react';

// Define cart item type
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  discount?: number;
}

// Define cart state
interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

// Define cart actions
type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

// Initial cart state
const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

// Cart reducer
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex > -1) {
        // Item exists, update quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;

        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + action.payload.quantity,
          totalPrice: state.totalPrice + (action.payload.discount 
            ? (action.payload.price - (action.payload.price * action.payload.discount / 100)) * action.payload.quantity
            : action.payload.price * action.payload.quantity),
        };
      }

      // Add new item
      return {
        ...state,
        items: [...state.items, action.payload],
        totalItems: state.totalItems + action.payload.quantity,
        totalPrice: state.totalPrice + (action.payload.discount 
          ? (action.payload.price - (action.payload.price * action.payload.discount / 100)) * action.payload.quantity
          : action.payload.price * action.payload.quantity),
      };
    }

    case 'REMOVE_ITEM': {
      const itemToRemove = state.items.find((item) => item.id === action.payload);
      
      if (!itemToRemove) return state;
      
      const itemPrice = itemToRemove.discount 
        ? (itemToRemove.price - (itemToRemove.price * itemToRemove.discount / 100)) * itemToRemove.quantity
        : itemToRemove.price * itemToRemove.quantity;

      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        totalItems: state.totalItems - itemToRemove.quantity,
        totalPrice: state.totalPrice - itemPrice,
      };
    }

    case 'UPDATE_QUANTITY': {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex === -1) return state;

      const item = state.items[itemIndex];
      const quantityDifference = action.payload.quantity - item.quantity;
      
      const priceDifference = item.discount 
        ? (item.price - (item.price * item.discount / 100)) * quantityDifference
        : item.price * quantityDifference;

      // Update item quantity
      const updatedItems = [...state.items];
      updatedItems[itemIndex] = {
        ...item,
        quantity: action.payload.quantity,
      };

      return {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems + quantityDifference,
        totalPrice: state.totalPrice + priceDifference,
      };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};

// Create context
interface CartContextProps {
  state: CartState;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

// Create provider
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
