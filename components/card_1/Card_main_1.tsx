import Image from 'next/image'
import React from 'react'
import { BsBoxSeam } from "react-icons/bs";
import Sub_card_1 from './Sub_card_1';
const card_main_1 = () => {
  return (
    <div className="sale flex justify-center flex-col p-6">
    <div className="content flex justify-center flex-col gap-4 p-4">
      <h4 className='text-3xl text-center '>Lorem ipsum dolor sit.</h4>
      <p className='text-center text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo debitis exercitationem quam autem </p>
    </div>
    <div className='wrapper flex justify-center items-center'>

      <Sub_card_1 Box = {<BsBoxSeam className='w-10 h-10'/>}/>
      <Sub_card_1 Box = {<BsBoxSeam className='w-10 h-10'/>}/>
      <Sub_card_1 Box = {<BsBoxSeam className='w-10 h-10'/>}/>
      
    </div>
  </div>
  )
}

export default card_main_1