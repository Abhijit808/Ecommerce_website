import React from 'react'
interface props{
  type:string,
  name:string,
  placeholder:string,
  password:React.Dispatch<React.SetStateAction<string>>

}
const input__primary = (props:props) => {
    const {type,name,placeholder,password} = props
  return (
    <>
    <input type={type} name={name} id={name} required className='border-2 border-red-100 rounded-lg shadow-inner text-blue-400 p-1' placeholder={placeholder} onChange={e=>password(e.target.value)}/>
    </>
  )
}

export default input__primary