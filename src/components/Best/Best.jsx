import React from 'react'
import "./Best.css"
import YSD from "./Rectangle10.png"
import addToCart from "./addToCart.svg"
import Naira from "./Naira.svg"
import PG from "./Rectangle12.png"
import BP from "./Rectangle14.png"

const Best = () => {
  return (
    <section id='Best'>
      <div className='best'>
      <h1 className='best-h1'>Best Sellers</h1>
      <p className='best-p'>Our fast selling product</p>
      <a href='#' className='explore'>Explore More</a>
      </div>
      <div className='pictures'>
      <div className='post-ysd-b'>
                    <div className='tag-red'>-50%</div>
                    <a href='#'>
                        <img src={YSD} alt='' className='clothing'></img>
                    </a>

                    <a href='#' className='details'>
                        <p className='post-title'>Yellow Summer Dress</p>
                        <p className='post-info'>Casual Wear</p>
                        <a href='#' className='buy'>
                        <img src={addToCart} className="addToCart"></img>
                    </a>
                        <div className='price-discount'>
                        <p className='price'><img src={Naira} />15,000</p><p className='discount'><img src={Naira} />30,000</p>
                        </div>
                    </a>
                    
                </div>

                <div className='post-ysd-b'>
                    <a href='#'>
                        <img src={BP} alt='' className='clothing'></img>
                    </a>

                    <a href='#' className='details'>
                        <p className='post-title'>Black Pants</p>
                        <p className='post-info'>Office Wear</p>
                        <a href='#' className='buy'>
                        <img src={addToCart} className="addToCart"></img>
                    </a>
                        <p className='price'><img src={Naira} />25,000</p>
                    </a>

                </div>

                <div className='post-ysd-b'>
                    <div className='tag-green'>New</div>
                    <a href='#'>
                        <img src={PG} alt='' className='clothing'></img>
                    </a>

                    <a href='#' className='details'>
                        <p className='post-title'>Prom Gown</p>
                        <p className='post-info'>Dinner Wear</p>
                        <a href='#' className='buy'>
                        <img src={addToCart} className="addToCart"></img>
                    </a>
                        <p className='price'><img src={Naira} />50,000</p>
                    </a>
                    
                </div>
                </div>
    </section>
  )
}

export default Best