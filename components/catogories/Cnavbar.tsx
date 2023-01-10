import React from 'react'
import Catogries from "./Catorigies";
import Clink from './Clink';
import styles from "../../styles/Home.module.css"
import Link from 'next/link';
const Cnavbar = () => {
  return (
    <div className="catogories w-[100%] flex flex-col items-center justify-start ">
    {/* <h3 className='text-xl w-full text-center p-5  bg-zinc-300 border-b-2'>catogories</h3> */}
    {/* TODO:convert all li into custiom components */}
    <ul className=' flex w-full text-center cursor-pointer  justify-around mx-auto p-3  md:flex-col'>
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