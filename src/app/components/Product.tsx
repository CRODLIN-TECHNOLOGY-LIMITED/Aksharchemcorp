"use client"

import React, { useState } from 'react'
import Chemical from "../images/chemical.png"
import Test from "../images/test.png"
import Atom from "../images/atom.png"
import Chemistry from "../images/chemistry.png"
import * as motion from "motion/react-client"
import Link from 'next/link'
import Image from 'next/image';
import SearchBar from './SearchBar'


const Product = () => {
  const [moreInfo, setMoreInfo] = useState("hidden")

  return (
    <section id="products" className="py-12 px-4 bg-gray-100 text-center">
      <div className=' flex justify-between items-center w-full '>
        <h3 className="text-xl sm:text-3xl font-semibold mb-8 ml-20 text-blue-400">Our Products</h3>
        <div className='mr-20 mb-8'>
             <SearchBar></SearchBar>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 max-w-6xl mx-auto">
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
      <h3 className="text-xl font-semibold mt-8 hover:underline hover:cursor-pointer "
        onClick={() => setMoreInfo(moreInfo === "hidden" ? "block" : "hidden")}>
        Know more</h3>
      <div className={`${moreInfo}`}>
        <h1 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eligendi commodi aspernatur magni ex soluta reprehenderit, molestiae voluptas error expedita nulla sequi! In quaerat expedita at sequi, temporibus tempora quisquam!</h1>
      </div>

    </section>
  )
}

export default Product