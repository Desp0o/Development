import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";


// import required modules



export default function App() {
    const swiperRef = useRef(null);
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const navigationPrevRef1 = useRef(null)
  
    useEffect(() => {
        
      }, []);
  return (
    <>
        <div className="">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        centeredSlides={true}
        modules={[Navigation]}
        className="swiper"
        ref={swiperRef}
        navigation={{
            
            prevEl: '.btns',
            nextEl: '.next'
          }}
      >
        <SwiperSlide><div className="card" >
            
            <div className="card_inner_top">
                <img className="card_render_main_screen" src='' />
            </div>

            <div className="card_inner_bottom">
                <div className="card_inner_bottom_left">
                    <img className="mc_Icon" src='' />
                    <p className="card_inner_bottom_p">სად</p>
                </div>

                <div className="card_inner_bottom_right">
                    <img className="bed_Icon" src='' />
                    <p className="card_inner_bottom_p">ასდ</p>
                </div>
            </div>
            
        </div></SwiperSlide>



        
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <div ref={navigationPrevRef} className='btns'></div>
      <div ref={navigationNextRef} className='next'></div>
      <div ref={navigationPrevRef1} className='btns aa'></div>
      </div>
     
    </>
  );
}
