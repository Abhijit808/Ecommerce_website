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
            <>
              <Image 
              src={image} 
              alt={image}
              width={1000}
              height={1000}
              className={`w-[80%] ${styles.height}  object-cover md:w-[80vw] rounded-xl`}  
              key={i}
               />
              
               </>
              )
            })
        }
      </>
  
  )
}

export default slide