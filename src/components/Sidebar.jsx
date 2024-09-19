import React from 'react'

import {NavLink } from 'react-router-dom'


function Sidebar({menu, handleNavClick}) {
  return (
    <div className="navbar" style={{left:menu==="open"?"0px":""}}>
        <a className="logo" to="/">
    <div className="hlogo">D</div>
        <div className='name'>Dev</div>
        </a>
        <nav>
          <NavLink onClick={handleNavClick} activeclassname="active" to='/'>
          <i className="fa-solid fa-house icon"></i>
          </NavLink>
          <NavLink  onClick={handleNavClick} activeclassname="active" className='about' to='/about'>
          <i className="fa-regular fa-user icon"></i>
          </NavLink>
          <NavLink onClick={handleNavClick} activeclassname="active" className='skills' to='/skills'>
          <i className="fa-solid fa-gear icon"></i>
          </NavLink>
          <NavLink onClick={handleNavClick} activeclassname="active" className='projects' to='/projects'>
          <i className="fa-regular fa-eye"></i>
          </NavLink>
          <NavLink onClick={handleNavClick} activeclassname="active" className='contact' to='/contact'>
          <i className="fa-regular fa-envelope"></i>
          </NavLink>
        </nav>
        <ul>
          <li>
            <a target='_blank' href='https://www.linkedin.com/in/devgoyal114/'><i className="fa-brands fa-linkedin"></i></a>
          </li>
          <li>
          <a href='https://github.com/devgoyal114' target='_blank'><i className="fa-brands fa-github"></i></a>
          </li>
          <li>
          <a href='#'><i className="fa-solid fa-inbox"></i></a>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar