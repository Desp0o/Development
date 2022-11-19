import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

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
        <SwiperSlide><img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/26/18/porto-main.jpg?quality=75&width=982&height=726&auto=webp"/></SwiperSlide>
        <SwiperSlide><img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/26/18/porto-main.jpg?quality=75&width=982&height=726&auto=webp"/></SwiperSlide>
        <SwiperSlide><img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/26/18/porto-main.jpg?quality=75&width=982&height=726&auto=webp"/></SwiperSlide>
        <SwiperSlide><img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/26/18/porto-main.jpg?quality=75&width=982&height=726&auto=webp"/></SwiperSlide>
        <SwiperSlide><img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/26/18/porto-main.jpg?quality=75&width=982&height=726&auto=webp"/></SwiperSlide>
        <SwiperSlide><img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/26/18/porto-main.jpg?quality=75&width=982&height=726&auto=webp"/></SwiperSlide>

      </Swiper>


    </>
  );
}


export default DragableSlider;