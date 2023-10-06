// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addBookToCart = (book) => {
    setCart([...cart, book]);
  };

  const removeBookFromCart = (bookId) => {
    setCart(cart.filter((item) => item.id !== bookId));
  };

  const getTotalPrice = () => {
    const total = cart.reduce((total, item) => total + item.price, 0);
    return total.toFixed(2); // Round to 2 decimal places and return as a string
  };

  return (
    <CartContext.Provider value={{ cart, addBookToCart, removeBookFromCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
