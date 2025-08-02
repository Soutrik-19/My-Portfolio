import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    // Initialize AOS with a duration of 1000ms and set to run only once
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
