import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Home.module.css'
const images = () => {
  return (
      <div className="images sm:w-60 w-64 h-64  flex  items-center justify-center bg-slate-400 hover:filter cursor-pointer relative hover:-translate-y-3 transition-all shadow-2xl">
        <Image 
        src = "/images/WhatsApp Image 2021-03-24 at 2.21.58 PM.jpeg"
        alt ="/images/bnwk3-vin468.jpg"
        height={1000}
        width={1000}
        className='object-cover'
        />
        <div className='absolute  bg-black  bottom-0 left-0 right-0 top-44 '>
          <div className='flex flex-col w-[90%] gap-1 mx-auto pt-4 items-center'>
          <span className="text-white text-md">Darkblue,Grey,&glod fluid art</span>
          <div className="price flex gap-2 justify-center">
            <span className={`${styles.strike} text-sm relative`}>Rs 7,00,000 <span className='absolute left-0 right-0 bottom-2 w-20 h-[.1rem] bg-white'></span></span>
            <span className='text-sm text-white'>From Rs 5,00,000</span>
          </div>
        </div> 
          </div>
        </div>
        
  )
}

export default images