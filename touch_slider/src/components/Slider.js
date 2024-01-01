import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./slider.css";

import { data } from "../utils/data";

const Slider = () => {
  return (
    <section id="slider" className="main-slider-wrapper">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="swiper-container"
      >
        {data.map((item, key) => (
          <SwiperSlide key={key}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.info}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
