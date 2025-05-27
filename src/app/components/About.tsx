import React from 'react'
import * as motion from "motion/react-client"
import { Lightbulb, Star, User, Globe, Handshake } from 'lucide-react';


const About = () => {
  return (
    <section
     id="about" 
     className="relative py-16 px-4 md:px-8 bg-gradient-to-br from-blue-300 to-white  overflow-hidden z-0"
     
    >
      {/* Decorative background blobs - these add a subtle, organic visual effect */}
      {/* Requires the 'blob' animation keyframes in tailwind.config.js */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Main content container, centered and with max-width for readability */}
      <div className="container mx-auto max-w-full relative z-10"> {/* z-10 ensures content is above the blobs */}
        {/* Main Heading */}
        <motion.h2
         className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-6 text-center tracking-tight"
         initial={{x:100,opacity:0}}
         whileInView={{x:0,opacity:1}}
         transition={{duration:0.6, ease:"easeInOut"}}
         >
          About <span className="text-indigo-600">Transchem Impex</span>
        </motion.h2>

        {/* Tagline/Introductory sentence */}
        <motion.p 
        className="text-xl text-gray-700 mb-8 text-center max-w-3xl mx-auto leading-relaxed"
        initial={{x:100,opacity:0}}
         whileInView={{x:0,opacity:1}}
         transition={{duration:0.6, ease:"easeInOut"}}
        >
          <strong className="text-blue-600">Transchem Impex Private Limited</strong> — your trusted partner in the world of chemicals, solvents, and industrial materials.
        </motion.p>

        {/* Main content block with a distinct background, shadow, and border */}
        <motion.div 
        className="bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-blue-200"
        initial={{scale:0.5}}
        whileInView={{scale:1}}
        transition={{duration:0.6, ease:"easeInOut"}}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Column: Our Vision & Journey */}
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <Lightbulb className="mr-3 text-yellow-500" size={28} /> Our Vision & Journey
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Founded on <strong className="text-indigo-600">July 8th, 2011</strong>, Transchem Impex was born from a clear vision: to deliver premium-quality products at highly competitive rates. Today, we proudly stand as a dependable and forward-thinking name in the chemical supply industry.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We serve a wide range of sectors with unwavering **efficiency, transparency, and integrity**. Our journey has been one of continuous evolution, adapting to changing market needs and expanding our reach from local sourcing to global imports starting in **2022–2023**.
              </p>
            </div>

            {/* Right Column: What Makes Us Different / Key Values */}
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <Star className="mr-3 text-green-500" size={28} /> What Makes Us Different
              </h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <User className="mr-3 mt-1 text-blue-500 flex-shrink-0" size={24} />
                  <div>
                    <strong className="text-blue-600">Customer-Centric Approach:</strong> We prioritize your needs, offering tailored solutions and exceptional service.
                  </div>
                </li>
                <li className="flex items-start">
                  <Globe className="mr-3 mt-1 text-purple-500 flex-shrink-0" size={24} />
                  <div>
                    <strong className="text-blue-600">Global Reach:</strong> Direct access to quality materials, on time and at the right price, through our expanding import capabilities.
                  </div>
                </li>
                <li className="flex items-start">
                  <Handshake className="mr-3 mt-1 text-orange-500 flex-shrink-0" size={24} />
                  <div>
                    <strong className="text-blue-600">Partnership Built on Trust:</strong> We believe in fostering strong, reliable relationships with our clients.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Concluding message / Call to Action */}
          <div className="mt-10 text-center">
            <p className="text-2xl font-semibold text-indigo-700 mb-4">
              At Transchem Impex, we don’t just supply materials—we help you move forward with confidence.
            </p>
            <p className="text-3xl font-extrabold text-blue-800">
              Reliable. Responsive. Ready to serve.
            </p>
            <p className="text-xl font-medium text-gray-600 mt-4">
              Welcome to Transchem Impex Private Limited.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

  )
}

export default About