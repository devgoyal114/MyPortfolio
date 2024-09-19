import React from 'react'
import "./Skills.css"
import "../App.scss"
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

function Skills() {
  return (
    <>
        <Loader type='square-spin'/>
    <div className='skills-container'>
    <span>&lt;h1&gt;</span> <h1>Skills &<br/>Experience</h1> <span>&lt;h1/&gt;</span>
    <div className='overview'>
      <p>Expert in front-end development including technologies like <span  className='text'>Html, CSS, Javascript, React Js, Git </span>and also have hands on experience on many ui frameworks such as Bootstrap and Tailwind css to speed up development while maintaining design consistency. Experienced with Git and GitHub for version control and collaborative development</p>
    </div>
     </div>

     <div className='images'>
      <div className="box"><FontAwesomeIcon icon={faBootstrap} color="#7311f5"/></div>
      <div className="box"><FontAwesomeIcon icon={faReact} color="#5ED4F4"/></div>
      <div className="box"><FontAwesomeIcon icon={faHtml5} color="#F06529"/></div>
      <div className="box"><FontAwesomeIcon icon={faCss3} color="#28A4D9"/></div>
      <div className="box"><FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/></div>
      <div className="box"><FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/></div>
      <div className="box"><FontAwesomeIcon icon={faGithub} color='#FFFFFF'/></div>
     </div>
     </>
  )
}

export default Skills;