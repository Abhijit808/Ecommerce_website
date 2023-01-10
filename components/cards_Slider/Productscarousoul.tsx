import React from 'react'
import Cardslider from './Cardslider'
interface props{
  heading:string
}
const productscarousoul = ({heading}:props) => {
  return (
    <div className="grid_images flex flex-col ">
    <h3 className='text-3xl font-bold m-3'>{heading}</h3>
    <div className="flex justify-center w-[80vw] mx-auto ">
       <Cardslider/>  
      
    </div>
  </div>
  )
}

export default productscarousoul