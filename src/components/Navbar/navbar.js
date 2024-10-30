import React from 'react'
import './nav.css' 
import {Link} from 'react-scroll'
import ProjCards from '../ProjCards/ProjCards'
const Navbar = () => {
  
  return (
    <div className="navbar">
        
    <div className="left_nav">
    <p>Portfilio</p>
    <p>Toogle</p>
    </div>
   <div className="right_nav">
    <Link spy={true} to={Navbar} smooth={true } activeClass="activeClass">
    <p>Home</p>    
    </Link>
    {/* <Link spy={true} to={About} smooth={true } activeClass="activeClass"> */}
    <p>About</p>
    {/* </Link> */}
    <Link spy={true} to={ProjCards} smooth={true } activeClass="activeClass">
    <p>Project</p>
    </Link>
    <p>Skills</p> 
    <button onClick='/Contact'>Contact</button> 
   </div>
   </div>
  )
}

export default Navbar
