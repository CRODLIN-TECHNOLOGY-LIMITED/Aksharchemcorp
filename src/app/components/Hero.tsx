"use client"

import React, { useState, useEffect } from 'react';
import * as motion from "motion/react-client"
import SearchBar from './SearchBar';
import "../globals.css";

const Hero = () => {
  const images = [
    'https://cdn.pixabay.com/photo/2016/11/21/13/20/port-1845350_1280.jpg',
    'https://i.pinimg.com/736x/f0/ef/0a/f0ef0acc8286c3f49450ecfaadaebe54.jpg',
    'https://arkaz.com/uploads/ct-items/g5xrvqri_xpo.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-[110vh] flex flex-col items-center justify-center text-center z-0 text-white overflow-hidden">
   
      {/* Background images with transitions */}
      {images.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentImageIndex ? 1 : 0,
            transition: { duration: 1 }
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      ))}
      
      {/* Content overlay */}
      <div className='z-10 w-full h-[40%] pt-24'>
             <SearchBar></SearchBar>
      </div>
      <div className="relative p-6 rounded z-10 h-[60%]">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Trusted Chemical Distributor
        </motion.h2> 
        <motion.p 
          className="text-lg md:text-xl font-bold"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Serving Industry Needs Since 2011
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;