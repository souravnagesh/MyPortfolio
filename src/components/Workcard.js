import './Workcardstyle.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Workcard = (props) => {
  return (
    <div className='project-card'>
                <img src={props.imgsrc }  alt="image" />
                <h2 className='project-title'> {props.title}</h2>
                <div className='pro-detail'>
                    <p>{props.text}</p>
                    <div className='pro-btns'>
                        {/* <NavLink to={props.source} className='btn'>Source</NavLink> */}
                        <a href={props.source} className='btn'>Source</a>
                         
                    </div>
                </div> 
            </div>
  )
}

export default Workcard;