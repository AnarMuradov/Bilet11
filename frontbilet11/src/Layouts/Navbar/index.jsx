import React from 'react'
import './index.scss'
const Navbar = () => {
  return (
    <nav className='navbar'>
         <div className='navbar__container'>
         <div className='navbar__container__logo'>
            <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png.webp" alt="" />
         </div>
         <div className='navbar__container__items'>
            <ul className='navbar__container__items__list'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
            </ul>
         </div>
         </div>
    </nav>
  )
}

export default Navbar