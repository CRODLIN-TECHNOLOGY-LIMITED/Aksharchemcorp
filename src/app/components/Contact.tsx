'use client';

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import the Map component with no SSR (because leaflet uses window)
const MapWithNoSSR = dynamic(() => import('@/app/components/MapComponent'), {
  ssr: false,
});

function ContactUsSection() {
  return (
    <section
      id="contact"
      className="relative py-16 px-4 md:px-8 bg-gradient-to-br from-white to-blue-50 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-6 text-center tracking-tight">
          Get in <span className="text-blue-600">Touch</span>
        </h2>

        <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          Looking for a specific chemical or have a question? We're here to help. Reach out to us today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 text-center">
              <MapPin className="text-blue-600 mb-4" size={48} strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-blue-700 mb-3">Our Location</h3>
              <p className="text-lg text-gray-700 font-semibold">TransChem Impex Pvt Ltd</p>
              <p className="text-md text-gray-600 leading-relaxed">
                123 Gala Complex Premises CSL, 1st Floor, Dindayal Upadhayay Marg, (Dumping Road)
                <br />
                Near Croma Showroom, Mulund (West), Mumbai – 400080.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 text-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Connect With Us</h3>

              <div className="flex items-center justify-center mb-6">
                <Phone className="text-blue-600 mr-3" size={28} strokeWidth={1.5} />
                <a
                  href="tel:+912235056017"
                  className="text-xl text-blue-700 font-semibold hover:underline"
                >
                  Office: 02235056017
                </a>
              </div>

              <h4 className="text-xl font-bold text-gray-800 mb-4">Email Us Directly:</h4>
              <div className="flex flex-col space-y-4">
                <a
                  href="mailto:transchemimpex@gmail.com"
                  className="inline-flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition"
                >
                  <Mail className="mr-3" size={20} /> transchemimpex@gmail.com
                </a>
                <a
                  href="mailto:logistics.tcipl11@gmail.com"
                  className="inline-flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition"
                >
                  <Mail className="mr-3" size={20} /> logistics.tcipl11@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Map */}
          <div className="rounded-xl shadow-lg overflow-hidden">
            <MapWithNoSSR />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
