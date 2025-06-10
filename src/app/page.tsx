"use client"

import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Product from './components/Product'
import ContactUsSection from './components/Contact'
import InfiniteCarousel from './components/InfiniteCarousel'


const page = () => {
  return (
    <div className='max-w-screen overflow-clip'>
    <Hero></Hero>
    <About></About>
    <Product></Product>
    <InfiniteCarousel></InfiniteCarousel>
    <ContactUsSection></ContactUsSection>
    {/* <Map></Map> */}
    </div>
  )
}

export default page