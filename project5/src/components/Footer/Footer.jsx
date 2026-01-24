import React from 'react';
import './Footer.css';

const Footer = ({ brandName, year }) => {
  const currentYear = year || new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">✦</span>
            <h3 className="footer-name">{brandName}</h3>
          </div>
          <p className="footer-tagline">Handcrafted 3D Origami Art</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-list">
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#process">Our Process</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Connect</h4>
            <ul className="footer-list">
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#email">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Legal</h4>
            <ul className="footer-list">
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#terms">Terms</a></li>
              <li><a href="#returns">Returns</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {currentYear} {brandName}. All rights reserved. Handmade with care.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
