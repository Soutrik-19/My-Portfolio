// File: src/components/Testimonials.jsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../data.json';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section id="testimonials" data-aos="fade-up">
      <h2>What People Say</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Slider {...settings}>
          {data.testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <blockquote>
                "{testimonial.quote}"
              </blockquote>
              <p>{testimonial.author}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

