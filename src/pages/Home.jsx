import React from 'react'
import Biletlar from '../components/biletlar/Biletlar'
import Elon from '../components/elon/Elon'
import Elon1 from '../components/elon1/Elon1'
// components
import Hero from '../components/hero/Hero'
import Reys from '../components/reys/Reys'
import Swiperjs from '../components/swiperjs/Swiperjs'
import Telegram from '../components/telegram/Telegram'
import Vedio from '../components/vedio/Vedio'

const Home = () => {
  return (
    <>
      <Hero/> 
      <Reys/> 
      <Vedio/>
      <Elon/>
      <Biletlar/>
      <Elon1/>
      <Swiperjs/>
      <Telegram/>
    </>
  )
}

export default Home