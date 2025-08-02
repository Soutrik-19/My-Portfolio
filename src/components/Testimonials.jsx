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
    // Section container with responsive padding, margin, and background color.
    <section id="testimonials" data-aos="fade-up" className="container mx-auto px-4 py-16 bg-gray-100 rounded-lg shadow-inner">
      {/* Centered heading with a bold font and ample margin at the bottom. */}
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What People Say</h2>
      
      {/* Slider container with a centered, responsive width. */}
      <div className="mx-auto w-full max-w-4xl">
        <Slider {...settings}>
          {data.testimonials.map((testimonial) => (
            // Individual testimonial card with a clean, centered design.
            <div key={testimonial.id} className="px-2 md:px-4">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col justify-center h-full">
                {/* Blockquote with large, italicized text. */}
                <blockquote className="text-xl md:text-2xl font-light italic mb-4 text-gray-700 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                {/* Author's name styled with a bold font and muted color. */}
                <p className="text-lg font-semibold text-gray-500 mt-4">- {testimonial.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;