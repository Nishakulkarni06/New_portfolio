import React from 'react'
import './nav.css' 

const Navbar = () => {
  return (
    <div className="navbar">
        
    <div className="left_nav">
    <p>Portfilio</p>
    <p>Toogle</p>
    </div>
   <div className="right_nav">
    <p>Home</p>
    <p>About</p>
    <p>Project</p>
    <p>Skills</p> 
    <button>Contact</button> 
   </div>
   </div>
  )
}

export default Navbar
