'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react' // optional icon package

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const [Width, setWidth] = useState("40%")
  const [bg, setBg] = useState(false)

  function Clickevent(){
    Width==="40%"?setWidth("70%"):setWidth("40%")
    setBg(!bg)
  }

  return (
    <motion.div
      className="max-w-md mx-auto "
      initial={{ opacity: 1, x: 200, width:"40%" }}
      whileInView={{ opacity: 1, x: 0 }}
      animate={{ opacity: 1, width:Width }}
      transition={{ duration: 0.5 }}
      onClick={Clickevent}
    >
      <motion.div
        className={`flex items-center border px-4 py-2  rounded-full ${bg ? 'bg-white/90' : 'bg-white/50'} shadow-md ${
          focused ? 'ring-1 ring-gray-100' : 'border-gray-300'
        }`}
        animate={{ scale: focused ? 1.02 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <Search className="text-gray-400 w-5 h-5 mr-2" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 outline-none bg-transparent text-gray-500 placeholder-gray-400 border-none "
          placeholder="Search..."
        />
      </motion.div>
    </motion.div>
  )
}

export default SearchBar
