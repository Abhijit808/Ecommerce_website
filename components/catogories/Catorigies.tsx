import React from 'react'
import Link from 'next/link'
import Subcomponent from './Subcomponent'
const Catorigies = () => {
  return (
    <>
    <nav className="catogriries nav bg-slate-50  h-full rounded-xl ">
        <ul className='flex  gap-10 justify-between h-full w-full '>
           <Subcomponent/>
           <Subcomponent/>
           <Subcomponent/>
        </ul>
    </nav>
    </>
  )
}

export default Catorigies