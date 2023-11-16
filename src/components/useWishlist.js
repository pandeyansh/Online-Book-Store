import { useState } from 'react';
function useWishlist() {
  const [wishlist, setWishlist] = useState([]);
  return { wishlist, setWishlist };
}
export default useWishlist;