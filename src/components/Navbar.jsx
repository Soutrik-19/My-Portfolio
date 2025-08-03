// File: src/components/Navbar.jsx

import React from 'react';

const Navbar = () => {
  return (
    // The main navigation bar with a dark background, shadow, and responsive padding.
    // 'sticky top-0 z-50' ensures it stays at the top of the viewport when scrolling.
    <nav className="bg-gray-800 text-white shadow-lg p-4 flex justify-between items-center sticky top-0 z-50">
      {/* Brand/Logo Section with responsive font size */}
      <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
        {/* Your name is now a clickable link to the homepage with a hover effect */}
        <a href="/" className="hover:text-blue-400 transition-colors duration-300">Soutrik Ghosh</a>
      </h1>

<div className="collapse navbar-collapse" id="navbarSupportedContent"/>

     
      {/* Navigation Links Section */}
      {/* 'hidden md:flex' hides the links on small screens and shows them as a flex row on medium screens and up */}
      <ul className="hidden md:flex space-x-6 lg:space-x-8">
        <li><a href="#about" className="text-lg hover:text-blue-400 transition-colors duration-300">About</a></li>
        <li><a href="#projects" className="text-lg hover:text-blue-400 transition-colors duration-300">Projects</a></li>
        <li><a href="#blog" className="text-lg hover:text-blue-400 transition-colors duration-300">Blog</a></li>
        <li><a href="#contact" className="text-lg hover:text-blue-400 transition-colors duration-300">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

