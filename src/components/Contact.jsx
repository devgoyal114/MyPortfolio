import React from 'react'
import "./Contact.css"
import "../App.scss"
import Loader from 'react-loaders'

function Contact() {
  return (
    <div className='contact-wrapper'>
        <Loader type='square-spin'/>
    <div className='contact-container'>
    <div className='contact-me'>
     <span>&lt;h1&gt;</span> <h1>Contact Me</h1> <span>&lt;h1/&gt;</span>
      </div>
      <p>I am interested in freelance opportunities – especially
            ambitious or large projects. However, if you have other request or
            question, don’t hesitate to contact me using below form
            either.</p>
            <div className='form-container'>
                <div className='name'>
                <input type='text' placeholder='Name'/>
                <input type='email' placeholder='email'/>
                </div>
                <br/>
                <input type='text' placeholder='Subject'/>
                <br/><br/>
                <textarea type='text' placeholder='Message'/>
            </div>
            <button className='send-btn'>SEND</button>
      </div>
      </div>
  )
}

export default Contact