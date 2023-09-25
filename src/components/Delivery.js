import React from 'react'
import { NavLink } from 'react-router-dom'

const Delivery = () => {
  return (
    <section className="delivery">
    <div className="delivery-row">
    
        <div className="delivery-col2">
            <img src="./img/delivery.jpg" alt="" />
        </div>

        <div className="delivery-col1">
            <h1>Hassle-free delivery with us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quo, molestias, quod officia rem minima reprehenderit eligendi quis nulla ullam voluptate consequuntur ratione provident saepe. Ut, assumenda eaque vel hic expedita fugit consectetur asperiores rem atque numquam sit, accusamus laborum quisquam quam! Culpa minima quae dicta ab libero aperiam nobis?</p>
        
        <NavLink to='/store'>
            <button className="delivery-btn">
                Order Now
            </button>
        </NavLink>
        </div>

    </div>

</section>
  )
}

export default Delivery
