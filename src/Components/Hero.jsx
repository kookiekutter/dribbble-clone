import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="Hero">
        <p id='one'>Over 3 million ready-to-work Creatives!</p>
        <p id='two'>The Worlds Destination for Design</p>
        <p id='three'>Get inspired by work of millions of top-rated designers & agencies around the world. </p>
        <Link to='login'><button>Get Started</button></Link>

      </div>
    </div>
  )
}

export default Hero
