import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

export default function HeaderSocials() {
  return (
    <div className='headersocials'>
     <a href="https://www.linkedin.com/in/gerson-henrique/" target="_blank" rel='noreferrer'> <AiFillLinkedin /> </a>
     <a href="https://github.com/gerson-henrique/" target="_blank" rel='noreferrer' > <AiFillGithub /> </a>
    </div> )
}

