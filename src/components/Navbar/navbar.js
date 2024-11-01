import React from 'react'
import './nav.css' 
import {Link} from 'react-scroll'
import ProjCards from '../ProjCards/ProjCards'
import Toogle from '../Toggle/Toogle'
import { useContext } from "react";
import { themeContext } from "../../Context";
const Navbar = () => {
  const theme = useContext(themeContext);
const darkMode = theme.state.darkMode; 
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="navbar"  style = {{
      backgroundColor: darkMode ? "black" : "",
      color : darkMode ? "white" : ""
    }}>
        
    <div className="left_nav">
    <p>Portfilio</p>
    <Toogle></Toogle>
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
