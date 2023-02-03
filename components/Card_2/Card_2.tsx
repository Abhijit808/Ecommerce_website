import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Home.module.css'
import { AiOutlineArrowRight, AiOutlineShareAlt } from "react-icons/ai";
interface props{
  text:string
}
const card_2 = ({text}:props) => {
  return (
    <div>
      <div className="image flex flex-col gap-3 items-center ">
        <div className={`${styles.image} relative`}>
          <Image src="/images/WhatsApp Image 2021-03-24 at 2.22.01 PM (2).jpeg"
          alt='WhatsApp Image 2021-03-24 at 2.22.01 PM (2).jpeg'
          width={500}
          height={500}
          />
          <span className={`${styles.Hover} absolute text-2xl top-5 text-black right-2 bg-white p-2 rounded-full`}><AiOutlineShareAlt/></span>
        </div>
        <div>
          <h3 className='flex gap-2'>{text}<AiOutlineArrowRight/></h3>
        </div>
      </div>
    </div>
  )
}

export default card_2