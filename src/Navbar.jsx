import React from 'react'
import "./navbarcss.css"
function Navbar() {
  return (
   <>
   <div className='navbar'>
    <h1 className='mylogo-h1'>dk</h1>
    <div className='navpart2'>
        <button className='navbtn'><a href='https://github.com/Digvijaykarande'>
        <h3>github</h3></a></button>
        <button className='navbtn'>
          <a href='https://www.linkedin.com/in/digvijay-karande-297b25279/'>
          <h3>linkedin</h3></a></button>
        <button className='navbtn'><a href='mailto:karandedigvijay2@gmail.com'><h3>Email</h3></a></button>
    </div>
   </div>
   </>
  )
}

export default Navbar