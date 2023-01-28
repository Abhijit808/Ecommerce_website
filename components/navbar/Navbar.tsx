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
import Image from 'next/image';
const Navbar = () => {
  const[toggle,settoggle]=useState<Boolean>(false)
  const burger_toggle=()=>{
       settoggle(!toggle);
       return;
  }
  return (
   <>
     <header className= 'shadow-slate-700 shadow-sm flex-col  flex justify-between mx-auto mt-10 items-center w-full px-8 relative'>
      <div className='flex justify-between mx-auto w-full md:items-center'>
       <div className="left">
        <Link href="/">
         <h3 className='text-2xl p-5 sm:text-xl'>
          Ecommerce
        </h3>
        </Link>
       </div>
       <div className="toggle hidden lg:block">
       {toggle?
        <RxCross1 className={`text-xl ${toggle?"bg-red-500 text-white font-bold rounded-lg":"bg-white"} w-10 h-10 p-2`} onClick={burger_toggle}/>:
       <FiMenu className={`text-xl ${toggle?"bg-red-500 text-white font-bold rounded-lg":"bg-white"} w-10 h-10 p-2`} onClick={burger_toggle}/>
       }
       </div>
      <div className="right flex  w-2/3 items-center justify-between lg:hidden">
                <div className='flex justify-center items-center relative  '>
                    <input type="text" name="search" id="search"  className='p-2 w-96 border-2 rounded-2xl  border-gray-900 ' placeholder='hello'/>
                    <FaSearch className='w-10 h-10 p-2 right-0 hover:cursor-pointer text-black   absolute '/>
                </div>
                <Navlinks icon = {<FiRefreshCw className='w-6 h-6'/>} text = {"compare"}/>                
                <Navlinks icon = {<BiHeart className='w-6 h-6'/>} text = {"WhistList"}/>                               
      </div>
      </div>
      <div className=' w-[100%] flex justify-around items-center md:relative'>
         <div className={`${toggle?styles.transform_O:styles.transform}  transition-all flex justify-between p-2 lg:flex-col xl:${styles.transform_O} lg:absolute lg:top-20 md:top-0 z-10 lg:bg-slate-300  w-[100vw]`}>
         <Cnavbar/>
         <div className='flex lg:flex-col gap-4 p-2'>
         <Link href="/" className='w-full hover:font-bold transition-all flex items-center justify-center gap-2 text-left text-lg'>Blog</Link>
         </div>
         </div>
          </div>
     </header>
   </>
  )
}

export default Navbar