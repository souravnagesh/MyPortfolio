import './Footerstyle.css'
import React from 'react'
import {FaHome,FaPhone,FaMailBulk,FaLinkedin,FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:'#fff', marginRight:'2rem'}} />
                </div>
                <div>
                    <p>new bankcolony ,konankunte </p>
                    <p>Bengaluru</p>
                </div>
                <div className='phone'>
                <h4>
                <FaPhone size={20} style={{color:'#fff', marginRight:'2rem'}} />
                +91 8277704469
                </h4>
                
                </div>
                <div className='email'>
                <h4>
                <FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}} />
                souravn200117@gmail.com
                </h4>
                
                </div>
            </div>
            <div className='right'>
                    <h4>About</h4>
                    <p>This is my social media links. You can contact me by clicking any of the below links</p>
                     <div className='social'>
                <FaInstagram size={20} style={{color:'#fff', marginRight:'2rem'}} />
                <FaLinkedin size={20} style={{color:'#fff', marginRight:'2rem'}} />


                     </div>
            </div>

        </div>
    </div>
  )
}

export default Footer;