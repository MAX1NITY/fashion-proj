import React from 'react'
import "./Navbar.css"
import Logo from "./logo.svg"
import Cart from "./Cart.svg"
import List from "./list.svg"
import Search from "./Search.svg"

const Navbar = () => {
  return (
    <nav>
        <a href='/' className='logo'>
            <img src={Logo} alt="Fashion Factory" />
            Fashion Factory
        </a>
        <ul>
            <li>
                <a href="/" className='nav-link'>Home</a>
            </li>
            <li>
                <a href="/shop" className='nav-link'>Shop</a>
            </li>
            <li>
                <a href="#" className='nav-link'>About</a>
            </li>
            <li>
                <a href="#Contact" className='nav-link'>Contact</a>
            </li>
            <li>
                <a href="#"><img src={Search} alt="Search" className='search'/></a>
            </li>
            <li>
                <a href="/addToCart"><img src={Cart} alt="Cart" className='cart'/></a>
            </li>
            <li>
                <a href="#"><img src={List} alt="List" className='list'/></a>
            </li>
            
        </ul>
    </nav>
  )
}

export default Navbar