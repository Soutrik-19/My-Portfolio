// File: src/components/Contact.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact" data-aos="fade-up">
      <h2>Get In Touch</h2>
      <p>I'm always open to new opportunities...</p>
      <div className="social-links">
        {/* Email */}
        <a href="mailto:youremail@example.com" aria-label="Email Me">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        
        {/* LinkedIn */}
        <a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        
        {/* Twitter */}
        <a href="https://twitter.com/yourhandle" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
