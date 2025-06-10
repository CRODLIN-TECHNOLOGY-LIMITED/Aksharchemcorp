"use client"

import React,{useState} from 'react'
import data from '../../components/data.json'
import * as motion from "motion/react-client"
import Chemistry from '../../images/atom.png'
import SearchBar from '@/app/components/SearchBar'
import Image from 'next/image';

const Powder = () => {

  const chemData = data.chemicals.powder;
  const [others, setOthers] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-200 py-12 px-4 sm:px-4 mt-20 overflow-clip">
      <motion.div className='flex justify-center items-center'>
          <motion.div
            initial={{width:"74vh"}}
            whileInView={{width:"100vw"}}
            // whileHover={{scale:1.3}}
            // whileTap={{rotate:5}}
            transition={{duration:0.5,ease:"easeInOut"}}
            className="bg-blue-400 text-white rounded-lg flex items-center justify-center flex-col shadow-xl mb-10 h-60 "
          >
            <div className="relative w-32 h-32 mb-4">
  <Image
    src={Chemistry}
    alt="Specialty Chemicals"
    fill
    className="object-contain"
  />
</div>

            <h4 className="text-2xl font-bold mb-2 mt-2">Powder</h4>
            <p className=' hidden sm:block'>Reliable supply of top-grade industrial chemical solutions.</p>

           
          </motion.div>
        </motion.div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Powders
        </h2>
        <div className=' flex w-full justify-center items-center sm:pr-8 pr-4'>
        <SearchBar prop={"powder"}></SearchBar>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {chemData.expertise.map((elem:any, idx:number) => (
                <motion.div
                  initial={{opacity:0,}}
                  whileInView={{opacity:1,}}
                  transition={{duration:0.5, ease:"easeInOut"}}
                  key={idx}
                  className="flex items-center space-x-4 p-4 rounded-xl transition-transform duration-300 hover:scale-105 hover:bg-blue-50" // Subtle background on hover
                >

                  <li className="text-xl font-semibold text-gray-800 hover:text-blue-700 cursor-pointer">
                    {elem}
                  </li>
                </motion.div>
              ))}
        </div>
        <div className=' flex justify-center items-center p-2 font-semibold text-3xl w-full'>
          <p className='hover:underline hover:cursor-pointer  '
          onClick={
            ()=>setOthers(!others)
          }
          >Click to see more products</p>
        </div>
       {   others &&
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {chemData.other.map((elem:any, idx:number) => (
                <motion.div
                  initial={{opacity:0,}}
                  whileInView={{opacity:1,}}
                  transition={{duration:0.5, ease:"easeInOut"}}
                  key={idx}
                  className="flex items-center space-x-4 p-4 rounded-xl transition-transform duration-300 hover:scale-105 hover:bg-blue-50" 
                >
                  <li className="text-xl font-semibold text-gray-800 hover:text-blue-700 cursor-pointer">
                    {elem}
                  </li>
                </motion.div>
              ))}
        </div>
      }
      </div>
    </div>
  )
}

export default Powder;
