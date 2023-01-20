import React from 'react'
import Catogries from "./Catorigies";
import Clink from './Clink';
import styles from "../../styles/Home.module.css"
import Link from 'next/link';
const Cnavbar = () => {
  return (
    <div className="catogories w-[100%] flex flex-col items-center justify-start ">
    <ul className=' flex w-full text-center cursor-pointer justify-around mx-auto p-3  lg:flex-col'>
      <Clink/>
      <Clink/>
      <Clink/>
      <Clink/>
      <Clink/>
       {/* <Link href="/404">Lorem</Link> */}
    </ul>
  </div>
  )
}

export default Cnavbar