// File: src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    // Add responsive styling to the footer.
    // 'bg-gray-900' for a dark background, 'text-gray-400' for light text.
    // 'py-6' for vertical padding and 'text-center' to center the text.
    // 'text-sm' sets a base font size, which is increased to 'md:text-base' on medium screens and up.
    <footer data-aos="fade-up" className="bg-gray-900 text-gray-400 py-6 text-center text-sm md:text-base">
      <p>&copy; {new Date().getFullYear()} Soutrik Ghosh. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
