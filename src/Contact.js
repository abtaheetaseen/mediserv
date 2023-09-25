import React from 'react'
import {
  AiFillHome,
  AiTwotoneMail
} from "react-icons/ai";

import {
  BsFillTelephoneInboundFill
} from "react-icons/bs";

const Contact = () => {
  return (
    <section className="contact-us">
            <div className="contact-us-left">
                <div className='contact-full'>
                <AiFillHome className='contact-icon'/>
                    <span>
                        <h5>XYZ Road, ABC Building</h5>
                        <p className='contact-p'>DHAKA</p>
                    </span>
                </div>

                <div className='contact-full'>
                    <BsFillTelephoneInboundFill className='contact-icon'/>
                    <span>
                        <h5>+880-1931183851</h5>
                        <p className='contact-p'>Monday to Saturday, from 8am to 6pm</p>
                    </span>
                </div>

                <div className='contact-full'>
                <AiTwotoneMail className='contact-icon'/>
                    <span>
                        <h5>info@trentuniversity.com</h5>
                        <p className='contact-p'>Email us for more query</p>
                    </span>
                </div>
            </div>
            <div className="contact-us-right">
                <form action="https://formspree.io/f/xdorwwno" method='POST' className='contact-form'>
                    <input type="text" placeholder="Name" required name='name'/>
                    <input type="email" placeholder="Email" required name='email'/>
                    <textarea rows="8" placeholder="Message" required name='message'></textarea>

                    <button type="submit" className="contact-btn">Send Message</button>
        
                </form>
                
            </div>
    </section>
  )
}

export default Contact
