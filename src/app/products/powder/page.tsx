import React from 'react'
import data from '../../components/data.json'
import * as motion from "motion/react-client"
import Chemistry from '../../images/biochemistry.png'

const Powder = () => {
  const chemData = data.chemicals.powder;

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
            <img src={Chemistry.src} className="h-[20vh]" alt="" />
            <h4 className="text-2xl font-bold mb-2 mt-2">Petrochemicals</h4>
            <p className=' hidden sm:block'>Reliable supply of top-grade industrial chemical solutions.</p>

           
          </motion.div>
        </motion.div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Powders
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {chemData.map((elem, idx) => (
            <div
              key={idx}
              className="bg-blue-400 shadow-md rounded-2xl p-6 text-center hover:scale-105 hover:shadow-lg transition-transform duration-300"
            >
              <p className="text-lg hover:cursor-pointer text-white font-semibold">{elem}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Powder;
