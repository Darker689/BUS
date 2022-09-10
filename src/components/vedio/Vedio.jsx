import React from 'react'
// Css
import './vedio.css'
// REACT-SLICK
import Slider from "react-slick";
// Icons
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'
// video
import video from '../../assets/video/reys_video/video.mp4'
// img
import img from '../../assets/images/vedio_img/img.png'
import img1 from '../../assets/images/reys_img/img.png'
// react-router-dom
import { Link } from 'react-router-dom';
// Data
const data = [
    {
        id: 1,
        img: img,
        video: video,
        btn: 'MUROJAT QILISH'
    },
    {
        id: 2,
        img: img,
        video: video,
        btn: 'MUROJAT QILISH'
    },
    {
        id: 3,
        img: img,
        video: video,
        btn: 'MUROJAT QILISH'
    },
    {
        id: 4,
        img: img,
        video: video,
        btn: 'MUROJAT QILISH'
    },
]

const Vedio = () => {
    // CARUSEL SETTINGS
    const settings = {
        // dots: true,  
        infinite: true,
        cssEase: "linear",
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              initialSlide: 2
            }
          }
        ],
        autoplay: true,
        autoplaySpeed: 2500
      };
  return (
    <div className='vedio'>
        <div className="container">
            <Slider {...settings}>
            {
                data.map((item)=>(
                    <div className="vedio_slide" key={item.id} >
                        <div className="vedio_slide_div">
                            <video src={video} controls poster={img}></video>
                        </div>
                        <Link to='/' className='vedio_slide_btn'>{item.btn}</Link>
                    </div>
                ))
            }
            </Slider>
        </div>
        <div className="reys_img">
            <img src={img1} alt="" />
        </div>
    </div>
  )
}

export default Vedio;

const NextArrow = ({onClick}) => {
    return (
      <div className='next_me next_left'  onClick={onClick}>
        <IoIosArrowForward/>
      </div>
    )
}

const PrevArrow = ({onClick}) => {
    return (
      <div className='next_me prev_left' onClick={onClick}>
        <IoIosArrowBack/>
      </div>
    )
  }