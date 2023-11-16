import React from 'react';
import useWishlist from './useWishlist';
function Wishlist() {
  const { wishlist } = useWishlist();
  return (
    <div>
      <h1>My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlist.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Wishlist;