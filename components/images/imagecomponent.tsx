import React from 'react'
import Image from 'next/image'
const Grid = () => {
  return (
      <div className="wrapper w-72 h-72 rounded-lg flex  items-center justify-center bg-slate-400 hover:filter cursor-pointer relative group">
          <Image 
        src = "/images/bnwk3-vin468.jpg"
        alt ="/images/bnwk3-vin468.jpg"
        height={1000}
        width={1000}
        className='rounded-lg sepia(0) hover:sepia(100%)'
        />
        <div className="link absolute bottom-0 left-0 right-0  text-center group-hover:font-bold bg-red-300 transition-all">
          LINK 1
        </div>
      </div>
  )
}

export default Grid