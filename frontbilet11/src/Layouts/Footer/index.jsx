import React from 'react'
import './style.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__container__text'>
        Copyright ©2024 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i> by <span>Colorlib</span>
        </div>
        <div className='footer__container__icon'>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-solid fa-globe"></i>
        <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer