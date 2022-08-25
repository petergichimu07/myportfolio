import React from 'react'
import CTA from './CTA'
import './Header.css'
import Headersocials from './Headersocials'
import Me from './../../assets/Peterpic1.png'
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I am</h5>
        <h1>Peter Macharia</h1>
        <h5>Web Developer | Graphics Designer | Music Enthusiast</h5>
        <CTA/>
        <Headersocials/>
        <img src={Me} alt = "me" className='me'/>
        
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header