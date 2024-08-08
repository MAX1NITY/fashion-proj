import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <section id='Contact'>
        <div className='contact'>
            <input type="email" name="email" className="email" placeholder="Enter your email address" />
            <a className='subscribe-btn'>SUBSCRIBE</a>
        </div>
    </section>
  )
}

export default Contact