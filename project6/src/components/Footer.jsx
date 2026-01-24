import React from 'react';
import './Footer.css';

const Footer = ({ brandName, year }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {year} {brandName}. All rights reserved.
        </p>
        <p className="footer-tagline">Growing homes, one plant at a time.</p>
      </div>
    </footer>
  );
};

export default Footer;
