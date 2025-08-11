// File: src/components/Contact.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact" data-aos="fade-up" className="py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h2>
      <p className="text-lg md:text-xl leading-relaxed mb-10">
        I'm always open to new opportunities...
      </p>

      <div className="flex justify-center space-x-6">
        {/* Email */}
        <a 
          href="mailto:soutrik.19@gmail.com" 
          aria-label="Email Me" 
          className="text-3xl md:text-4xl text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/soutrik-ghosh-029373221/" 
          aria-label="LinkedIn"
          className="text-3xl md:text-4xl text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        {/* Twitter */}
        <a 
          href="https://x.com/Soutrik_19" 
          aria-label="Twitter"
          className="text-3xl md:text-4xl text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>

        {/* Instagram */}
        <a 
          href="https://www.instagram.com/soutrik.19/" 
          aria-label="Instagram"
          className="text-3xl md:text-4xl text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        {/* YouTube */}
        <a 
          href="https://www.youtube.com/@nerd_scope" 
          aria-label="YouTube"
          className="text-3xl md:text-4xl text-red-500 hover:text-red-400 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
