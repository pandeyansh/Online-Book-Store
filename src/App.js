import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookCatalog from './components/BookCatalog';
import SignUp from './SignUp';
import { CartProvider } from './components/CartContext';
import DashBoard from './components/DashBoard';
import ShoppingCart from './components/ShoppingCart';
// import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './components/useAuth';
import LogIn from './LogIn';

function App() {
  const { user, login } = useAuth();

  return (
    <CartProvider user={user}>
      <Router>
        <Routes>
          <Route path="/" element={<BookCatalog user={user} />} />
          <Route path="/login" element={<LogIn login={login} />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Use PrivateRoute for protected routes */}
          {/* <Route path="/dashboard" element={<PrivateRoute />} />
          <Route path="/shoppingcart" element={<PrivateRoute />} /> */}
          <Route path='/dashboard' element={<DashBoard/>}/>
          <Route path='/shoppingcart' element={<ShoppingCart/>}/>
          {/* Other routes */}
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
