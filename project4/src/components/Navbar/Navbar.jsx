import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ logoText, links }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">🍯</span>
          <span className="logo-text">{logoText}</span>
        </div>

        <div className={`nav-menu ${isActive ? 'active' : ''}`}>
          {links.map((link, index) => (
            <a key={index} href={`#${link.toLowerCase()}`} className="nav-link">
              {link}
            </a>
          ))}
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={isActive ? 'active' : ''}></span>
          <span className={isActive ? 'active' : ''}></span>
          <span className={isActive ? 'active' : ''}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
