"use client"
import React from 'react'

function Map() {
   

    return (
        <div className='overflow-auto relative w-full h-full'>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.341674924575!2d72.95129343839926!3d19.180273382120582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8fc58d0006f%3A0x147d9d7177fd2c47!2sGala%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1748964198106!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}

export default Map