import React from 'react'
import "../App.scss"
import './Project.css';
import Loader from 'react-loaders';
import spotifyImage from "../assets/Spotify.jpeg"
import weather from "../assets/weather.jpg"
import ReactFlipCard from 'reactjs-flip-card'



function Projects() {
  let projectDetails = [{
    imgSrc: spotifyImage,
    name: "Spotify Clone",
    description: "Designed and built a dynamic and responsive web application using HTML, CSS, and JavaScript Incorporated modern design principles to create a user-friendly and visually appealing responsive layout Implemented JavaScript to enhance client-side interactivity, resulting in improved user experience and website functionality",
    link: "http://postifyyy.freewebhostmost.com/",
    technology:["HTML", "Css", "Javascript"]
  },
  {
    imgSrc: weather,
    name: "Weather App",
    description: "Developed a responsive weather app using HTML, CSS, and JavaScript Utilized the weather API to fetch real-time weather data for various cities",
    link: "https://harsh-bisla.github.io/Weather-App/",
    technology:["HTML", "Css", "Javascript", "Api Implementation"]
  },
  {
    imgSrc: "https://user-images.githubusercontent.com/94471189/193782622-db0071f8-122e-4909-83a8-fe5da257febc.png",
    name: "Text Utils",
    description: "Developed a text utilty website that helps to manipulate your text in a way that you want..",
    link: "https://harsh-bisla.github.io/TextUtils/",
    technology:["React Js","HTML", "Css", "Javascript","Bootstrap"]
  },
  {
    imgSrc: "https://user-images.githubusercontent.com/94471189/193782622-db0071f8-122e-4909-83a8-fe5da257febc.png",
    name: "E - Commerce",
    description: "This is a fully responsive, modern frontend e-commerce website built with React Js. It features shopping cart functionality, and a product details page. Users can browse products, view details, and add or remove items from their cart.",
    link: "https://online-shopping-e.vercel.app/",
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