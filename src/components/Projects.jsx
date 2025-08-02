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
    <section id="projects" data-aos="fade-up">
      <h2>My Projects</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Slider {...settings}>
          {data.projects.map((project) => (
            <div className="card" key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>Read More</a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;

