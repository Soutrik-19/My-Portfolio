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
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">Soutrik Ghosh</h1>
      <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8">Transforming complex tech into captivating content.</h2>
      
      {/* Download link for your resume */}
      {/* You must place your resume file in the "public" folder. */}
      <a href="/Soutrik-Ghosh-Resume.pdf" download className="inline-block">
        <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300">Download Resume</button>
      </a>
    </section>
  );
};

export default Hero;
