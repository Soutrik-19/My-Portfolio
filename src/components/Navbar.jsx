// File: src/components/Navbar.jsx

import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <h1>
        {/* Your name is now a clickable link to the homepage */}
        <a href="/">Soutrik Ghosh</a>
      </h1>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
