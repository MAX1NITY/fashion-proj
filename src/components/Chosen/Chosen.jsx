import React from 'react'
import "./Chosen.css"
import BSS from "./BSS.png"
import CJT from "./CJT.png"
import Naira from "./Naira.svg"

const Chosen = () => {
  return (
    <section id="Chosen">
        <div className='wrapper'>
            <div className='title'>
            <h1 className='title-cart'>Cart</h1>
            </div>
            <div className='table-ctn'>
            <table className='table' width={1200}>
                <tr align="center" className='top'>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                <tr align="center">
                    <td className='img-td'><img src={BSS} className="BSS"></img>Black silk skirt</td>
                    <td>₦ 20,000</td>
                    <td>3</td>
                    <td>₦ 60,000</td>
                </tr>
                <tr align="center">
                <td className='img-td'><img src={CJT} className="CJT"></img>Cargo Jean Trouser</td>
                <td>₦ 50,000</td>
                <td>1</td>
                <td>₦ 50,000</td>
                </tr>
            </table>
            </div>
            <div className='all'>
            <div className='shipping'>
                <h1>Shipping</h1>
                <a href='#' className='free-ship'>Free Shipping</a>
            </div>
            <div className='total'>
                <div className='ctn-h1'>
                <h1 className='total-h1'>Total</h1><h1 className='total-h1'><img src={Naira}></img>110,000</h1>
                </div>
                <a href='/check' className='Proceed'>
                Proceed to Check out
                </a>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Chosen