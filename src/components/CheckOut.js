import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
function CheckOut() {
  const { cart, clearCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const total = cart.reduce((total, item) => total + item.price, 0);
    setTotalPrice(total);
  }, [cart]);
  const handleCheckout = () => {
    clearCart();
  };
  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - ₹{item.price}
          </li>
        ))}
      </ul>
      <p>Total Price: ₹{totalPrice}</p>
      <button onClick={handleCheckout}>Complete Purchase</button>
      <Link to="/book-catalog">Back to Catalog</Link>
    </div>
  );
}
export default CheckOut;