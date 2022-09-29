import './ProjectCardStyle.css'
import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.jpeg'
import project3 from '../assets/project-3.jpeg'

import { ExternalLink } from 'react-external-link';

const ProjectCards = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'> Projects </h1>

        <div className='project-container'>

            <div className='project-card'>
                <img src= {project1} alt ='project1'/>
                <h2 className='project-title'>Memory Game </h2>
                <div className='project-details'> 
                    <p id='pro-details' >A Browser memory card game that is built utilizing JavaScript, html and css. This project focuses on implementing different DOM manipulations as well as conditionals and array methods. </p>
                    <div className='project-buttons'>
                        <a href= 'https://github.com/abelseyefu/Project-1-memory-game-' target='_blank' rel='noreferrer' className= 'btn'>View</a>
                        <a href= 'https://github.com/abelseyefu/Project-1-memory-game-' target='_blank' rel='noreferrer' className= 'btn'>Source</a>
                    </div>
                </div>
            </div>

            <div className='project-card'>
                <img src= {project2} alt ='project1'/>
                <h2 className='project-title'>Weapons Smith </h2>
                <div className='project-details'> 
                    <p id='pro-details' >A fullstack application that leverages node express as a backend API and EJS to preform CRUD operations. This application utilizes Javascript, HTML, and CSS as well as EJS Syntax to inject into regular Html </p>
                    <div className='project-buttons'>
                        <a href= 'https://abelseyefuproject2.herokuapp.com/weapons' target='_blank' rel= 'noreferrer' className= 'btn'>View</a>
                        <a href= 'https://github.com/abelseyefu/project2' target='_blank' rel= 'noreferrer' className= 'btn'>Source</a>
                    </div>
                </div>
            </div>

            <div className='project-card'>
                <img src= {project3} alt ='project1'/>
                <h2 className='project-title'> Travel Advisor </h2>
                <div className='project-details'> 
                    <p id='pro-details' >A fullstack MERN application that utilizes the Amadeus flights API to schedule flights for travel. This App also incorporates JWT authentication for a user to sign up, log in and finally Log out. </p>
                    <div className='project-buttons'>
                        <a href= 'https://trip-commander.herokuapp.com/' target='_blank' rel= 'noreferrer' className= 'btn'>View</a>
                        <a href= 'https://github.com/the-dreams-team' target='_blank' rel= 'noreferrer' className= 'btn'>Source</a>
                    </div>
                </div>
            </div>

        </div>

    </div>
    
  )
}

export default ProjectCards