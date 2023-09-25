import React from 'react'
import OurShop from './components/OurShop'

const About = () => {
  return (
    <>
    <section className="about-us">
        <div className="row">
            <div className="about-col1">
                <h1>Let our meds help you out</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quo, molestias, quod officia rem minima reprehenderit eligendi quis nulla ullam voluptate consequuntur ratione provident saepe. Ut, assumenda eaque vel hic expedita fugit consectetur asperiores rem atque numquam sit, accusamus laborum quisquam quam! Culpa minima quae dicta ab libero aperiam nobis?</p>
            

            </div>
            <div className="about-col2">
                <img src="./img/aboutPharma.jpg" alt="" />
            </div>
        </div>

    </section>

   <OurShop />
</>
  )
}

export default About
