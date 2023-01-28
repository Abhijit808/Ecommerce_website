import React from 'react'
import Catogries from "./Catorigies";
import styles from "../../styles/Home.module.css"
 interface props{
  value:string
 }
const Clink = ({value}:props) => {
  return (
    <li className={`p-2 text-lg ${styles.link} relative`}>
    <p className='w-full hover:font-bold transition-all flex items-center justify-center gap-2 text-left'>
      {value}
    </p>
    <div className={`${styles.catogiries} absolute top-10 w-80 -left-10 rounded-lg z-10 lg:relative lg:top-0 lg:w-[50%] lg:mx-auto `}>
      <Catogries />
    </div>
  </li>
  )
}

export default Clink