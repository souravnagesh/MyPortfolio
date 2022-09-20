import './Heroimgstyle.css';
import Introimg from '../assests/intro.jpg';
import React from 'react'
import {Link} from 'react-router-dom';

const  Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
          <img className='intro-img' src={Introimg} alt='Introimg' />
        </div>
        <div className='content'>
             <p>Hello, this is Sourav Nagesh</p>
             <h1>Web Developer.</h1>

             <div>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/contact' className='btn-light'>Contact</Link>

             </div>
        </div>
    </div>
  )
}

export default  Heroimg
