import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
        <h2>MEDISERV</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nisi ipsam at deserunt in facere incidunt, doloremque accusamue  <br/> libero molestias odit. Totam repudiandae aliquid odio voluptate!</p>

        <div className="icons">
          <ul className="social-media-desktop">
            <li>
              <NavLink
                to="https://www.facebook.com">
                <FaFacebookSquare className="facebook" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.instagram.com">
                <FaInstagramSquare className="instagram" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.youtube.com">
                <FaYoutubeSquare className="youtube" />
              </NavLink>
            </li>
          </ul>
        </div>
         

    </section>
  )
}

export default Footer
