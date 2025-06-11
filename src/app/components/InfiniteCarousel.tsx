'use client'; 

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; 

import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.jpg'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'
import logo5 from '../images/logo5.png'
import logo6 from '../images/logo6.jpg'
import logo7 from '../images/logo7.png'
import logo8 from '../images/logo8.png'
import logo9 from '../images/logo9.png'
import logo10 from '../images/logo10.png'
import logo11 from '../images/logo11.png'
import logo12 from '../images/logo12.png'
import logo13 from '../images/logo13.png'
import logo14 from '../images/logo14.jpg'
import logo15 from '../images/logo15.jpg'
import logo16 from '../images/logo16.png'
import logo17 from '../images/logo17.png'
import logo18 from '../images/logo18.png'


const carouselItems = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo18
];

const ITEM_WIDTH = 200; 
const ITEM_HEIGHT = 100; 
const ITEM_MARGIN_RIGHT = 32; 

const InfiniteCarousel = () => {
  const duplicatedItems = [...carouselItems, ...carouselItems];
  const totalOriginalWidth = carouselItems.length * (ITEM_WIDTH + ITEM_MARGIN_RIGHT);

  return (
    <div className="py-16 bg-gradient-to-r from-gray-50 to-teal-200 overflow-hidden h-96 ">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        We <span className="text-[#20B2AA]">Deal with</span>
      </h2>
      <div className="relative w-full ">
        <motion.div
          className="absolute left-0 top-0 flex flex-nowrap will-change-transform"
          style={{ 
            width: `${totalOriginalWidth * 2}px`,
            backfaceVisibility: 'hidden' 
          }}
          animate={{
            x: [0, -totalOriginalWidth],
          }}
          transition={{
            x: {
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        >
          {duplicatedItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 mx-4 flex items-center justify-center h-48 overflow-clip rounded-2xl bg-white shadow-2xl p-2"
              style={{
                width: ITEM_WIDTH,
                transform: 'translateZ(0)' 
              }}
              initial={{ scale: 1 }}
              whileHover={{ 
                scale: 1.2,
                transition: { duration: 0.3, type:'spring', stiffness:300 }
              }}
            >
              <Image
                alt={`Product ${index % carouselItems.length + 1}`}
                width={ITEM_WIDTH - 20}
                height={ITEM_HEIGHT - 20}
                src={item}
                className="object-contain rounded-2xl"
                loading="eager"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default InfiniteCarousel;