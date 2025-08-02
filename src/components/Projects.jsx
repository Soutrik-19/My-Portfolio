// File: src/components/Projects.jsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../data.json';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    // Section container with padding and margin, ensuring it's centered
    <section id="projects" data-aos="fade-up" className="container mx-auto px-4 py-16">
      {/* Centered heading with a bold font and margin at the bottom */}
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">My Projects</h2>
      
      {/* Slider container with responsive margins */}
      <div className="mx-auto w-full max-w-4xl">
        <Slider {...settings}>
          {data.projects.map((project) => (
            // Individual project card with a clean, modern design
            <div className="p-4" key={project.id}>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 h-full flex flex-col justify-between">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 flex-grow mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300 text-center"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
