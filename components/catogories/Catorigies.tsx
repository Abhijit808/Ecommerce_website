import React from 'react'
import Link from 'next/link'
import Subcomponent from './Subcomponent'
const Catorigies = () => {
  return (
    <>
    <nav className="catogriries nav bg-slate-50 rounded-xl p-7 ">
        <ul className="grid grid-cols-2 gap-3">
           <Subcomponent/>
           <Subcomponent/>
           <Subcomponent/>
        </ul>
    </nav>
    </>
  )
}

export default Catorigies