import React from 'react'
// Css
import './navbar.css'
// memo
import {memo} from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="navbar_main">
                <h1 className='navbar_main_h1'>AVTOBUS TOSHKENT-MOSKVA</h1>
            </div>
        </div>
    </div>
  )
}

export default memo(Navbar)