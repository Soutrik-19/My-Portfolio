// File: src/components/Blog.jsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../data.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
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
        breakpoint: 768, // This is a mobile breakpoint
        settings: {
          slidesToShow: 1, // Show one slide on mobile devices
        },
      },
    ],
  };

  return (
    // Add responsive padding to the section itself.
    // 'py-16' adds vertical padding, 'px-4' adds horizontal padding.
    // 'lg:px-12' and 'xl:px-24' override the default padding on large screens.
    <section id="blog" data-aos="fade-up" className="py-16 px-4 lg:px-12 xl:px-24">
      {/* Add responsive font sizes and spacing to the heading. */}
      {/* 'mb-10' adds a large bottom margin, which is reduced on smaller screens with 'md:mb-8' */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-8">Latest Articles & Videos</h2>
      
      {/* Replace the inline style with Tailwind classes for max-width and auto margins. */}
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {data.blogPosts.map((post) => (
            // Add padding, rounded corners, and shadow to the card itself.
            // 'p-6' and 'md:p-8' provide responsive padding inside the card.
            <div className="bg-gray-800 text-white rounded-lg p-6 md:p-8 shadow-xl" key={post.id}>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-400 mb-4">{post.summary}</p>
              <a href={post.link} className="text-blue-400 hover:text-blue-300 transition-colors duration-300">Read Post</a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Blog;
