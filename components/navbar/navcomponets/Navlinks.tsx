import React from 'react'
interface props{
    icon?:any,
    text:String
}
const Navlinks = ({icon,text}:props) => {
  return (
    <div className='hover:cursor-pointer flex justify-center items-center gap-3'>
        <div className="icon">
            {icon}
        </div>
        <div className=" flex flex-col   items-start">
            <span>0</span>
            <p className='text-base'>{text}</p>
        </div>
    </div>
  )
}

export default Navlinks