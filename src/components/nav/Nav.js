/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './Nav.css'
import { AiOutlineHome, AiOutlineUser } from  'react-icons/ai'
import { BsWindowSidebar } from 'react-icons/bs'
import { BiCode, BiMessageAlt } from 'react-icons/bi'

export default function Nav() {
  const[activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a href='#' value='#' className={(activeNav ===  '#') ? 'active' : ''}  onClick={()=> setActiveNav('home')}> <AiOutlineHome /> </a>
      <a href='#about' value='#about' className={(activeNav ===  'about') ? 'active' : ''} onClick={()=> setActiveNav('about')}> <AiOutlineUser /> </a>
      <a href='#experience' value='#experience' className={(activeNav ===  'experience') ? 'active' : ''}  onClick={()=> setActiveNav('experience')} > <BiCode /> </a>
      <a href='#portfolio' value='#portfolio' className={(activeNav ===  'portfolio') ? 'active' : ''}  onClick={()=> setActiveNav('portfolio')}> <BsWindowSidebar /> </a>
      <a href='#contact' value='#contact' className={(activeNav ===  'contact') ? 'active' : ''}  onClick={()=> setActiveNav('contact')} > <BiMessageAlt /> </a>
    </nav>
  )
}
