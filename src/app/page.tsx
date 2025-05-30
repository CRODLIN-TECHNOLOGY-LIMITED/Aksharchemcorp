"use client"

import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Product from './components/Product'
import ContactUsSection from './components/Contact'



const page = () => {
  return (
    <div className='max-w-screen overflow-clip'>
    <Hero></Hero>
    <About></About>
    <Product></Product>
    <ContactUsSection></ContactUsSection>
    {/* <Map></Map> */}
    </div>
  )
}

export default page