import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';


// Import Swiper styles


// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade";
import './slider.css'
import './App.css'

import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'



function Slider() {
    
   
    
  return (
   
    <div className='carousel App'>
       
        <div className='carousel-inner'>
        <Swiper 
            spaceBetween={30}
            centeredSlides={true}
            effect={"fade"}
            autoplay={{
            delay: 8000,
            disableOnInteraction: false,
            }}
            
            modules={[Autoplay,  Navigation]}
            className="slide"
        >
        <SwiperSlide >
                <img src={img1}/>  
        </SwiperSlide>
        <SwiperSlide><img src={img2}/></SwiperSlide>
        <SwiperSlide><img src={img3}/></SwiperSlide>
      </Swiper>
      </div>
    </div>

    

  )
}

export default Slider;