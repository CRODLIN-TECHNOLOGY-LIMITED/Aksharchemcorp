import React from 'react'
import "../globals.css"

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-900 text-white p-4 text-center w-screen">
        <p>&copy; {new Date().getFullYear()} TransChem Impex Pvt Ltd
        . All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer