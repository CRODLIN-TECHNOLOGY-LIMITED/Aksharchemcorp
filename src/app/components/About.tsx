"use client"

import React from 'react'
import * as motion from "motion/react-client"
import { Lightbulb, Star, User, Globe, Handshake } from 'lucide-react';


const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col  py-16 bg-gradient-to-br from-white to-blue-200 overflow-hidden" // More white background with a subtle blue hint
    >
      {/* Decorative background blobs - these add a subtle, organic visual effect */}
      {/* Requires the 'blob' animation keyframes in tailwind.config.js */}
       {/* Subtler blue blob */}
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-2000"></div> {/* Subtler indigo blob */}

      {/* Main content container, centered and with max-w-4xl for readability */}
      <div className="container max-w-screen relative z-10"> {/* z-10 ensures content is above the blobs, max-w-4xl for readability */}
        {/* Main Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 text-center tracking-tight"
          initial={{x:100,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:0.6, ease:"easeInOut"}}
        >
          About <span className="text-gray-600">Transchem Impex Pvt. Ltd.</span> {/* Adjusted span color for more cohesive blue theme */}
        </motion.h2>

        {/* Tagline/Introductory sentence */}
        <motion.p
          className="text-xl text-gray-700 mb-8 text-center max-w-3xl mx-auto leading-relaxed"
          initial={{x:100,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:0.6, ease:"easeInOut"}}   
        >
          <strong className="text-gray-800">Transchem Impex Private Limited</strong> — your trusted partner in the world of chemicals, solvents, and industrial materials.
        </motion.p>

        {/* Main content block - now without card styling */}
        <motion.div // Adjusted duration for smoother effect

>
          <div className=" items-start space-y-8 mb-10">
            {/* Left Column: Our Vision & Journey */}


            <motion.div
              className="p-4 md:p-8 will-change-transform flex flex-col bg-blue-400 shadow-xl w-full h-[83~vh] justify-center items-center" // Removed bg-white, shadow, border, and adjusted padding
              initial={{y:200,opacity:0}} // Changed animation for a subtle fade-in from below
              whileInView={{y:0,opacity:1}}
              transition={{duration:0.8, ease:"easeOut"}}>

              <div className=' flex justify-between items-center flex-col p-5'>
              <div className='w-full flex items-center justify-center m-7'>
              <h3 className="text-5xl font-stretch-semi-condensed font-light text-gray-600 mb-4 flex items-center text-center">
                <Lightbulb className="mr-3 text-yellow-500" size={28} /> Our Vision & Journey
              </h3>
              </div>
              <motion.div className=' bg-white/15 flex flex-col sm:w-[80%] items-center justify-center sm:p-10 
              px-2 sm:px-20 rounded-xl'
                animate={{
                  y: [10, 0, 10],
                }}

                transition={{
                  duration: 2, // Animation duration
                  repeat: Infinity, // Loop the animation infinitely
                  ease: 'easeInOut', // Smooth easing
                }}
              >
              <p className="text-lg italic leading-loose mb-6 text-gray-800 font-medium tracking-wide">
                Founded on <span className="text-blue-800 font-semibold not-italic">July 8th, 2011</span>, 
                <span className="text-blue-600 font-bold not-italic"> Transchem Impex pvt. ltd. </span> was born from a clear vision — 
                to deliver premium-quality products at highly competitive rates. Today, we proudly stand 
                as a dependable and forward-thinking name in the chemical supply industry.
              </p>

              <p className="text-lg italic leading-loose text-gray-900 font-medium tracking-wide">
                We serve a wide range of sectors with unwavering efficiency, transparency, and integrity. 
                Our journey has been one of continuous evolution — adapting to changing market needs and 
                expanding our reach from local sourcing to global imports starting in 
                <span className="text-indigo-800 font-semibold not-italic"> 2022–2023</span>.
              </p>
              </motion.div>
              </div>
            </motion.div>

            {/* Right Column: What Makes Us Different / Key Values */}
            <motion.div
              className="p-4 md:p-8 will-change-transform flex flex-col justify-center items-center" // Removed bg-white, shadow, border, and adjusted padding
              initial={{y:100,opacity:0}} // Changed animation for a subtle fade-in from below
              whileInView={{y:0,opacity:1}}          
              transition={{duration:0.8, ease:"easeOut"}}
            >
              <div className='w-full flex items-center justify-center'>
              <h3 className="text-4xl font-stretch-semi-condensed font-semibold text-gray-700 mb-4 flex items-center text-center">
                <Star className="mr-3 text-gray-300" size={28} /> What Makes Us Different
              </h3>
              </div>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <User className="mr-3 mt-1 text-gray-500 flex-shrink-0" size={24} />
                  <div>
                    <strong className="text-gray-600">Customer-Centric Approach:</strong> We prioritize your needs, offering tailored solutions and exceptional service.
                  </div>
                </li>
                <li className="flex items-start">
                  <Globe className="mr-3 mt-1 text-gray-500 flex-shrink-0" size={24} /> {/* Changed to blue for consistency */}
                  <div>
                    <strong className="text-gray-600">Global Reach:</strong> Direct access to quality materials, on time and at the right price, through our expanding import capabilities.
                  </div>
                </li>
                <li className="flex items-start">
                  <Handshake className="mr-3 mt-1 text-gray-500 flex-shrink-0" size={24} /> {/* Changed to blue for consistency */}
                  <div>
                    <strong className="text-gray-600">Partnership Built on Trust:</strong> We believe in fostering strong, reliable relationships with our clients.
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Concluding message / Call to Action */}
          <motion.div className="mt-10 text-center"
          initial={{y:100,opacity:0}} // Changed animation for a subtle fade-in from below
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.8, ease:"easeOut"}}
          >
            <p className="text-2xl font-semibold text-gray-700 mb-4"> {/* Adjusted color */}
              At Transchem Impex Pvt. Ltd., we don’t just supply materials—we help you move forward with confidence.
            </p>
            <p className="text-3xl font-extrabold text-gray-800">
              Reliable. Responsive. Ready to serve.
            </p>
            <p className="text-xl font-medium text-gray-600 mt-4">
              Welcome to Transchem Impex Private Limited.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>

  )
}

export default About