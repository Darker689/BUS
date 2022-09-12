import React from 'react'
// Icon
import {FaTelegramPlane} from 'react-icons/fa'
// CSs
import './telegram.css'

const Telegram = () => {
  return (
    <div className="telegram">
        <a href='https://t.me/toshkent_rossiya_avtobus' className='teleg'>
            <FaTelegramPlane/>
        </a>
    </div>
  )
}

export default Telegram