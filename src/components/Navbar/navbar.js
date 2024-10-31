import React from 'react'
import './nav.css' 
import {Link} from 'react-scroll'
import ProjCards from '../ProjCards/ProjCards'
const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="navbar">
        
    <div className="left_nav">
    <p>Portfilio</p>
    <p>Toogle</p>
    </div>
   <div className="right_nav">
    <Link spy={true} to={Navbar} smooth={true } activeClass="activeClass">
    <p onClick={()=>scrollToSection('home')}>Home</p>    
    </Link>
    {/* <Link spy={true} to={About} smooth={true } activeClass="activeClass"> */}
    <p onClick={()=>scrollToSection('About')}>About</p>
    {/* </Link> */}
    <Link spy={true} to={ProjCards} smooth={true } activeClass="activeClass">
    <p onClick={()=>scrollToSection('Projects')}>Project</p>
    </Link>
    <p onClick={()=>scrollToSection('skills')}>Skills</p> 
    <button onClick={()=>scrollToSection('contact')}>Contact</button> 
   </div>
   </div>
  )
}

export default Navbar
