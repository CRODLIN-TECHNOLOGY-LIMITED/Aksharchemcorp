'use client';

import React, { useState } from 'react';
import * as motion from 'motion/react-client';
import { AnimatePresence } from 'motion/react';
import { Search } from 'lucide-react';
import Fuse from 'fuse.js';
import chemicals from './data.json';

// Define the type of individual search items (you can update this if structure changes)
type Chemical = string;

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [Width, setWidth] = useState('40%');
  const [bg, setBg] = useState(false);
  const [data, setData] = useState<Fuse.FuseResult<Chemical>[]>([]);

  // Combine all chemical arrays into a single searchable array
  const allChemicals: Chemical[] = [
    ...chemicals.chemicals.solvents,
    ...chemicals.chemicals.petrochemicals,
    ...chemicals.chemicals.powder,
    ...chemicals.chemicals.specialty_chemicals,
  ];

  const fuse = new Fuse(allChemicals);

  function Clickevent() {
    if (Width === '40%') {
      setWidth('70%');
    } else {
      setWidth('40%');
    }
    setBg(!bg);
  }
  

  return (
    <motion.div
      className="max-w-md mx-auto"
      initial={{ opacity: 1, x: 200, width: '40%' }}
      whileInView={{ opacity: 1, x: 0 }}
      animate={{ opacity: 1, width: '70%' }}
      transition={{ duration: 0.5 }}
      onClick={Clickevent}
    >
      <motion.div
        className={`flex items-center border px-4 py-2 rounded-full ${
          focused ? 'bg-white/90' : 'bg-white/70'
        } shadow-md ${focused ? 'ring-1 ring-gray-100' : 'border-gray-300'}`}
        animate={{ scale: focused ? 1.02 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <Search className="text-gray-400 w-5 h-5 mr-2" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            const results = fuse.search(e.target.value);
            console.log(results);
            setData(results);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 outline-none bg-transparent text-gray-500 placeholder-gray-400 border-none"
          placeholder="Search..."
        />
      </motion.div>

      <div>
        <AnimatePresence>
          {data.length > 0 && focused && (
            <motion.div
              className="h-[20vh] overflow-scroll rounded m-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <ul className="mt-2 bg-white/90 rounded shadow">
                {data.map((result, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 py-4 px-2 hover:bg-gray-100 shadow"
                  >
                    {result.item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default SearchBar;
