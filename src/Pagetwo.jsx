import React from 'react'
import "./Pagetwocss.css";


function Pagetwo() {
  return (
    <>
    <div className='pagetwo'>
       <div className='pagetwo-main'>
        <h1 style={{color:"aqua"}}>Skills</h1>
        <br></br>
        {/* skills */}
        <div className='p-s1'>
            <img src='animated-boy.png'className='p2-img'></img>
            <div className='p-s2'>
                <div className='p-s3'>
                    <h2 style={{color:"aqua"}}>Frontend: </h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className='p-s4'>
                    <h2 style={{color:"aqua"}}>Backend: </h2>
                    <ul>
                    <li>NodeJs </li>
                    <li>ExpressJs</li>
                    <li>SpringBoot </li>
                    <li>PHP </li>
                    <li>MongoDB </li>
                    <li>MYSQL </li>
                    </ul>
                </div>
                <div className='p-s5'>
                    <h2 style={{color:"aqua"}}>Other: </h2>
                    <ul>
                    <li>GitHub</li>
                    <li>PostMan</li>
                    </ul>
                </div>
            </div>
        </div>
        <br></br>
        {/* skills logos */}
        <div className='logo-container'>
            <img src='https://img.icons8.com/?size=96&id=Pd2x9GWu9ovX&format=png'className='skill-logo'></img>
            <img src='https://img.icons8.com/?size=128&id=2T6TKY6whzgV&format=png'className='skill-logo'></img>
            <img src='https://img.icons8.com/?size=96&id=45490&format=png'className='skill-logo'></img>
            <img src='https://img.icons8.com/?size=96&id=PXTY4q2Sq2lG&format=png'className='skill-logo'></img>
            <img src='https://img.icons8.com/?size=160&id=NfbyHexzVEDk&format=png'className='skill-logo'></img>
            <img src='https://img.icons8.com/?size=160&id=8rKdRqZFLurS&format=png'className='skill-logo'></img>
            <img src='https://img.icons8.com/?size=96&id=UFXRpPFebwa2&format=png'className='skill-logo'></img>
            <img src='https://img.icons8.com/?size=96&id=13460&format=png'className='skill-logo'></img>
            <img src='https://img.icons8.com/?size=96&id=13441&format=png'className='skill-logo'></img>
        </div>
        </div>
    </div>
    </>
  )
}

export default Pagetwo