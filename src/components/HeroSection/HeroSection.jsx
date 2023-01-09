import React from 'react'
import "./HeroSection.css"
import ImageBanner from '../../assets/image/Project-planning.png'
import WaveSVG from '../../assets/image/wave.png'

const HeroSection = () => {
  return (
    <>
    <div className="hero-section">
      <div className="hero-section_container">
        <div className="hero-section_wrapper">

      <div className="banner">
        <div className="banner_title">My Personal Portfolio</div>
        <div className="banner_desc">frontend and backend projects</div>
      </div>
      <div className="banner-image">
        <div>
          <img src={ImageBanner}/>
        </div>
      </div>
        </div>
      <img className="wave" src={WaveSVG}/>

      </div>
      
    </div>

    {/* <div className="wave">
  </div> */}
    </>
    
  )
}

export default HeroSection