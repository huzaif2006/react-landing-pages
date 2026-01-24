import React from 'react';
import './Footer.css';

const Footer = ({ brandName, year }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">🍯</span>
            <h3>{brandName}</h3>
            <p>Pure, organic honey from nature to your table</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#benefits">Benefits</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:info@purehoney.com">Email</a></li>
                <li><a href="#">Phone</a></li>
                <li><a href="#">Address</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Follow Us</h4>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} {brandName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
