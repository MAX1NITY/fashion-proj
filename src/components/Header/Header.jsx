import React from 'react'
import "./Header.css"
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <header>
        <div className='wrapper'>
            <div className='cta'>
            <h2 className="course-name">Unleash Your Style with Fashion Factory Clothing.</h2>
            <p>Fashion factory is your go-to destination for trendy and unique fashion piece</p>
            <a href="#Products" className='shop-btn'>
                Shop Now 
            </a>
            </div>
        </div>
    </header>
  )
}

export default Header