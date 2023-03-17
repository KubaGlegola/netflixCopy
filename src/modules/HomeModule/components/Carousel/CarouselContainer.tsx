import React, { useEffect, useState } from 'react'
import './Carousel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

const CarouselContainer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth/218);
    })    
  }, []);

  return (           
    <Swiper spaceBetween={8}
            slidesPerView={windowWidth/218}
            loop={true}
    >
      <SwiperSlide><img src='/images/breakingBad.png' /></SwiperSlide>
      <SwiperSlide><img src='/images/walkingDead.png' /></SwiperSlide>
      <SwiperSlide><img src='/images/peakyBlinders.png' /></SwiperSlide>
      <SwiperSlide><img src='/images/lucifer.png' /></SwiperSlide>
      <SwiperSlide><img src='/images/viking.png' /></SwiperSlide>
      <SwiperSlide><img src='/images/office.png' /></SwiperSlide>
    </Swiper>

    /* <div className="carousel__item"><img src='/images/breakingBad.png' /></div>
          <div className="carousel__item"><img src='/images/walkingDead.png' /></div>
          <div className="carousel__item"><img src='/images/peakyBlinders.png' /></div>
          <div className="carousel__item"><img src='/images/lucifer.png' /></div>
          <div className="carousel__item"><img src='/images/viking.png' /></div>
          <div className="carousel__item"><img src='/images/office.png' /></div> */    
  )
}

export default CarouselContainer