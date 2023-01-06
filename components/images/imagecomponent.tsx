import React from 'react'
import Image from 'next/image'
const Grid = () => {
  return (
    <div className="imgge_wrapper shadow-black shadow-sm flex justify-center items-center flex-col my-11">

      <div className="wrapper w-52 h-56 rounded-lg flex  items-center justify-center bg-slate-400 hover:filter cursor-pointer relative group ">
          <Image 
        src = "/images/desc.jpg"
        alt ="/images/bnwk3-vin468.jpg"
        height={1000}
        width={1000}
        className='rounded-lg sepia(0) hover:sepia(100%)'
        />
        <div className="link flex gap-2 justify-center items-center absolute bottom-[0rem] left-0 right-0 text-center group-hover:font-bold group-hover:top-[9rem] backdrop-blur-lg transition-all p-2 opacity-0 group-hover:opacity-100">
          <p className='w-8 h-8 text-center flex justify-center items-center bg-white text-sm rounded-full'>&</p>
          <p className='w-8 h-8 text-center flex justify-center items-center bg-white text-sm rounded-full'>&</p>
          <p className='w-8 h-8 text-center flex justify-center items-center bg-white text-sm rounded-full'>$</p>
          <p className='w-8 h-8 text-center flex justify-center items-center bg-white text-sm rounded-full'>$</p>
        </div>
      </div>
      <div className="description w-full p-4">
        <p className='text-sm font-bold text-left'>Rs 2000</p>
        <p className='text-sm text-left'>Tshirt</p>
      </div>
    </div>
  )
}

export default Grid