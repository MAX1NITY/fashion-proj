import React from 'react'
import arrow from "./arrow-l.svg"
import "./checkout.css"

const checkout = () => {
    function toggleButtons(activeButtonId, inactiveButtonId) {
        const activeButton = document.getElementById(activeButtonId);
        const inactiveButton = document.getElementById(inactiveButtonId);
    
        activeButton.classList.add('blue');
        activeButton.classList.remove('grey');
    
        inactiveButton.classList.add('grey');
        inactiveButton.classList.remove('blue');
    }
  return (
    <section id='checkout'>
        <div className='wrapper'>
            <div className='title-check'>
                <img src={arrow} className="arrow-img"></img>
                <h1 className='title-h1'>Checkout</h1>
            </div>
            <div className='contact-info'>
                <h1>1. Contact information</h1>
                First Name:<input type="text" name="lastName" className='name-n' placeholder='pls' />
                Last Name<input type="text" name="firstName" className='name-n' placeholder='Balls' />
                Phone Number:<input type="text" name="firstName" className='name-n' placeholder='Balls' />
                First Name:<input type="email" name="firstName" className='name-n' placeholder='Balls' />
            </div>
            <div className='delivery'>
                <h1>2. Delivery Method</h1>
                <button id="button1" class="button grey" onclick="toggleButtons('button1', 'button2')">Button 1</button>
    <button id="button2" class="button grey" onclick="toggleButtons('button2', 'button1')">Button 2</button>
            </div>
        </div>
    </section>   
  )
}



export default checkout