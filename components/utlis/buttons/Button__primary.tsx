import React from 'react'
interface props{
    text:string
}
const Button__primary = ({text}:props) => {
  return (
    <button className='bg-blue-600 text-white  py-3 px-8 text-md rounded-2xl hover:bg-blue-500'>{text}</button>
  )
}

export default Button__primary