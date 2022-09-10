import React from 'react'
// Css
import './footer.css'
// Icon
import {IoLogoInstagram, IoLogoYoutube} from 'react-icons/io'
import {SiOdnoklassniki} from 'react-icons/si'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
          <div className="footer_main">
            <p className='footer_main_p'>© 2022 йил сайт тузилган</p>
            <div className="footer_main_div">
              <p className='footer_main_div_p'>ДАМ ОЛМАЙ ИШЛАЙМИЗ 24/7</p>
              <a href="tel: +998906179743" className='hero_main_p1_link hero_main_p1_link1'>+998 90 617-97-43</a>
            </div>
            <div className='footer_main_div1'>
              <a href='https://www.instagram.com/' className="footer_main_div1_icon">
                <IoLogoInstagram/>
              </a>
              <a href='https://www.youtube.com/' className="footer_main_div1_icon">
                <IoLogoYoutube/>
              </a>
              <a href='https://ok.ru/' className="footer_main_div1_icon">
                <SiOdnoklassniki/>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer