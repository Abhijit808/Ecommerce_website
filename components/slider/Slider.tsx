import React,{useState,useRef,useEffect} from 'react'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Slide from "./Slide";
const Slider = () => {
const[transform ,settransform] = useState<number>(0)
const images:string[] = ["images/adrianna-geo-1rBg5YSi00c-unsplash.jpg","images/europeana-5TK1F5VfdIk-unsplash.jpg","images/jene-stephaniuk--MCrF6hnojU-unsplash.jpg","images/adrianna-geo-1rBg5YSi00c-unsplash.jpg"]
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
         <div className="slider  relative flex max-w-5xl mx-auto overflow-hidden flex-1 ">
            <div className="container flex   " ref={ele}>
                  <Slide transform = {transform} images={images}/>
            </div>
            <FaAngleLeft className='absolute left-2 top-52 bg-slate-100 w-10 h-10 p-2 rounded-full cursor-pointer' onClick={transformleft}/>
            <FaAngleRight className='absolute right-2 top-52 bg-slate-100 w-10 h-10 p-2 rounded-full cursor-pointer' onClick={transformright} />

         </div>
      </>
   )
}

export default Slider