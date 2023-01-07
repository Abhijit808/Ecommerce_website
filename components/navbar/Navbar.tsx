import React from 'react'
import Image from 'next/image'
import { FaSearch } from "react-icons/fa";
import { FiRefreshCw,FiShoppingCart} from "react-icons/fi";
import { BiHeart } from "react-icons/bi";
import img_src from "../../public/moritz-mentges-5MlBMYDsGBY-unsplash.jpg"
import Navlinks from './navcomponets/Navlinks';
const Navbar = () => {
  return (
   <>
     <header className= 'shadow-slate-700 shadow-sm flex justify-between mx-auto  items-center w-full px-8'>
       <div className="left">
       <h3 className='text-2xl p-5'>E-commerce</h3>
       </div>
      <div className="right flex flec-col w-2/3 items-center justify-between md:hidden">
                <div className='flex justify-center items-center relative  '>
                    <input type="text" name="search" id="search"  className='p-2 w-96 border-2   border-gray-900 ' placeholder='hello'/>
                    <FaSearch className='w-10 h-10 p-2 right-0 hover:bg-sky-900 hover:cursor-pointer text-white  bg-orange-900 absolute '/>
                </div>
                <Navlinks icon = {<FiRefreshCw className='w-6 h-6'/>} text = {"compare"}/>                
                <Navlinks icon = {<BiHeart className='w-6 h-6'/>} text = {"WhistList"}/>                
                <Navlinks icon = {<FiShoppingCart className='w-6 h-6'/>} text = {"Cart"}/>                
      </div>
      
     </header>
   </>
  )
}

export default Navbar