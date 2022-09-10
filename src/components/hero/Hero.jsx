// memo
import React, { memo } from 'react'
// Css
import './hero.css'
// Icons
import {FaToilet, FaRegClock, FaBusAlt} from 'react-icons/fa'
import {FiWind} from 'react-icons/fi'
import {IoTvSharp} from 'react-icons/io5'
// data
const data = [
  {
    id: 1,
    icon: <FiWind/>,
    nomi: 'KONDITSIONER BOR'
  },
  {
    id: 2,
    icon: <IoTvSharp/>,
    nomi: 'TV BOR'
  },
  {
    id: 3,
    icon: <FaToilet/>,
    nomi: 'TUALET BOR'
  },
  {
    id: 4,
    icon: <FaRegClock/>,
    nomi: 'REYSLAR HAR KUN'
  },
  {
    id: 5,
    icon: <FaBusAlt/>,
    nomi: 'YANGI AVTOBUS -2019 YIL'
  }
]

const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
          <div className="hero_main">
            <p className='hero_main_p'>ADRESS: QUYLUQ. ROXAT STOYANKA</p>
            <div className="hero_main_desc">
              {
                data.map(item => (
                  <div className="hero_main_desc_div" key={item.id}>
                    <i>{item.icon}</i>
                    <p>{item.nomi}</p>
                  </div>
                ))
              }
            </div>
            <p className='hero_main_p1'>БРОН КИЛИШ Уз <a href="tel: +998906179743" className='hero_main_p1_link'>+998 90 617-97-43</a>, Россия <a href="tel: +79652129884" className='hero_main_p1_link'>+79652129884</a></p>
          </div>
        </div>
    </div>
  )
}

export default memo(Hero)