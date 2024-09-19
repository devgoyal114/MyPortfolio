import React from 'react'
import "../App.scss"
import './Project.css';
import Loader from 'react-loaders';
import ReactFlipCard from 'reactjs-flip-card'



function Projects() {
  let projectDetails = [
  {
    name: "ToDoList App",
    description: "Developed a responsive to do list app using HTML, CSS, JavaScript and React.js",
    link: "https://todolist114.netlify.app/",
    technology:["HTML", "Css", "Javascript","React Js"]
  },
  {
    name: "Notes App",
    description: "Developed a Notes writing website that helps to writes notes with any titles you want..",
    link: "https://notes114.netlify.app/",
    technology:["React Js","HTML", "Css", "Javascript","Bootstrap"]
  },
  {
    name: "Web-Shop",
    description: "This is a fully responsive, modern frontend e-commerce website built with React Js. It features shopping cart functionality, and a product details page. Users can browse products, view details, and add or remove items from their cart.",
    link: "https://webshop114.netlify.app/",
    technology:["React Js","Animate css","Api Implementation","HTML", "Css", "Javascript"]
  }]

  const styles = {
    card: {background: '#', color: 'white', borderRadius: 20,},
}
  return (
    <>
      <Loader type='square-spin' />
      <div className='project-heading'>
      <span>&lt;h1&gt;</span> <h1>Projects.</h1> <span>&lt;h1/&gt;</span>
      </div>
      <div className='project-container'>
         {projectDetails.map((project) =>
            <div key={project.name} className='project-card'>
              <div className='image-wrapper'>
                {/* <img width={200} src={project.imgSrc} alt='project-image' /> */}
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className='technology'>
                <p>Worked On:</p>
              {project.technology.map((technology)=>
                    <span key={technology} id='technologies'>{technology}</span>
              )}  </div>
              <a target='_blank' href={project.link}><button className='view-project-btn'>View Project</button></a>
            </div>
          )}
        </div>

    </>
  )
}

export default Projects