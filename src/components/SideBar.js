import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './SideBar.css'
export default props => {
  return (
    <Menu className='element.style'>
      <h1>Book-Store</h1>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/Books">
        Books
      </a>
      <a className="menu-item" href="/New Arrivals">
        New Arrivals
      </a>
      <a className="menu-item" href="/Today's Deal">
        Today's Deal
      </a>
    </Menu>
  );
};