"use client"

import React from 'react'
import Chemical from "../images/chemical.png"
import Test from "../images/test.png"
import Atom from "../images/atom.png"
import Chemistry from "../images/chemistry.png"
import * as motion from "motion/react-client"
import Link from 'next/link'
import Image from 'next/image';
import SearchBar from './SearchBar'


const Product = () => {
  

  return (
    <section id="products" className="py-12 px-4 bg-gray-100 text-center">
     <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-4 px-2 sm:ml-4 ml-0 mb-5">
  <motion.h3 className="text-4xl sm:text-3xl font-semibold text-blue-400 ml-0 mr-2 sm:ml-5 sm:mr-0"
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}>
    
    Our Products
  </motion.h3>
  <div className="w-full sm:w-[40%]">
    <SearchBar prop={"all"} />
  </div>
</div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 max-w-6xl mx-auto">
        <Link href="/products/solvents" className="contents">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, x: 100 }}
            whileInView={{ scale: 0.9, x: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotate: 5 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="hover:cursor-pointer bg-blue-400 text-white p-4 rounded-xl flex items-center justify-between flex-col shadow-xl">
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={Test}
                alt="Specialty Chemicals"
                fill
                className="object-contain"
              />
            </div>

            <h4 className="text-xl font-bold mb-2">Solvents</h4>
            <p>Wide range of acids, solvents, and specialty chemicals.</p>
          </motion.div>
          </Link>
        <Link href="/products/powder" className="contents">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, x: 100 }}
            whileInView={{ scale: 0.9, x: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotate: 5 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="hover:cursor-pointer bg-blue-400 text-white p-4 rounded-xl flex items-center justify-between flex-col shadow-xl">
            <div className="relative w-32 h-32 mb-4">
  <Image
    src={Atom}
    alt="Specialty Chemicals"
    fill
    className="object-contain"
  />
</div>

            <h4 className="text-xl font-bold mb-2">Powder</h4>
            <p>Tailored chemical supply services for unique requirements.</p>
          </motion.div>
        </Link>
        
        <Link href="/products/petrochemicals" className="contents">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, x: 100 }}
            whileInView={{ scale: 0.9, x: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotate: 5 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="hover:cursor-pointer bg-blue-400 text-white p-4 rounded-xl flex items-center justify-between flex-col shadow-xl"
          >
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={Chemical}
                alt="Specialty Chemicals"
                fill
                className="object-contain"
              />
            </div>

            <h4 className="text-xl font-bold mb-2">Petrochemicals</h4>
            <p>Reliable supply of top-grade industrial chemical solutions.</p>
          </motion.div>
        </Link>


        <Link href="/products/specialty_chemicals" className="contents">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, x: 100 }}
            whileInView={{ scale: 0.9, x: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotate: 5 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="hover:cursor-pointer bg-blue-400 text-white p-4 rounded-xl flex items-center justify-between flex-col shadow-xl">
            <div className="relative w-32 h-32 mb-4">
  <Image
    src={Chemistry}
    alt="Specialty Chemicals"
    fill
    className="object-contain"
  />
</div>

            <h4 className="text-xl font-bold mb-2">Speciality chemicals</h4>
            <p>Tailored chemical supply services for unique requirements.</p>
          </motion.div>
        </Link>
      </div>

    </section>
  )
}

export default Product