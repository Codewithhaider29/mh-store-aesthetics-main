import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Video from '../assets/hero.mp4'; // Ensure this file is optimized (preferably < 5MB)

const HeroSection = () => {
  useEffect(() => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      video.playbackRate = 1.0;
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          id="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/fallback-image.jpg" // Optional: add your optimized fallback image in public folder
          className="w-full h-full object-cover"
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-4"
        >
          Elegance in Every Detail
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-white max-w-2xl mb-6"
        >
          Discover premium watches, earbuds, and accessories that define your style.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link
            to="/categories"
            className="bg-mh-pink hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
