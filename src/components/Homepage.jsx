import React, { useEffect, useState } from 'react'
import Letter from './Letter';
import Logo from './Logo';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';

function Homepage() {

 const [letterClass, setLetterClass] = useState("animate-text")
 let nameArr=["e","v",," ","G","o","y","a","l",","]
 let roleArr=["F","r","o","n","t","e","n","d"," ","W","e","b"," ","D","e","v","e","l","o","p","e","r","."]


 useEffect(()=>{
  setTimeout(() => {
    setLetterClass("animate-text-hover")
  }, 4000);
 },[])
  return (
    <>
    <Loader type='square-spin'/>
<div className='heading'>
   <span className='h-tag'>&lt;h1&gt;</span> <h1><span className={letterClass}>H</span>
   <span className={letterClass}>i,</span>
        <br/>
        <span className={letterClass}>I</span><span className={letterClass}>'m</span> <span className='n-letter'>D</span>
        <Letter letterClass={letterClass} idx={15} arr={nameArr}/>
        <br/>
        <Letter letterClass={letterClass} arr={roleArr}/>
    </h1><span className='h-tag'>&lt;h1/&gt;</span> 
    <p>Frontend Developer / React Js</p>
  <Link to="/contact"><button className='contact'>CONTACT ME</button></Link>
  <a href='HARSH BISLA - RESUME2 (2).pdf' target='_blank'><button className='contact'>Download CV</button></a>
</div>
<Logo/>
    </>
  )
}

export default Homepage