import React from 'react'
import "./Collections.css"
import Evening from "./Rectangle4.png"
import Office from "./Rectangle6.png"
import Casual from "./Rectangle8.png"

const Collections = () => {
  return (
    <section id="collections">
        <div className='wrapper'>
            <div className='title'>
            <h2 className='title-h2'>Browse Our Collection</h2>
            <p className='title-p'>Discover the perfect outfit to fit your style</p>
            <div className='content-container'>
                <div className='post'>
                    <a href='#'>
                        <img src={Evening} alt=''></img>
                    </a>

                    <a href='#'>
                        <p className='post-title'>Evening Gowns</p>
                    </a>
                </div>

                <div className='post'>
                    <a href='#'>
                        <img src={Office} alt=''></img>
                    </a>

                    <a href='#'>
                        <p className='post-title'>Office wear</p>
                    </a>
                </div>

                <div className='post'>
                    <a href='#'>
                        <img src={Casual} alt=''></img>
                    </a>

                    <a href='#'>
                        <p className='post-title'>Casual Wears</p>
                    </a>
                </div>
            </div>
            {/* </div className="content-container">
                <div className='pictures-c'>
            <a href='#'>
            <figure>
                <img src={Evening} className="evening"></img>
                <figcaption>Dinner Wears</figcaption>
            </figure>
            </a>
            <a href='#'>
            <figure>
                <img src={Office} className="office"></img>
                <figcaption>Office Wears</figcaption>
            </figure>
            </a>
            <a href="#">
                <figure>
                <img src={Casual} className="casual"></img>
                <figcaption>Casual Wears</figcaption>
                </figure>
            </a>
            </div> */}
            </div>
        </div>
    </section>
  )
}

export default Collections