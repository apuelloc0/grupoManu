import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './SliderPrincipal.css';

import sliderPrincipal1 from "./imagesSlider/petroleo.jpg";
import sliderPrincipal2 from "./imagesSlider/backgroundPetro.jpg";
import sliderPrincipal3 from "./imagesSlider/backgroundPetro2.jpg";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import Fade from 'react-reveal/Fade';


export default function SliderPrincipal() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className='slider'>
                    <img src={sliderPrincipal1} />

                    <div className="textSlider">
                        <Fade bottom>
                            <h2><span>Somos especialistas en proveer</span> <br /><span>soluciones para la industria del</span> <br /> <span>Petróleo y Gas</span></h2>
                        </Fade>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderPrincipal2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderPrincipal3} />
                </SwiperSlide>

            </Swiper>
        </>
    );
}
