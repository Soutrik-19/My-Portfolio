// File: src/components/Hero.jsx

import React from 'react';

const Hero = () => {
  return (
    <section id="hero" data-aos="fade-up">
      {/* Profile Image Section */}
      <div className="profile-image">
        {/* Placeholder image. Replace with your own image path. */}
        <img
          src="/soutrik-profile.jpg"
          alt="Soutrik Ghosh Profile"
          className="profile-pic"
        />
      </div>
      
      <h1>Soutrik Ghosh</h1>
      <h2>Transforming complex tech into captivating content.</h2>
      
      {/* Download link for your resume */}
      {/* You must place your resume file in the "public" folder. */}
      <a href="/Soutrik-Ghosh-Resume.pdf" download>
        <button>Download Resume</button>
      </a>
    </section>
  );
};

export default Hero;
