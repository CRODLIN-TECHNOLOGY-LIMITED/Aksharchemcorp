import React from 'react'
import "../globals.css"
import Image from 'next/image';
import Crordlin from "../images/logo.png"
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-900 text-white py-4 text-center w-screen flex justify-between items-center px-2 sm:px-18">
        <p className=' text-xs'>&copy; {new Date().getFullYear()} TransChem Impex Pvt Ltd
        . All rights reserved.</p>
        <Link href={"https://crodlin.in"} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2'>
        <div className='flex '>
        <Image
          src={Crordlin}
          alt="Crodlin Tech Logo"
          width={30}
          height={30}
          className="ml-2 rounded-full "
          />

        </div>
        </Link>
      </footer>
    </div>
  )
}

export default Footer