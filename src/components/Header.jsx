// File: src/components/Header.jsx

import React from 'react';

const Header = () => {
  return (
    // Add responsive padding and styling to the header section.
    // 'bg-gray-800' provides a dark background.
    // 'text-center' centers the text.
    // 'py-16' adds vertical padding, with responsive horizontal padding from 'px-4'.
    // 'shadow-md' adds a subtle shadow to make it stand out.
    <header className="bg-gray-800 text-white text-center py-16 px-4 shadow-md md:py-20 lg:px-8">
      <div className="logo-container">
        {/* Responsive font size for the main heading. */}
        <h1 className="text-4xl font-bold mb-2 md:text-5xl lg:text-6xl">Soutrik Ghosh</h1>
        
        {/* Responsive font size for the sub-heading. */}
        <p className="text-xl text-gray-400 md:text-2xl lg:text-3xl">Tech Content Writer</p>
      </div>
    </header>
  );
};

export default Header;
