'use client'
import React, { useState,useRef } from 'react'
import * as motion from "motion/react-client"
import { AnimatePresence } from 'motion/react'
import { Search } from 'lucide-react' // optional icon package
import Fuse from 'fuse.js'
import type { FuseResult } from 'fuse.js'
import chemicals from './data.json'

// Define the Chemical type based on your data structure
interface Chemical {
  name: string
  // Add other properties if needed
}


const SearchBar = () => {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  // const [Width, setWidth] = useState("40%")
  // const [bg, setBg] = useState(false)
  const [data, setData] = useState<any[]>([])
  
  // Combine all chemical arrays into a single array for Fuse
  const allChemicals = [
    ...chemicals.chemicals.solvents,
    ...chemicals.chemicals.petrochemicals,
    ...chemicals.chemicals.powder,
    ...chemicals.chemicals.specialty_chemicals
  ];

  // console.log(allChemicals)

  const fuse = new Fuse(allChemicals)


  const inputRef = useRef<HTMLInputElement>(null);

  const Focus = ()=>{
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }


  return (
    <motion.div
      className=" sm:max-w-[320px] max-w-[260px] sm:ml-10 ml-5 hover:cursor-pointer"
      initial={{ opacity: 1, x: 200, width:"30%" }}
      whileInView={{ opacity: 1, x: 0 }}
      animate={{ opacity: 1, width:"100%" }}
      transition={{ duration: 0.5 }}
      onClick={Focus}
    >
      <motion.div
        className={`flex  border px-4 py-2  rounded-full ${focused ? 'bg-white/90' : 'bg-white/70'} shadow-md ${
          focused ? 'ring-1 ring-gray-100' : 'border-gray-300'
        } `}
        animate={{ scale: focused ? 1.02 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <Search className="text-gray-400  h-5 mr-2 hover:cursor-pointer" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) =>{ setQuery(e.target.value)
            console.log(fuse.search(e.target.value))
            setData(fuse.search(e.target.value))
          }
          }
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className=" outline-none bg-transparent text-gray-500 placeholder-gray-400 border-none hover:cursor-pointer"
          placeholder="Search..."
        />
      </motion.div>
      <div>
        <AnimatePresence>
        {data.length > 0 && focused && (
         <motion.div className=' h-[20vh] overflow-scroll rounded m-5'
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration:0.5,ease:"easeInOut"}}
         > 
          <ul className="mt-2 bg-white/90 rounded shadow ">
          {data.map((result: FuseResult<Chemical>, idx: number) => (
  <li key={idx} className="text-gray-700 py-4 px-2 hover:bg-gray-100 shadow">
    {result.item?.name || JSON.stringify(result.item)}
  </li>
))}

          </ul>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default SearchBar
