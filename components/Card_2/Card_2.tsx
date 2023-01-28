import Image from 'next/image'
import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
interface props{
  text:string
}
const card_2 = ({text}:props) => {
  return (
    <div>
      <div className="image flex flex-col gap-3 items-center ">
        <div className="image">
          <Image src="/images/WhatsApp Image 2021-03-24 at 2.22.01 PM (2).jpeg"
          alt='WhatsApp Image 2021-03-24 at 2.22.01 PM (2).jpeg'
          width={500}
          height={500}
          />
        </div>
        <div>
          <h3 className='flex gap-2'>{text}<AiOutlineArrowRight/></h3>
        </div>
      </div>
    </div>
  )
}

export default card_2