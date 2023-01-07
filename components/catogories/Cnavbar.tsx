import React from 'react'
import Catogries from "./Catorigies";
import Clink from './Clink';
import styles from "../../styles/Home.module.css"
const Cnavbar = () => {
  return (
    <div className="catogories w-[100%] flex flex-col items-center justify-start ">
    <h3 className='text-xl w-full text-center p-5  bg-zinc-300 border-b-2'>catogories</h3>
    {/* TODO:convert all li into custiom components */}
    <ul className='divide-y  w-full text-center cursor-pointer '>
      <Clink/>
      <Clink/>
      <Clink/>
      <Clink/>
      <Clink/>
      <Clink/>
      <Clink/>
      <Clink/>
      <Clink/>
      <Clink/>
    </ul>
  </div>
  )
}

export default Cnavbar