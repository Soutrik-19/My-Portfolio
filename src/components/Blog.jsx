import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../data.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
  // Use useEffect to initialize AOS after the component mounts
  useEffect(() => {
    AOS.init({
      once: true, // Only animate elements once
      offset: 50, // Offset (in px) from the original trigger point
      delay: 50, // Delay (in ms) before the animation starts
    });
  }, []); // Empty dependency array ensures this runs only once

  // Add a safety check to make sure data.blog exists and is an array
  if (!data || !data.blog || !Array.isArray(data.blog) || data.blog.length === 0) {
    return (
      <section id="blog" className="container mx-auto px-4 py-16 font-['Inter']">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Blog</h2>
        <p className="text-center text-gray-500 dark:text-gray-400">No blog posts found. Please check your data.json file.</p>
      </section>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // Display 3 posts on large screens, 2 on medium, and 1 on small screens
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="blog" data-aos="fade-up" className="blog-container container mx-auto px-4 py-16 font-['Inter']">
      <h2 className="blog-title text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Blog</h2>
      
      <div className="mx-auto w-full max-w-6xl">
        <Slider {...settings}>
          {data.blog.map((post) => (
            // Each carousel item needs its own wrapper div
            <div className="p-4" key={post.id}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{post.description}</p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-auto">Published on: {post.date}</p>
                {post.link && (
                  <a 
                    href={post.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300 text-center"
                  >
                    Read More
                  </a>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Blog;
