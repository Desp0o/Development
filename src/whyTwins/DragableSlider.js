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


  const mySwiper = new Swiper('.swiper-container', {
    // Your Swiper options here
  });
  
  const prevButton = document.querySelector('.swiper-button-prev');
  prevButton.addEventListener('click', () => {
    mySwiper.slideTo(mySwiper.activeIndex - 1);
  });
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        grabCursor={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1}/></SwiperSlide>
        <SwiperSlide><img src={img4}/></SwiperSlide>
        <SwiperSlide><img src={img3}/></SwiperSlide>
        <SwiperSlide><img src={img5}/></SwiperSlide>
        <SwiperSlide><img src={img2}/></SwiperSlide>

        <div className="swiper-button-prev"></div>
  
  <div className="swiper-button-next"></div>
      </Swiper>


    </>
  );
}


export default DragableSlider;