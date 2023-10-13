import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import './Slider.css';

import imagesList from "./imagesList";


export function Slider() {

    return (
        <div className="Slider">
            <div className="Slider-container">
                <Swiper
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image2} alt="" />
                        </div>
                    </SwiperSlide>

                    <br />
                    <br />
                    <br />
                </Swiper>
            </div>
        </div>
    )
}

export function Slider1() {
    return (
        <div className="Slider">
            <div className="Slider-container">
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image4} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image5} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image6} alt="" />
                        </div>
                    </SwiperSlide>

                    <br />
                    <br />
                    <br />
                </Swiper>
            </div>
        </div>
    )
}

export function Slider2() {
    return (
        <div className="Slider">
            <div className="Slider-container">
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image7} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image8} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image9} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image10} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image11} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image12} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image13} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image14} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image15} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image16} alt="" />
                        </div>
                    </SwiperSlide>

                    <br />
                    <br />
                    <br />
                </Swiper>
            </div>
        </div>
    )
}

export function Slider3() {

    return (
        <div className="Slider">
            <div className="Slider-container">
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image17} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image18} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image19} alt="" />
                        </div>
                    </SwiperSlide>

                    <br />
                    <br />
                    <br />
                </Swiper>
            </div>
        </div>
    )
}

export function Slider4() {

    return (
        <div className="Slider">
            <div className="Slider-container">
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image20} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image21} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image22} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image23} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image24} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image25} alt="" />
                        </div>
                    </SwiperSlide>

                    <br />
                    <br />
                    <br />
                </Swiper>
            </div>
        </div>
    )
}

export function Slider5() {

    return (
        <div className="Slider">
            <div className="Slider-container">
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image26} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image27} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image28} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image29} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src={imagesList.image30} alt="" />
                        </div>
                    </SwiperSlide>

                    <br />
                    <br />
                    <br />
                </Swiper>
            </div>
        </div>
    )
}

