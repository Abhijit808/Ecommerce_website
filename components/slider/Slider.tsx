import React,{useState,useRef,useEffect} from 'react'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import styles from "../../styles/Home.module.css"
import Slide from "./Slide";
import { setInterval } from 'timers/promises';
interface props{
   images:string[]
}
const Slider = ({images}:props) => {
const[transform ,settransform] = useState<number>(0)
// TODO:complete the sider setinterval
// useEffect(()=>{
//   const interval = window.setInterval(()=>{
//         console.log(transform);
//        transform>=0?settransform(prev=>prev-1):settransform(-3)   
//   },2000)
//   return(()=>{
//    window.clearInterval(interval)
//   })
// },[transform])
// console.log(images.length-1)
const transformleft = ()=>{
   if(transform>=0){
      settransform(-(images.length-1))
      return
   }
   settransform(prev=>prev+1)
}
// TODO:configue using length 
const transformright =()=>{
   if(transform <-(images.length-2)){
      settransform(0);
      return;
   }
   settransform(prev=>prev-1)
}
// console.log(transform);
const ele = useRef<HTMLDivElement>(null);
   if(ele.current != null){
      ele.current.style.transform = `translateX(${transform}00%)`;
 } 
   return (
      <>
         <div className="slider h-full relative flex  max-w-5xl mx-auto overflow-hidden flex-1 ">
            <div className={`${styles.height} flex w-full relative md:w-[40rem] sm:w-[35rem] xsa:w-60`} ref={ele} >
                  <Slide transform = {transform} images={images}/> 
            </div>
                  <div className="bubble absolute flex gap-2 bottom-2 left-[49%] md:left-[35%]">
                     {
                        images.map((_,index)=>{
                           let val = transform === (-index)
                           
                           return(
                              <div key={index} className={val?`bg-red-500 rounded-full w-3 h-3`:`w-3 h-3 bg-slate-200 rounded-full text-sm flex items-center justify-center`}></div>
                           )
                        })
                     }
                  </div>
            <FaAngleLeft className='absolute left-2 top-[50%] bg-slate-100 w-10 h-10 p-2 rounded-full cursor-pointer' onClick={transformleft}/>
            <FaAngleRight className='absolute right-2 top-[50%] bg-slate-100 w-10 h-10 p-2 rounded-full cursor-pointer' onClick={transformright} />

         </div>
      </>
   )
}

export default Slider