import React from 'react'
import Catogries from "./Catorigies";
import styles from "../../styles/Home.module.css"
 
const Clink = () => {
  return (
    <li className={`p-2 text-lg ${styles.link} relative`}>
    <p className='w-full hover:font-bold transition-all flex items-center justify-center gap-2 text-left'>
      Lorem
    </p>
    <div className={`${styles.catogiries} absolute top-10 w-80 left-0 rounded-lg z-10 md:relative md:top-0 md:left-20`}>
      <Catogries />
    </div>
  </li>
  )
}

export default Clink