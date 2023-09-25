import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div>
      <section className="header">
        <div className="text-box">
            <h1>Where medicine makes sense</h1>
            <p>'What is the good of your stars and trees, your sunrise and the wind, if they do not enter into our daily lives?"</p>
            <NavLink to='/store'>
                  <button className='btn'>Explore More</button>
            </NavLink>
        </div>
    </section>
    </div>
  )
}

export default HeroSection
