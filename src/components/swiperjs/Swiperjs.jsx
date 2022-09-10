import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation'; 
// Icon
import {RiDoubleQuotesL} from 'react-icons/ri'
// img
import img from '../../assets/images/swiper_img/img.jpg'
import img1 from '../../assets/images/reys_img/img1.png'
// import required modules
import { Navigation } from "swiper";
// Css
import './swiperjs.css'
// Data
const data = [
    {
        id: 1,
        img: img,
        ism: 'Амирхон',
        tavsiya: 'жуда чиройли автобус',
        icon: <RiDoubleQuotesL/>,
        text: 'Ман Тошкентдан Москвага шу янги автобуслар билан келдим. Шароитлари яхши. Аслида ишонмагандим, лекин хакикат экан. Бундан кейин шу компанияни автобуслари билан Россияга бориб келаман'
    },
    {
        id: 1,
        img: img,
        ism: 'Амирхон',
        tavsiya: 'жуда чиройли автобус',
        icon: <RiDoubleQuotesL/>,
        text: 'Ман Тошкентдан Москвага шу янги автобуслар билан келдим. Шароитлари яхши. Аслида ишонмагандим, лекин хакикат экан. Бундан кейин шу компанияни автобуслари билан Россияга бориб келаман'
    },
    {
        id: 1,
        img: img,
        ism: 'Амирхон',
        tavsiya: 'жуда чиройли автобус',
        icon: <RiDoubleQuotesL/>,
        text: 'Ман Тошкентдан Москвага шу янги автобуслар билан келдим. Шароитлари яхши. Аслида ишонмагандим, лекин хакикат экан. Бундан кейин шу компанияни автобуслари билан Россияга бориб келаман'
    },
    {
        id: 1,
        img: img,
        ism: 'Амирхон',
        tavsiya: 'жуда чиройли автобус',
        icon: <RiDoubleQuotesL/>,
        text: 'Ман Тошкентдан Москвага шу янги автобуслар билан келдим. Шароитлари яхши. Аслида ишонмагандим, лекин хакикат экан. Бундан кейин шу компанияни автобуслари билан Россияга бориб келаман'
    },
    {
        id: 1,
        img: img,
        ism: 'Амирхон',
        tavsiya: 'жуда чиройли автобус',
        icon: <RiDoubleQuotesL/>,
        text: 'Ман Тошкентдан Москвага шу янги автобуслар билан келдим. Шароитлари яхши. Аслида ишонмагандим, лекин хакикат экан. Бундан кейин шу компанияни автобуслари билан Россияга бориб келаман'
    },
    {
        id: 1,
        img: img,
        ism: 'Амирхон',
        tavsiya: 'жуда чиройли автобус',
        icon: <RiDoubleQuotesL/>,
        text: 'Ман Тошкентдан Москвага шу янги автобуслар билан келдим. Шароитлари яхши. Аслида ишонмагандим, лекин хакикат экан. Бундан кейин шу компанияни автобуслари билан Россияга бориб келаман'
    }
]


const Swiperjs = () => {
  return (
    <div className='swiperjs'>
        <div className="container">
            <div className="swiperjs_main">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={40}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[ Navigation ]}
                    navigation={true}
                    loop={true}
                    breakpoints={{
                        300: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 50,
                        },
                      }}
                    className="mySwiper"
                >
                    {
                        data.map(item => (
                            <SwiperSlide >
                                <div className="swiperjs_main_swip" key={item.id}>
                                    <div className="swiperjs_main_swip_img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="swiperjs_main_swip_bottom">
                                        <p className='swiperjs_main_swip_bottom_p'>{item.ism}</p>
                                        <p className='swiperjs_main_swip_bottom_p1'>{item.tavsiya}</p>
                                        <i className='swiperjs_main_swip_bottom_i'>{item.icon}</i>
                                        <p className='swiperjs_main_swip_bottom_p2'>{item.text}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
        <div className="reys_img">
            <img src={img1} alt="" />
        </div>
    </div>
  )
}

export default Swiperjs