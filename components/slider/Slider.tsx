import React,{useState,useRef,useEffect} from 'react'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Slide from "./Slide";
interface props{
   images:string[]
}
const Slider = ({images}:props) => {
const[transform ,settransform] = useState<number>(0)

// console.log(images.length-1)
const transformleft = ()=>{
   if(transform>=0){
      settransform(-1)
   }
   settransform(prev=>prev+1)
}
// TODO:configue using length 
const transformright =()=>{
   if(transform <-2){
      settransform(0);
      return;
   }
   settransform(prev=>prev-1)
   console.log(transform);
}
const ele = useRef<HTMLDivElement>(null);
   if(ele.current != null){
      ele.current.style.transform = `translateX(${transform}00%)`;
 }
 
 
   return (
      <>
         <div className="slider  relative flex  max-w-5xl mx-auto overflow-hidden flex-1 ">
            <div className="container flex w-full" ref={ele}>
                  <Slide transform = {transform} images={images}/> 
                  <div className="red w-10 h-10 rounded-full bg-blue-500"></div>
            </div>
            <FaAngleLeft className='absolute left-2 top-[50%] bg-slate-100 w-10 h-10 p-2 rounded-full cursor-pointer' onClick={transformleft}/>
            <FaAngleRight className='absolute right-2 top-[50%] bg-slate-100 w-10 h-10 p-2 rounded-full cursor-pointer' onClick={transformright} />

         </div>
      </>
   )
}

export default Slider