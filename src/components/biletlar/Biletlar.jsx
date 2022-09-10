import React from 'react'
// Css
import './biletlar.css'
// Img
import img from '../../assets/images/biletlar_img/img.jpg'
import img1 from '../../assets/images/biletlar_img/img1.jpg'
import img2 from '../../assets/images/biletlar_img/img2.jpg'
import img3 from '../../assets/images/biletlar_img/img3.jpg'
// react-router-dom
import { Link } from 'react-router-dom'
// Data
const data = [
    {
        id: 1,
        kun: 'ХАР КУНИ',
        img: img,
        manzil: 'ТОШКЕНТ МОСКВА',
        vaqt: 'СОАТ 18:00 ДА',
        narxi: '1.200.000 сум',
        nomi: 'ЧИПТА НАРХИ',
        btn: 'Билет заказ килиш'
    },
    {
        id: 2,
        kun: 'ХАР КУНИ',
        img: img1,
        manzil: 'ТОШКЕНТ САНКТ ПЕТЕРБУРГ',
        vaqt: 'СОАТ 18:00',
        narxi: '1.650.000 сум',
        nomi: 'ЧИПТА НАРХИ',
        btn: 'Билет заказ килиш'
    },
    {
        id: 3,
        kun: 'ХАР КУНИ',
        img: img2,
        manzil: 'ТОШКЕНТ КАЗАНЬ',
        vaqt: 'СОАТ 16:00',
        narxi: '1.200.000 сум',
        nomi: 'ЧИПТА НАРХИ',
        btn: 'Билет заказ килиш'
    },
    {
        id: 4,
        kun: 'ХАР КУНИ',
        img: img3,
        manzil: 'ТОШКЕНТ НОВОСИБИРСК',
        vaqt: 'СОАТ 16:00',
        narxi: '1.250.000 сум',
        nomi: 'ЧИПТА НАРХИ',
        btn: 'Билет заказ килиш'
    }
]

const Biletlar = () => {
  return (
    <div className='biletlar'>
        <div className="container">
            <div className="biletlar_main">
                {
                    data.map(item => (
                        <div className='biletlar_main_div' key={item.id}>
                            <div className="biletlar_main_div_left">
                                <p className='biletlar_main_div_left_p'>{item.kun}</p>
                                <div className="biletlar_main_div_img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="biletlar_main_div_left_div">
                                    <p className='biletlar_main_div_left_div_p'>{item.manzil}</p>
                                    <p className='biletlar_main_div_left_div_p1'>{item.vaqt}</p>
                                </div>
                            </div>
                            <div className="biletlar_main_div_right">
                                <div className="biletlar_main_div_right_div">
                                    <p className='biletlar_main_div_right_div_p'>{item.narxi}</p>
                                    <p className='biletlar_main_div_right_div_p1'>{item.nomi}</p>
                                </div>
                                <Link to='/' className='biletlar_main_div_right_link'>{item.btn}</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Biletlar