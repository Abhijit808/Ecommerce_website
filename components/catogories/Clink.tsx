import React from 'react'
import Catogries from "./Catorigies";
import styles from "../../styles/Home.module.css"
import { AiOutlineMobile } from "react-icons/ai";  
const Clink = () => {
  return (
    <li className={`p-2 text-lg ${styles.link}`}>
    <p className='w-full hover:font-bold transition-all flex items-center justify-center gap-2 text-left'>
      <AiOutlineMobile/>
      lorem
    </p>
    <div className={`${styles.catogiries} absolute  right-0 top-0 bottom-0 left-[15.9rem] rounded-lg z-10 `}>
      <Catogries />
    </div>
  </li>
  )
}

export default Clink