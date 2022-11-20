import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/hom1.jpg'
import img5 from '../images/home2.jpeg'
import img6 from '../images/home3.webp'
import img7 from '../images/home4.jpg'

// import required modules
import { Pagination } from "swiper";

function DragableSlider() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        loop={true}
        grabCursor={true}
        modules={[Pagination]}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1}/></SwiperSlide>
        <SwiperSlide><img src={img4}/></SwiperSlide>
        <SwiperSlide><img src={img3}/></SwiperSlide>
        <SwiperSlide><img src={img5}/></SwiperSlide>
        <SwiperSlide><img src={img2}/></SwiperSlide>

      </Swiper>


    </>
  );
}


export default DragableSlider;