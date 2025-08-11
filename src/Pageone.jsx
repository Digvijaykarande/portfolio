import React from 'react'
import Navbar from './Navbar'
import "./pageonecss.css";

function Pageone() {
  return (
    <>
    <div className='pageone'>
      <Navbar/>
      <br></br>
      <div className='wrapper'>
        <div className='wrapper2'>
      <div className='statictxt'>
        <h1>Hello there 👋</h1>
        <h1>This is  <span style={{color:"#28f7ff"}}>Digvijay</span></h1>
        <h2 className='fixedtxt'>I am 
          <div className='dynamictxt'>
            <h4 className='changingtxt'>Web Developer</h4>
            <h4 className='changingtxt'>React Developer</h4>
            <h4 className='changingtxt'>Backend Developer</h4>
            <h4 className='changingtxt'>Student</h4>
          </div>
        </h2>
      </div>
      <br></br>
      {/* download cv */}
      <button className="cv-btn">
      <a href="digvijayresume.pdf" download="digvijayresume.pdf">Download CV</a></button> 
      </div>
      
      {/* my image and cv code */}
      <div className='section1'>
      <div className='image-section'>
        <img src='pageoneimage.png' className='myimg'></img>
      </div><br></br>
      <div className='section2'>
        <h3>Follow me :</h3>
        <div className='f-btns'>
        <button className='follow-btn'><a href="https://www.instagram.com/digvijay_karande1312/profilecard/?igsh=d2NkY3dpN3M2eGtp"><img src='instagram.png' className='logos'></img></a></button>
        <button className='follow-btn'><a href="https://www.linkedin.com/in/digvijay-karande-297b25279/"><img src='linkedin.png' className='logos'></img></a></button>
        <button className='follow-btn'><a href="https://github.com/Digvijaykarande">
        <img src='github.png' className='logos'></img></a></button>
        </div>
      </div>
      </div>
      </div>

    </div>
    </>
  )
}

export default Pageone