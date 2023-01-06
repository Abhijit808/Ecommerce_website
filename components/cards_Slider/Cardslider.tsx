import React from 'react'
import Grid from '../images/imagecomponent'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";
const Cardslider = () => {
  return (
    // <Grid/>
    <>
    <Swiper
    slidesPerView={4}
    spaceBetween={1}
    navigation={true}
   
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