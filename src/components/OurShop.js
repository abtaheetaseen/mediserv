import React from 'react'
import {
    PiFirstAidFill
  } from "react-icons/pi";

const OurShop = () => {
  return (
    <section className="campus">
<h1>Check out our medicine corners</h1>

<div className="shop-row">
    <div className="campus-column">
        <img src="./img/shop1.avif" alt="shop1" />
        <div className="layer">
            <PiFirstAidFill className='shop-icon'/>
            <p>Jamuna Future Park, Bashundhara</p>
            <h3>Dhaka</h3>
        </div>
    </div>

    <div className="campus-column">
        <img src="./img/shop2.avif" alt="shop2" />
        <div className="layer">
        <PiFirstAidFill className='shop-icon'/>
            <p>222, Royal Agha, Jaflong</p>
            <h3>Sylhet</h3>
        </div>
    </div>

    <div className="campus-column">
        <img src="./img/shop3.avif" alt="shop3" />
        <div className="layer">
            <PiFirstAidFill className='shop-icon'/>
            <p>19/1, Mongla Port Side Road</p>
            <h3>Chittagong</h3>
        </div>
    </div>

</div>

</section>
  )
}

export default OurShop
