import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
    <div>
      <a href="#" className='footer_logo'>Oded Haina</a>
      <ul className='footerlinks'>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>

      <div className="footer_socials">
      <a href="https://github.com/odedh92" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/oded-haina/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
      </div>
    </div>
    </footer>
  )
}

export default Footer