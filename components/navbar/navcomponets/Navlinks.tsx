import React from 'react'
interface props{
    icon?:any
}
const Navlinks = ({icon}:props) => {
  return (
    <div className='hover:cursor-pointer flex justify-center items-center gap-3'>
        <div className="icon">
            {icon}
        </div>
    </div>
  )
}

export default Navlinks