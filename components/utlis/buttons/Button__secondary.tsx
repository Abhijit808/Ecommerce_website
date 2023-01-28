import React from 'react'

interface props{
    text:string
}
const Button__secondary = ({text}:props) => {
  return (
    <button className='px-8 py-2 border-2 border-black rounded-3xl'>{text}</button>
  )
}

export default Button__secondary