import React from 'react'
import "../globals.css"

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-900 text-white py-4 text-center w-screen flex justify-between items-center px-18">
        <p className=' text-sm'>&copy; {new Date().getFullYear()} TransChem Impex Pvt Ltd
        . All rights reserved.</p>

        <p className='text-sm'>Designed by Crodlin-Technology</p>
      </footer>
    </div>
  )
}

export default Footer