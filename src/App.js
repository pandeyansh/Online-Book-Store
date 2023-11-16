import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookCatalog from './components/BookCatalog';
import SignUp from '../src/SignUp'
import { CartProvider } from './components/CartContext';
import DashBoard from './components/DashBoard';
import ShoppingCart from './components/ShoppingCart';
import LogIn from './LogIn';
import BuyerDashBoard from './components/BuyerDashboard';
import Wishlist from './components/WishList';
function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<BookCatalog />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/buyer" element={<BuyerDashBoard />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
export default App;