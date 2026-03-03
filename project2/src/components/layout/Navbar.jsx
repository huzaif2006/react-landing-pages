import React from 'react';

const Navbar = ({ logoText, links }) => {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-white w-full">
      {/* Logo */}
      <div className="text-2xl font-bold text-orange-900">
        {logoText}
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
        {links.map((link, index) => (
          <a key={index} href={`#${link}`} className="hover:text-orange-900 transition">
            {link}
          </a>
        ))}
      </div>

      {/* Top Button */}
      <button className="border-2 border-orange-900 text-orange-900 px-8 py-2 rounded-md font-semibold hover:bg-orange-900 hover:text-white transition">
        Buy Now
      </button>
    </nav>
  );
};

export default Navbar;