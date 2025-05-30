import React from 'react'
import Chem from "../images/biochemistry.png"
import "../globals.css"

const Navbar = () => {
  return (
    <div className='w-screen flex justify-center items-center'><header className="bg-blue-500/30 backdrop-blur-md text-white px-4 py-3 shadow-lg fixed
     w-[95%] top-2 z-50 rounded-2xl">
  <div className="container mx-auto flex justify-between items-center">
    {/* Logo + Brand */}
    <div className="flex items-center gap-3">
      <img src={Chem.src} alt="logo" className="h-[8vh] sm:h-[9vh] drop-shadow-lg" />
      <h1 className="hidden sm:block text-2xl sm:text-3xl font-extrabold tracking-wide">
        Transchem Impex
      </h1>
    </div>

    {/* Navigation */}
    <nav className="flex items-center gap-4 sm:gap-8 text-sm sm:text-base font-semibold">
      <a
        href="/#about"
        className="relative hover:text-cyan-300 transition duration-200 after:content-[''] after:block after:h-[2px] after:bg-cyan-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
      >
        About Us
      </a>
      <a
        href="/#products"
        className="relative hover:text-cyan-300 transition duration-200 after:content-[''] after:block after:h-[2px] after:bg-cyan-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
      >
        Products
      </a>
      <a
        href="/#contact"
        className="relative hover:text-cyan-300 transition duration-200 after:content-[''] after:block after:h-[2px] after:bg-cyan-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
      >
        Contact
      </a>
    </nav>
  </div>
</header>
</div>
  )
}

export default Navbar