"use client"

import React,{useState} from 'react'
import data from '../../components/data.json'
import * as motion from "motion/react-client"
import Chemical from '../../images/chemical.png'
import Image from 'next/image';
import SearchBar from '@/app/components/SearchBar';

const Petrochemicals = () => {
  const chemData = data.chemicals.petrochemicals;
  const [others, setOthers] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-teal-200 py-12 px-4 sm:px-0 mt-20 overflow-clip">
        <motion.div className='flex justify-center items-center'>
          <motion.div
            initial={{width:"74vh"}}
            whileInView={{width:"100vw"}}
            // whileHover={{scale:1.3}}
            // whileTap={{rotate:5}}
            transition={{duration:0.5,ease:"easeInOut"}}
            className="bg-[#20B2AA] text-white rounded-lg flex items-center justify-center flex-col shadow-xl mb-10 h-60 "
          >
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={Chemical}
                alt="Specialty Chemicals"
                fill
                className="object-contain"
              />
            </div>

            <h4 className="text-2xl font-bold mb-2 mt-2">Petrochemicals</h4>
            <p className=' hidden sm:block'>Reliable supply of top-grade industrial chemical solutions.</p>

           
          </motion.div>
        </motion.div>

      <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-[#20B2AA] mb-8 text-center">
          Petrochemicals
        </h2>
        <div className=' flex w-full justify-center items-center sm:pr-8 pr-4'>
        <SearchBar prop={"petro"}></SearchBar>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
      {chemData.expertise.map((elem, idx) => (
        <motion.div
          initial={{opacity:0,}}
          whileInView={{opacity:1,}}
          transition={{duration:0.5, ease:"easeInOut"}}
          key={idx}
          className="flex items-center space-x-4 p-4 rounded-xl transition-transform duration-300 hover:scale-105 hover:bg-teal-50" // Subtle background on hover
        >
          {/* Large, prominent icon */}
          {/* <FlaskConical className="text-blue-600 flex-shrink-0" size={48} strokeWidth={1.5} /> */}

          {/* Text content */}
          <li className="text-xl font-semibold text-gray-800 hover:text-[#20B2AA] cursor-pointer">
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
                        className="flex items-center space-x-4 p-4 rounded-xl transition-transform duration-300 hover:scale-105 hover:bg-teal-50" 
                      >
                        <li className="text-xl font-semibold text-gray-800 hover:text-[#20B2AA] cursor-pointer">
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

export default Petrochemicals;
