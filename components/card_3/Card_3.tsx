import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Home.module.css'
import { AiOutlineShareAlt } from 'react-icons/ai'
const Card_3 = () => {
  return (
    <div className="images sm:w-60 w-80 h-80  flex-col flex  items-center justify-center  hover:filter cursor-pointer relative">
    <div className={`${styles.image} relative`} >
    <Image 
    src = "/images/WhatsApp Image 2021-03-24 at 2.21.58 PM.jpeg"
    alt ="/images/bnwk3-vin468.jpg"
    height={1000}
    width={1000}
    className='object-cover'
    />
    <span className={`${styles.Hover} absolute text-2xl top-5 text-black right-2 bg-white p-2 rounded-full`}><AiOutlineShareAlt/></span>
    </div>
    <div className=' bg-white w-full'>
      <div className='flex flex-col w-[100%] gap-1 mx-auto pt-4 items-center'>
      <span className="text-black text-md">Darkblue,Grey,&glod fluid art</span>
      <div className="price flex gap-2 justify-center">
        <span className={`${styles.strike} text-sm relative`}>Rs 7,00,000 <span className='absolute left-0 right-0 bottom-2 w-20 h-[.1rem] bg-white'></span></span>
        <span className='text-sm text-black'>From Rs 5,00,000</span>
      </div>
    </div> 
      </div>
    </div>
  )
}

export default Card_3