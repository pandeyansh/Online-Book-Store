import React from 'react';
import './BuyerDashboard.css';
import img from '../BookLogo.png';
import { Link } from 'react-router-dom';
function BuyerDashBoard() {
    return (
        <div>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={img} className="logo1" alt="Your Logo" />
                </a>
            </div>
            <div className="container">
                <div className="category dropdown">
                    <span class="category-title">Book</span>
                    <div class="dropdown-content">
                        <a href="#">Read</a>
                        <a href="#">Download</a>
                        <a href="#">Add to Wishlist</a>
                    </div>
                </div>
                <div className="category">New Arrivals</div>
                <div className="category">Box Sets</div>
                <div className="category">Best Sellers</div>
                <div className="category">Fiction Book</div>
                <div className="category">Best Sellers</div>
                <div className="category">Award Winners</div>
                <div className="category">Featured Authors</div>
                <div className="category">Today's Deal</div>
                <div className="category">Request a Book Catalog</div>
            </div>
            <hr />
            <div className='main-container'>
                <div className='p1'><p >My Account</p></div>
                <div className='my-account-container'>
                    <div className='account-item'>
                        <img src='https://www.bookswagon.com/images/personalsetttingicon.jpg' alt="Personal Setting" />
                        <br />
                        Personal setting
                    </div>
                    <div className='account-item'>
                        <img src='https://www.bookswagon.com/images/myordericon.jpg' alt="My Order" />
                        <br />
                        My Order
                    </div>
                    <Link to="/wishlist">
                    <div className='account-item'>
                        <img src='https://www.bookswagon.com/images/wishlisticon.jpg' alt="Wishlist" />
                        <br />
                        Wishlist
                    </div>
                    </Link>
                    <div className='account-item'>
                        <img src='https://www.bookswagon.com/images/giftcertificateicon.jpg' alt="My Gift Certificate" />
                        <br />
                        My Gift Certificate
                    </div>
                    <div className='account-item'>
                        <img src='https://www.bookswagon.com/images/addressicon.jpg' alt="My Address" />
                        <br />
                        <a href="https://www.google.co.in/maps/place/Teksons+Bookshop/@28.634813,77.1999192,15z/data=!4m10!1m2!2m1!1sbookstore!3m6!1s0x390cfd48180f8df1:0xc5d53dad21b013c2!8m2!3d28.6333883!4d77.2168512!15sCglib29rc3RvcmVaCyIJYm9va3N0b3JlkgEKYm9va19zdG9yZeABAA!16s%2Fg%2F11h7rq_73z?entry=ttu">My Address</a>
                    </div>
                    <div className='account-item'>
                        <img src='https://www.bookswagon.com/images/chagepasswordicon.jpg' alt="Change Password" />
                        <br />
                        Change Password
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BuyerDashBoard;