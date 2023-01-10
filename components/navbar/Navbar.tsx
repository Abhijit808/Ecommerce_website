import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { FiRefreshCw,FiShoppingCart} from "react-icons/fi";
import { BiHeart } from "react-icons/bi";
import styles from "../../styles/Home.module.css"
import Navlinks from './navcomponets/Navlinks';
import Link from 'next/link';
import Cnavbar from '../catogories/Cnavbar'
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  const[toggle,settoggle]=useState<Boolean>(false)
  const burger_toggle=()=>{
       settoggle(!toggle);
       return;
  }
  return (
   <>
      <div className="r-1 flex justify-between p-3">
        <Link href = "/Contact">Contact us</Link>
        <div className="login flex gap-3">
        <Link href = "/login">Login</Link>
        <Link href = "/signup">Sign up</Link>
        </div>
      </div>
     <header className= 'shadow-slate-700 shadow-sm flex-col  flex justify-between mx-auto  items-center w-full px-8 relative'>
      <div className='flex justify-between mx-auto w-full md:items-center'>
       <div className="left">
       <h3 className='text-2xl p-5 sm:text-xl'>E-commerce</h3>
       </div>
       <div className="toggle hidden md:block">
       {toggle?
        <RxCross1 className={`text-xl ${toggle?"bg-red-500 text-white font-bold rounded-lg":"bg-white"} w-10 h-10 p-2`} onClick={burger_toggle}/>:
       <FiMenu className={`text-xl ${toggle?"bg-red-500 text-white font-bold rounded-lg":"bg-white"} w-10 h-10 p-2`} onClick={burger_toggle}/>
       }
       </div>
      <div className="right flex  w-2/3 items-center justify-between md:hidden">
                <div className='flex justify-center items-center relative  '>
                    <input type="text" name="search" id="search"  className='p-2 w-96 border-2   border-gray-900 ' placeholder='hello'/>
                    <FaSearch className='w-10 h-10 p-2 right-0 hover:bg-sky-900 hover:cursor-pointer text-white  bg-orange-900 absolute '/>
                </div>
                <Navlinks icon = {<FiRefreshCw className='w-6 h-6'/>} text = {"compare"}/>                
                <Navlinks icon = {<BiHeart className='w-6 h-6'/>} text = {"WhistList"}/>                
                <Navlinks icon = {<FiShoppingCart className='w-6 h-6'/>} text = {"Cart"}/>                
      </div>
      </div>
      <div className=' w-[50%] flex justify-around items-center md:relative'>
         <div className={`${toggle?styles.transform_O:styles.transform}  transition-all flex justify-between p-2 md:flex-col xl:${styles.transform_O} md:absolute md:top-0 z-10 md:bg-slate-300  w-[100vw]`}>
         <Cnavbar/>
         <div className='flex md:flex-col gap-4 p-2'>
         <Link href="/" className='w-full hover:font-bold transition-all flex items-center justify-center gap-2 text-left text-lg'>Lorem</Link>
         <Link href="/" className='w-full hover:font-bold transition-all flex items-center justify-center gap-2 text-left text-lg'>Lorem</Link>
         <Link href="/" className='w-full hover:font-bold transition-all flex items-center justify-center gap-2 text-left text-lg'>Lorem</Link>
         </div>
         </div>
          </div>
     </header>
   </>
  )
}

export default Navbar