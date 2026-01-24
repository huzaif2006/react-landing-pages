import React from 'react';
import './Navbar.css';

const Navbar = ({ logoText, links }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">{logoText}</div>
        <ul className="navbar-links">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
