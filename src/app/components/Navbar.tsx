import React from 'react'
import Chem from "../images/biochemistry.png"
import "../globals.css"
import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='w-screen flex justify-center items-center'><header className="bg-blue-500/30 backdrop-blur-md text-white px-4 py-3 shadow-lg fixed
     w-[95%] top-2 z-50 rounded-2xl">
  <div className="container mx-auto flex justify-between items-center">
    {/* Logo + Brand */}
    <div className="flex items-center gap-3">
      <Image
        src={Chem}
        alt="Transchem Impex Logo"
        width={50}
        height={50}
        className="rounded-full"
      />
      <h1 className="hidden sm:block text-2xl sm:text-3xl font-bold tracking-wide">
        Transchem Impex
      </h1>
    </div>

    {/* Navigation */}
    <nav className="flex items-center gap-4 sm:gap-8 text-sm sm:text-base font-semibold">
      <Link
        href="/#about"
        className="relative hover:text-cyan-300 transition duration-200 after:content-[''] after:block after:h-[2px] after:bg-cyan-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
      >
        About Us
      </Link>
      <Link
        href="/#products"
        className="relative hover:text-cyan-300 transition duration-200 after:content-[''] after:block after:h-[2px] after:bg-cyan-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
      >
        Products
      </Link>
      <Link
        href="/#contact"
        className="relative hover:text-cyan-300 transition duration-200 after:content-[''] after:block after:h-[2px] after:bg-cyan-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
      >
        Contact
      </Link>
    </nav>
  </div>
</header>
</div>
  )
}

export default Navbar