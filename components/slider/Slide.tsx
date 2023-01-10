import styles from "../../styles/Home.module.css"
import {useRef,useEffect} from "react"
import Image from 'next/image'
interface props{
  transform:number,
  images:string[]
}
const slide = ({transform,images}:props) => {

  
  return (
   <>
      {
        images.map((image,i)=>{
          return(
         
              <Image 
              src={image} 
              alt={image}
              width={100}
              height={1000}
              className={`w-auto ${styles.height}  object-cover  rounded-xl md:w-[40rem] sm:w-[40rem]`}  
              key={i}
               />
              
              
              )
            })
        }
      </>
  
  )
}

export default slide