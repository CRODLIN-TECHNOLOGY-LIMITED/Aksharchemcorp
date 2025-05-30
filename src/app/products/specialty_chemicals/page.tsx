import React from 'react'
import data from '../../components/data.json'

const SpecialtyChem = () => {
  const chemData = data.chemicals.specialty_chemicals;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-200 py-12 px-4 sm:px-4 mt-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Petrochemicals - Solvents
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

export default SpecialtyChem;
