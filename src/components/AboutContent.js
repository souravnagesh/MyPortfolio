import "./Aboutcontentstyle.css";
import React from 'react'
import { Link } from "react-router-dom";
import pro4 from "../assests/photo11.jpg";
import pro5 from "../assests/photo12.jpg"; 


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I</h1>
            <p>My self Sourav Nagesh. <br /> I'm a MERN stack developer</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
        <div className="img-container">
        <div className="img-stack top">
                <img src={pro4} alt="image" className="img" />
            </div>
            <div className="img-stack bottom">
                <img src={pro5} alt="image" className="img" />
            
            </div>
        </div>
            
           
        </div>
    </div>
  )
}

export default AboutContent; 