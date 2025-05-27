import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chem from './images/biochemistry.png'
import { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <html>
      <body className='flex items-center min-h-screen justify-between flex-col w-full'>
        <div className='w-full'>
        <Navbar></Navbar>
        {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
     )
}

export default layout