import Image from 'next/image'
import React from 'react'

const images = () => {
  return (
      <div className="images sm:flex-col w-64 h-64 rounded-lg flex  items-center justify-center bg-slate-400 hover:filter cursor-pointer relative">
        <Image 
        src = "/images/bnwk3-vin468.jpg"
        alt ="/images/bnwk3-vin468.jpg"
        height={1000}
        width={1000}
        className='rounded-lg sepia(0) hover:sepia(100%)'
        />
        <span className='absolute text-2xl text-white font-bold '>Lorem ipsum dolor</span> 
        </div>
        
  )
}

export default images