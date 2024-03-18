
import React from 'react'
import Navbar1 from './Navbar1'
import '../styles/contact.css'




 
const Contact = () => {
  
  return (
    <>
      <Navbar1 />
      <div className="container">
        <div className="contact-box">
          <div className="left"></div>
          <div className="right">
            <h2>Contact Us</h2>
            <input type="text" className='field' placeholder='Your Name' />
            <input type="text" className='field' placeholder='Your Email'/>
            <input type="text" className='field' placeholder='Your Phone' />
            <textarea className='field' placeholder='Message'></textarea>
            <button class="btn2">Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact
