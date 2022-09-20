import './Formstyle.css';
import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form action="">
            <label htmlFor="name">Your  Name</label>
            <input type="text " id='name' />   
            <label htmlFor="mail">E-mail</label>
            <input type="email " id='mail' />   
            <label htmlFor="sub">Subject </label>
            <input type="text " id='sub' />   
            <label htmlFor="msg">Message</label>
            <textarea  id='msg'cols="30" rows="6" placeholder='Type your message'></textarea>
            <button className='btn'>Submit</button>  
        </form>
    </div>
  )
}

export default Form;