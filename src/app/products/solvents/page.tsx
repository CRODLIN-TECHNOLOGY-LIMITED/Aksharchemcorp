import React from 'react'
import data from '../../components/data.json'
import * as motion from "motion/react-client"
import Test from '../../images/test.png'
import { FlaskConical } from 'lucide-react'; 

const Solvents = () => {
  const chemData = data.chemicals.solvents;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-200 py-12 px-4 sm:px-4 mt-20">
      <motion.div className='flex justify-center items-center'>
          <motion.div
            initial={{width:"74vh"}}
            whileInView={{width:"100vw"}}
            // whileHover={{scale:1.3}}
            // whileTap={{rotate:5}}
            transition={{duration:0.5,ease:"easeInOut"}}
            className="bg-blue-400 text-white rounded-lg flex items-center justify-center flex-col shadow-xl mb-10 h-60 "
          >
            <img src={Test.src} className="h-[20vh]" alt="" />
            <h4 className="text-2xl font-bold mb-2 mt-2">Petrochemicals</h4>
            <p className=' hidden sm:block'>Reliable supply of top-grade industrial chemical solutions.</p>

           
          </motion.div>
        </motion.div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Petrochemicals - Solvents
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {chemData.map((elem, idx) => (
        <div
          key={idx}
          className="flex items-center space-x-4 p-4 rounded-xl transition-transform duration-300 hover:scale-105 hover:bg-blue-50" // Subtle background on hover
        >
          {/* Large, prominent icon */}
          {/* <FlaskConical className="text-blue-600 flex-shrink-0" size={48} strokeWidth={1.5} /> */}

          {/* Text content */}
          <li className="text-xl font-semibold text-gray-800 hover:text-blue-700 cursor-pointer">
            {elem}
          </li>
        </div>
      ))}
        </div>
      </div>
    </div>
  )
}

export default Solvents;
