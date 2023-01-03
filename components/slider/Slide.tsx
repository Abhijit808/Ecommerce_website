import styles from "../../styles/Home.module.css"
import {useRef,useEffect} from "react"
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
              <img src={image} alt={image}
               className={`w-full ${styles.height}  object-cover `}  
               key={i}
               />
              )
            })
          }
      </>
  
  )
}

export default slide