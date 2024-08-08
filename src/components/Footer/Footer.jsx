import React from 'react'
import "./Footer.css"
import Logo from "./logo.svg"
import IG from "./IG.svg"
import X from "./x.svg"
import whatsapp from "./whatsapp.svg"

const Footer = () => {
  return (
    <section id='Footer'>
        <div className='logo-handles'>
        <div className='footer'>
            <a href='index.html'><img src={Logo} className="logo-foot"></img></a>
        </div>
        <div className='handles'>
            <img src={X} className="x"></img>
            <img src={IG} className="IG"></img>
            <img src={whatsapp} className="whatsapp"></img>
        </div>
        </div>
        <div className='links-foot'>
            <div className='link1'>
            <a href='#' className='links-footer'>Home</a>
            <a href='#' className='links-footer'>About</a>
            <a href='#' className='links-footer'>Work</a>
            <a href='#' className='links-footer'>Process</a>
            </div>
            <div className='link2'>
            <a href='#' className='links-footer'>Store</a>
            <a href='#' className='links-footer'>Blog</a>
            <a href='#' className='links-footer'>Shopping List</a>
            </div>
        </div>
    </section>
  )
}

export default Footer