import React from 'react'
import { IconBaseProps } from 'react-icons'
interface props{
  Box:any,
  heading:string,
  text:string
}
const Sub_card_1 = ({Box,heading,text}:props) => {
  return (
    <div className="cards w-full flex flex-col justify-center items-center gap-4">
    <div className="image w-full h-full flex justify-center items-center">
      {Box}
    </div>
    <div className="content">
      <h4 className='text-md text-center '>{heading}</h4>
      <p className='text-center text-sm'>{text}</p>
    </div>
  </div>
  )
}

export default Sub_card_1