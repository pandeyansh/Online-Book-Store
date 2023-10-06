import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"; // Import your CSS file for styling

function Footer() {
  return (
    <footer className="bookstore-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>
              Welcome to Book store, your one-stop destination for all your book
              needs. We are passionate about literature and are dedicated to
              providing you with the best reading experience.
            </p>
          </div>
          <div className="col-md-4">
            <h4>Others</h4>
            <ul className="footer-links">
              <li>
                <a href="#">FAQ's</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
<div className="t1">
<div className="t2">
            <h4>Contact Us</h4>
            <p>
              <strong>Address: </strong>rajiv chock metro station, Delhi
            </p>
            <p>
              Phone: 9057XXXXXXXX
            </p>
            <p>
              <strong>Email:</strong> BookStore@gmail.com
            </p>
            </div>
          
          </div>
          </div>
          
           
         
          
          <div className="col-md-12">
            <div className="">
              <h4>Connect With Us</h4>
              <p>
                Stay updated with the latest news, promotions, and book releases
                by following us on social media:
              </p>
              <ul className="social-icons">
                <li>
                  <a href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/?lang=en-in">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    
         
        </div>
      
    </footer>
  );
}

export default Footer;
