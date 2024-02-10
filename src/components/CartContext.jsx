import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const productToAdd = action.payload.product;
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === productToAdd.id && item.product.selectedSize === productToAdd.selectedSize
      );
      if (existingItemIndex !== -1) {
        const updatedItem = {
          ...state.items[existingItemIndex],
          product: {
            ...state.items[existingItemIndex].product,
            quantity: state.items[existingItemIndex].product.quantity + productToAdd.quantity,
          },
        };
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
        return { ...state, items: updatedItems };
      } else {
        return { ...state, items: [...state.items, action.payload] };
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(
          (item) => item.product.id !== action.payload.productId || item.product.selectedSize !== action.payload.selectedSize
        ),
      };

    case 'UPDATE_CART':
      return { ...state, items: action.payload };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  return <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

export { CartContext, CartProvider };
