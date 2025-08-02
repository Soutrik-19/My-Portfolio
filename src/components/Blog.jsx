// File: src/components/Blog.jsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../data.json';

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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="blog" data-aos="fade-up">
      <h2>Latest Articles & Videos</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Slider {...settings}>
          {data.blogPosts.map((post) => (
            <div className="card" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <a href={post.link}>Read Post</a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Blog;

