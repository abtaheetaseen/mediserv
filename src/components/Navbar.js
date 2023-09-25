import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillCartCheckFill} from "react-icons/bs";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const {cartTotalQuantity} = useSelector(state => state.cart);

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="nav-logo">
         <h1>
               <span className="logo1">MEDI</span>
               <span className="logo2">SERV</span>
              </h1>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>

            <li>
              <NavLink to="/store">Store</NavLink>
            </li>

            <li>
              <NavLink to="/cart"><BsFillCartCheckFill className="cart-icon"/> 
              <span className="cart-total-item">{cartTotalQuantity} </span></NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <NavLink to="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
