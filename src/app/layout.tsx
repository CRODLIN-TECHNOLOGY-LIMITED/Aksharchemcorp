import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className='flex items-center min-h-screen justify-between flex-col w-full'>
        <div className='w-full'>
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}

export default layout
