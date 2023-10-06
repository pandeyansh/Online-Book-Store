// ShoppingCart.js
import React from 'react';
import { useCart } from './CartContext';

function ShoppingCart() {
  const { cart, getTotalPrice, removeBookFromCart } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((book) => (
              <div key={book.id} className='c2'>
                <img src={book.imageUrl} alt={book.title} height={300} width={200} className="cart-img" />
                <h4>{book.title}</h4>
                <h5>Price: ${book.price}</h5>
                <button onClick={() => removeBookFromCart(book.id)}>Remove</button>
              </div>
            ))}
            <p>Total Price: ₹{getTotalPrice()}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default ShoppingCart;