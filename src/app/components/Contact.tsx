"use client"

import React from 'react';
// Import icons from lucide-react for visual appeal
import { MapPin, Phone, Mail } from 'lucide-react';
import * as motion from "motion/react-client"
import dynamic from "next/dynamic";

const Map = dynamic(() => import('./Map'), { ssr: false });

function ContactUsSection() {

  const Gmap = ()=>{
    window.location.href='https://maps.app.goo.gl/mYASuUYFsTraSU7d6'
  }

  return (
    <section id="contact" className="relative py-16 px-4 md:px-8 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      {/* Subtle background element for visual interest */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" fill="none" viewBox="0 0 100 100">
          <defs>
            <pattern id="pattern-circles" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="#D1E0F5" /> {/* Light blue circles */}
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Main Heading */}
        <motion.h2
         className="text-4xl sm:text-5xl font-extrabold text-teal-800 mb-6 text-center tracking-tight"
         initial={{
          x:100,
          opacity:0
         }}
         whileInView={{
          x:0,
          opacity:1
         }}
         
         transition={{duration:0.5}}
         >
          Get in <span className="text-[#20B2AA]">Touch</span>
        </motion.h2>

        {/* Introductory Paragraph */}
        <motion.p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed"
        initial={{
          x:100,
          opacity:0
         }}
         whileInView={{
          x:0,
          opacity:1
         }}
         
         transition={{duration:0.5}}
         >
        
          Looking for a specific chemical or have a question? We&apos;re here to help. Reach out to us today.
        </motion.p>

        {/* Contact Information Cards */}
        <div className='flex flex-col md:flex-row gap-8'>
  {/* Left Side - Contact Info */}
  <div className="flex flex-col gap-8 w-full md:w-1/2">
    {/* Address Card */}
    <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
      <MapPin className="text-[#20B2AA] mb-4" size={48} strokeWidth={1.5} />
      <h3 className="text-2xl font-bold text-[#20B2AA] mb-3">Our Location</h3>
      <p className="text-lg text-gray-700 font-semibold">TransChem Impex Pvt Ltd</p>
      <p className="text-md text-gray-600 leading-relaxed">
        123 Gala Complex Premises CSL, 1st Floor, Dindayal Upadhayay Marg, (Dumping Road)
        <br />
        Near Croma Showroom, Mulund (West), Mumbai – 400080.
      </p>
    </div>

    {/* Phone & Email Card */}
    <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
      <h3 className="text-2xl font-bold text-[#20B2AA] mb-4">Connect With Us</h3>
      
      {/* Phone Number */}
      <div className="flex items-start justify-center mb-6">
  <Phone className="text-[#20B2AA] mr-3 mt-1" size={28} strokeWidth={1.5} />
  <div className="flex flex-col">
    <a href="tel:+919222209831" className="text-xl text-[#20B2AA] font-semibold hover:underline">
      Office: 9222209831
    </a>
    <a href="tel:+912235056017" className="text-xl text-[#20B2AA] font-semibold hover:underline mt-1">
      02235056017
    </a>
  </div>
</div>

      {/* Email Addresses */}
      <h4 className="text-xl font-bold text-gray-800 mb-4">Email Us Directly:</h4>
      <div className="flex flex-col space-y-4 w-full">
        <a 
          href="mailto:transchemimpex@gmail.com" 
          className="inline-flex items-center justify-center bg-[#20B2AA] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#20B2AA] transition-colors duration-300 text-base sm:text-lg font-medium"
        >
          <Mail className="mr-3" size={20} /> transchemimpex@gmail.com
        </a>
        <a 
          href="mailto:logistics.tcipl11@gmail.com" 
          className="inline-flex items-center justify-center bg-[#20B2AA] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#20B2AA] transition-colors duration-300 text-base sm:text-lg font-medium"
        >
          <Mail className="mr-3" size={20} /> Import.transchemimpex@gmail.com
        </a>
      </div>
    </div>
  </div>

  {/* Right Side - Map */}
  <div
  className="w-full h-[300px] sm:h-[700px] md:w-1/2 bg-gray-100 rounded-xl shadow-lg flex items-center justify-center hover:cursor-pointer"
  onClick={Gmap}
>
  <Map />
</div>
</div>
        </div>
    </section>
  );
}

export default ContactUsSection;