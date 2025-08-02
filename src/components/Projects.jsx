import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../data.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  if (!data || !data.projects || !Array.isArray(data.projects) || data.projects.length === 0) {
    return (
      <section id="projects" className="projects-container">
        <h2 className="projects-title">My Scripts</h2>
        <p className="no-scripts">No scripts found. Please check your data.json file.</p>
      </section>
    );
  }

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
    <section id="projects" data-aos="fade-up" className="projects-container">
      <h2 className="projects-title">My Scripts</h2>

      <div className="slider-wrapper">
        <Slider {...settings}>
          {data.projects.map((project) => (
            <div className="slide" key={project.id}>
              <div className="project-card">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>

                <div className="project-buttons">
                  {project.pdfLink?.trim() && (
                    <a
                      href={project.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn blue"
                    >
                      View Script
                    </a>
                  )}
                  {project.youtubeLink?.trim() && (
                    <a
                      href={project.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn red"
                    >
                      Watch Video
                    </a>
                  )}
                  {project.wordLink?.trim() && (
                    <a
                      href={project.wordLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn green"
                    >
                      Download (DOCX)
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
