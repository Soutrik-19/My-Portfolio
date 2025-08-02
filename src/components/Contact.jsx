// File: src/components/Contact.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    // Add responsive padding to the section for consistent spacing.
    <section id="contact" data-aos="fade-up" className="py-16 px-4 text-center">
      
      {/* Add responsive font sizes and spacing to the heading. */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h2>
      
      {/* Adjust the paragraph font size and bottom margin. */}
      <p className="text-lg md:text-xl leading-relaxed mb-10">
        I'm always open to new opportunities...
      </p>
      
      {/* Use a flex container to center and space the social icons. */}
      <div className="flex justify-center space-x-6">
        
        {/* Email Icon with responsive size and hover effect. */}
        <a 
          href="mailto:youremail@example.com" 
          aria-label="Email Me" 
          className="text-3xl md:text-4xl text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        
        {/* LinkedIn Icon */}
        <a 
          href="https://linkedin.com/in/yourprofile" 
          aria-label="LinkedIn"
          className="text-3xl md:text-4xl text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        
        {/* Twitter Icon */}
        <a 
          href="https://twitter.com/yourhandle" 
          aria-label="Twitter"
          className="text-3xl md:text-4xl text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
