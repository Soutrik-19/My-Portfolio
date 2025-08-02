const About = () => {
  return (
    // The main section now has vertical padding that changes with screen size.
    // It uses a container to keep the content centered and readable.
    <section id="about" data-aos="fade-up" className="py-12 md:py-16 lg:py-24 px-4">
      {/* This inner div helps center the content and prevents it from getting too wide on large screens. */}
      <div className="mx-auto max-w-4xl">
        {/* The heading's font size and bottom margin are now responsive. */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">About Me</h2>
        {/* The paragraph text size and line height are also adjusted for better readability on all devices. */}
        <p className="text-lg md:text-xl leading-relaxed">
          I am a tech content writer based in Kolkata, India, with a background in software development. My mission is to simplify the complex world of technology, making topics like cloud computing, artificial intelligence, and cybersecurity accessible to a wider audience.
          <br/><br/>
          My unique blend of technical knowledge and creative writing skills allows me to produce content that is not only accurate and informative but also engaging and easy to understand. I work with startups and established companies to build brand authority and drive engagement through high-quality articles, blog posts, and whitepapers.
        </p>
      </div>
    </section>
  );
};

export default About;
