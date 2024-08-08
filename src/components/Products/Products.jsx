import React from 'react'
import "./Products.css"
import YSD from "./Rectangle10.png"
import BSS from "./Rectangle11.png"
import PG from "./Rectangle12.png"
import BBJ from "./Rectangle13.png"
import BP from "./Rectangle14.png"
import BS from "./Rectangle15.png"
import BG from "./Rectangle16.png"
import JT from "./Rectangle17.png"
import red from "./ellipseRed.svg"
import green from "./ellipseGreen.svg"
import Naira from "./Naira.svg"
import addToCart from "./addToCart.svg"

const Products = () => {
  return (
    <section id="Products" className="product">
        <div className='wrapper'>
            <h2 className='Our-Products'>Our Products</h2>
            <div className='content-container'>
                <div className='post-ysd'>
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

                <div className='post'>
                    <a href='#'>
                        <img src={BSS} alt='' className='clothing'></img>
                    </a>

                    <a href='#' className='details'>
                        <p className='post-title'>Black silk skirt</p>
                        <p className='post-info'>Casual Wear</p>
                        <a href='#' className='buy'>
                        <img src={addToCart} className="addToCart"></img>
                    </a>
                        <p className='price'><img src={Naira} />20,000</p>
                    </a>
                    
                </div>

                <div className='post'>
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

                <div className='post-ysd'>
                    <div className='tag-red'>-30%</div>
                    <a href='#'>
                        <img src={BBJ} alt='' className='clothing'></img>
                    </a>

                    <a href='#' className='details'>
                        <p className='post-title'>Black Blazer Jacket</p>
                        <p className='post-info'>Office Wear</p>
                        <a href='#' className='buy'>
                        <img src={addToCart} className="addToCart"></img>
                    </a>
                        <div className='price-discount'>
                        <p className='price'><img src={Naira} />21,000</p><p className='discount'><img src={Naira} />30,000</p>
                        </div>
                    </a>
                    
                </div>

                <div className='post'>
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

                <div className='post'>
                    <div className='tag-green'>New</div>
                    <a href='#'>
                        <img src={BS} alt='' className='clothing'></img>
                    </a>

                    <a href='#' className='details'>
                        <p className='post-title'>Black skirt</p>
                        <p className='post-info'>Casual Wear</p>
                        <a href='#' className='buy'>
                        <img src={addToCart} className="addToCart"></img>
                    </a>
                        <p className='price'><img src={Naira} />10,000</p>
                    </a>
                    
                </div>

                <div className='post'>
                    <a href='#'>
                        <img src={BG} alt='' className='clothing'></img>
                    </a>

                    <a href='#' className='details'>
                        <p className='post-title'>Brown Gown</p>
                        <p className='post-info'>Office Wear</p>
                        <a href='#' className='buy'>
                        <img src={addToCart} className="addToCart"></img>
                    </a>
                        <p className='price'><img src={Naira} />40,000</p>
                    </a>
                    
                </div>

                <div className='post-ysd'>
                    <div className='tag-red'>-50%</div>
                    <a href='#'>
                        <img src={JT} alt='' className='clothing'></img>
                    </a>

                    <a href='#' className='details'>
                        <p className='post-title'>Jean Trouser</p>
                        <p className='post-info'>Casual Wear</p>
                        <a href='#' className='buy'>
                        <img src={addToCart} className="addToCart"></img>
                    </a>
                        <div className='price-discount'>
                        <p className='price'><img src={Naira} />25,000</p><p className='discount'><img src={Naira} />50,000</p>
                        </div>
                    </a>
                    
                </div>
            </div>
            {/* <div className='btn-container'>
                <a href='#' className='btn-more'>
                    Show More
                </a>
            </div>
            <div className='modal' id='modal'>
                <div className='modal-inner'>
                    <h1>Item has been added to cart</h1>
                    <a href='#' id='closeModal'>
                        Close
                    </a>
                </div>
            </div> */}
        </div>
    </section>
  )
}

// const openBtn = document.getElementById("openModal")
// const closeBtn = document.getElementById("closeModal")
// const modal = document.getElementById("modal")

// openBtn.addEventListener("click", () => {
//     modal.classList.add("open")
// })

// closeBtn.addEventListener("click", () => {
//     modal.classList.remove("open")
// })

export default Products