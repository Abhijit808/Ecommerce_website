import Image from 'next/image'
import React from 'react'
import { BsBoxSeam } from "react-icons/bs";
import { IoDiamondOutline,IoEarthOutline } from "react-icons/io5";
import { FiRefreshCcw } from "react-icons/fi";
import { FaShippingFast } from "react-icons/fa";

import Sub_card_1 from './Sub_card_1';
const card_main_1 = () => {
  return (
    <div className="sale flex justify-center flex-col p-6">
    {/* <div className="content flex justify-center flex-col gap-4 p-4">
      <h4 className='text-3xl text-center '>Lorem ipsum dolor sit.</h4>
      <p className='text-center text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo debitis exercitationem quam autem </p>
    </div> */}
    <div className='wrapper flex justify-center items-center md:flex-col gap-4 py-10 px-5'>

      <Sub_card_1 Box = {<IoDiamondOutline className='w-14 h-14'/>} heading={"Outstanding Quality"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ipsam."}/>
      <Sub_card_1 Box = {<IoEarthOutline className='w-14 h-14'/>}heading={"printed on 10 colors machine"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ipsam."}/>
      <Sub_card_1 Box = {<FiRefreshCcw className='w-10 h-10'/>}heading={"Original qulaity material"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ipsam."}/>
      <Sub_card_1 Box = {<FaShippingFast className='w-10 h-10'/>}heading='free Shipping' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ipsam.'/>
      
    </div>
  </div>
  )
}

export default card_main_1