import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/odedh92" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/oded-haina/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
    </div>
  )
}

export default HeaderSocials