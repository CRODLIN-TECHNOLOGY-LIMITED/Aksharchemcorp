"use client"

import React, { useState, useEffect } from 'react';
import * as motion from "motion/react-client"
import "../globals.css";
import HeroImage from '../images/hero.jpg'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: 'https://img.freepik.com/premium-photo/top-view-oil-barrels-forklift-truck-move-transportation-worker-help_478515-6919.jpg',
      title: 'Trusted Chemical Distributor',
      subtitle: 'Serving Industry Needs Since 2011'
    },
    {
      image: HeroImage.src,
      title: 'Your Trusted Source for Quality Solvents.',
      subtitle: 'Trusted Imports. Reliable Supply'
    },
    {
      image: 'https://media.istockphoto.com/id/1351708605/photo/tanker-trucks.jpg?s=612x612&w=0&k=20&c=V2YvlCDqawdQjlvQjpDRFKE-VzcnqVZttVqlxznIelo=',
      title: 'More Than Supply',
      subtitle: 'A Commitment to Quality'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Increased duration for better visibility

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-[110vh] flex flex-col items-center justify-center text-center z-0 text-white overflow-hidden">
   
      {/* Background images with transitions */}
      {slides.map((slide, index) => (
        <motion.div
          key={slide.image}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${slide.image}')` }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentIndex ? 1 : 0,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      ))}
      
      {/* Content overlay */}
      <div className="flex items-center justify-center flex-col relative p-6 rounded z-10 h-[60%] w-full">
        <div className="relative h-full w-full flex flex-col items-center justify-center">
          {/* Title animation */}
          <motion.div
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="absolute"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_2px_black] mb-5 sm:mb-0">
              {slides[currentIndex].title}
            </h2>
          </motion.div>
          
          {/* Subtitle animation */}
          <motion.div
            key={`subtitle-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute mt-20"
          >
            <p className="text-base md:text-xl font-bold text-white drop-shadow-[0_0_2px_black] mr-1 sm:mt-0">
              {slides[currentIndex].subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;