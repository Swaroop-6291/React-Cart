import React from 'react'
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer id='about'>
      <div className="about-us">
            <h1>About Us</h1>
            <p>
            <span>Dukkan.com</span> is an Indian e-commerce company, headquartered in Bangalore, and incorporated in Singapore as a private limited company. The company initially focused on online book sales before expanding into other product categories such as consumer electronics, fashion, home essentials, groceries, and lifestyle products.
            </p>
          
        </div>

        <div className='contact'>
          <h1>Contact Us</h1>
           <div className="instagram">
               <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"><AiFillInstagram/>Instagram</a>
            </div>
           <div className="facebook">
             <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><AiFillFacebook/>Facebook</a>
            </div>
           <div className="youtube">
              <a href="http://" target="_blank" rel="noopener noreferrer" >
                <AiFillYoutube/>YouTube
               </a>
            </div>
           <div className="linked-in">
             <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin/>Linked-In</a>
           </div>
        </div>
    </footer>
  )
}

export default Footer
