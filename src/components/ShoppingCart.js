import React from 'react';
import './ShoppingCart.css';
import { useCart } from './CartContext';
function ShoppingCart() {
  const { cart, getTotalPrice, removeBookFromCart } = useCart();
  const handleBuyNow = () => {
    console.log('Buy Now clicked');
  };
  return (
    <div>
      <div className='heading'>
        <h1>Shopping Cart</h1>
      </div>
      <div className='shopping-cart'>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((book) => (
            <div key={book.id} className='cart-item'>
              <div className='cart-item-left'>
                <img src={book.imageUrl} alt={book.title} className="cart-img" />
                <h4 style={{width:" fit-content"}}>{book.title}</h4>
                <h5 style={{width:" fit-content"}}>Price: ₹{book.price}</h5>
              </div>
                <div className='button-container'>
                  <button onClick={() => removeBookFromCart(book.id)} id='remove'>Remove</button>
                  <button onClick={handleBuyNow} className='buy-now-button'>
                    Buy Now
                  </button>
                </div>
              </div>
          ))
        )}
      </div>
      <p id='totalprice'>Total Price: ₹{getTotalPrice()}</p>
    </div>
  );
}
export default ShoppingCart;