import React from 'react'
import HeroImgStyle from './HeroImgStyle.css'
import horizon from "../assets/horizon-red.webp"
import { Link } from 'react-router-dom'
const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='horizon-img' src={horizon} alt='img'/>
        </div>

        <div className='content'>
            <p>Hi, I'm Abel Seyefu, and Im a</p>
            <h1>Software Engineer</h1>

            <div className='button1'>
                <Link to="/project" className='btn'> Projects </Link>
           

             
                <Link to="/contact" className='btn btn-light'> Contact </Link>
            </div>

        </div>

    </div>
  )
}

export default HeroImg