import React from 'react';
import './Navbar.css';

const Navbar = ({ logoText, links }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">✦</span>
          <span className="logo-text">{logoText}</span>
        </div>
        <ul className="navbar-links">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
