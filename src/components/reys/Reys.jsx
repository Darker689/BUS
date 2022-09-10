import React from 'react'
// Css
import './reys.css'
// img
import img from '../../assets/images/reys_img/img.png'
import img1 from '../../assets/images/reys_img/img1.png'
import img2 from '../../assets/images/reys_img/img2.png'
// video
import video from '../../assets/video/reys_video/video.mp4'
const Reys = () => {
  return (
    <div className='reys'>
        <div className="reys_img">
            <img src={img} alt="" />
        </div>
        <div className="container">
            <div className="reys_main">
                <div className="reys_main_text">
                    <p className='reys_main_text_p'>АВТОБУС ТОШКЕНТДАН МОСКВАГАЧА‼️</p>
                    <p className='reys_main_text_p1'>📆 Рейсларимиз хар куни</p>
                    <p className='reys_main_text_p2'>✅ Автобус янги 2019 йил</p>
                    <p className='reys_main_text_p1'>-Кондиционер бор</p>
                    <p className='reys_main_text_p1'>-Телевизор бор</p>
                    <p className='reys_main_text_p1'>-Туалети бор</p>
                    <p className='reys_main_text_p2'>💰 Чипта нархи: 1.200.000 сум</p>
                    <p className='reys_main_text_p2'>🌎 Адрес:</p>
                    <p className='reys_main_text_p1'>📌 Тошкент Куйлук, Рохат стоянка</p>
                    <p className='reys_main_text_p2'>☎️ Тел: Узб <a href="tel: +998906179743" className='hero_main_p1_link qora'>+998 90 617-97-43</a>, Россия <a href="tel: +79652129884" className='hero_main_p1_link qora'>+79652129884</a></p>
                </div>
                <div className="reys_main_right">
                    <video src={video} controls poster={img2}></video>
                </div>
            </div>
        </div>
        <div className="reys_img">
            <img src={img1} alt="" />
        </div>
    </div>
  )
}

export default Reys