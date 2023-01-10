import React, { useEffect, useState } from 'react'
import Grid from '../images/imagecomponent'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";
const Cardslider = () => {
  const [width,Setwidth] = useState<number>(4)
  useEffect(()=>{
    const inner = ()=>{

      // console.log(window.innerWidth);
      let w = window.innerWidth
      w<=1090?Setwidth(3):Setwidth(4)
      w<=936?Setwidth(2):Setwidth(4)
      w<=540?Setwidth(1):Setwidth(4)
    }
    window.addEventListener('resize',inner)
    return(()=>{
      window.removeEventListener('resize',inner);
    })
  },[])
  return (
    // <Grid/>
    <>
    <Swiper
    slidesPerView={width}
    spaceBetween={1}
    navigation={true}
  //  centeredSlides={true}
    modules={[ Navigation]}
    className="mySwiper"
  >
    <SwiperSlide>{<Grid/>}</SwiperSlide>
    <SwiperSlide>{<Grid/>}</SwiperSlide>
    <SwiperSlide>{<Grid/>}</SwiperSlide>
    <SwiperSlide>{<Grid/>}</SwiperSlide>
    <SwiperSlide>{<Grid/>}</SwiperSlide>
    <SwiperSlide>{<Grid/>}</SwiperSlide>
    <SwiperSlide>{<Grid/>}</SwiperSlide>
    <SwiperSlide>{<Grid/>}</SwiperSlide>
    <SwiperSlide>{<Grid/>}</SwiperSlide>
    <SwiperSlide>{<Grid/>}</SwiperSlide>
    <SwiperSlide>{<Grid/>}</SwiperSlide>
  </Swiper>
</>
  )
}

export default Cardslider