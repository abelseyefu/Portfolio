import React from 'react'
import './AboutMeStyle.css'
import {IoLogoJavascript} from 'react-icons/io'
import {DiReact} from 'react-icons/di'
import {DiMongodb} from 'react-icons/di'
import {FaPython} from 'react-icons/fa'
import {SiPostgresql} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
const AboutMe = () => {
  return (
    <>
<div id="about-section">
    <h1 id='about-me'>About Me</h1>
    <p id='text'>In a fast paced tech advancing world, I am passionate in what I can offer to the ongoing growth. Tech is fast paced and always changing, which is an exciting challenge that I am excited for. I come from a background in customer service with coding as a hobby. I want to fully explore what tech can offer me as a career. I plan to use my experience in customer service and knowledge in web development to contribute to the growing tech industry!
    </p>
</div>
    <div className='about-skills'>

    
<div>
 <h2 id='skills-title'> Skills </h2>
        <ul id='skills-list'>
           
            <li>
                <p> <IoLogoJavascript/> </p>
            </li>

            <li>
               <p> <DiReact/> </p>
            </li>

            <li>
                <p> <DiMongodb/> </p>
            </li>

            <li>
                <p> <FaPython/> </p>
            </li>

            <li>
                <p> <SiPostgresql/> </p>
            </li>

            <li>
                <p> <SiExpress/> </p>
            </li>




        </ul>
</div>


    </div>

    
  
    </>
  )
}

export default AboutMe