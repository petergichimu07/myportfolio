import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer__logo'>Peter Macharia</a>

        <ul className='permalinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About Me</a></li>
            <li><a href='#experience'>My Experience</a></li>
            <li><a href='#services'>My Services</a></li>
            <li><a href='#portfolio'>My Portfolio</a></li>
            <li><a href='#graphicsdesign'>My Graphics Design Samples</a></li>
            <li><a href='#contact'>Contact Me</a></li>
        </ul>
        <div className="footer__socials">
            <a href='https://facebook.com/petrjims.macharia'><FaFacebookF></FaFacebookF></a>
            <a href='https://www.instagram.com/masharia_peter/'><FiInstagram/></a>
            <a href='https://twitter.com/thisismacharia'><IoLogoTwitter/></a>
        </div>
        <div className="footer__copyright">
            <small>&copy; Peter Macharia. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer