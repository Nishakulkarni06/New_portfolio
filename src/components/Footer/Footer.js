import React from 'react'
import './footer.css'
import Wave from '../../photos/wave.png';
import {motion} from "framer-motion";

const Footer = () => {
  const transition = {duration:2,type:'spring'} 
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='footer' >
      <img src={Wave}></img>
      <div className="f-content">
      <motion.div
    initial={{marginLeft:"3rem" }} 
    whileInView={{marginLeft:"-2rem" }} 
    transition={{ duration: 0.5 }} 
    viewport={{ once: false }} // Set to false for testing
>
      <h2> 
        Let's Work 
<br/>
       Together Today ! 
      </h2>
   </motion.div>
      </div>
      <div className="footer_links">
        <div className="part"> 
        <h3>SitePage</h3>
        <ul>
          <li onClick={()=>scrollToSection('home')}>Home</li>
          <li onClick={()=>scrollToSection('About')}>About</li>
          <li  onClick={()=>scrollToSection('Projects')}>Project</li>
          <li onClick={()=>scrollToSection('skills')}>Skills</li>
          <li onClick={()=>scrollToSection('contact')}>Contact</li>
        </ul>
        </div>

        <div className="part"> 
        <h3>Socials</h3>
        <ul>
          <li><a href="https://www.linkedin.com/in/nisha-kulkarni-developer/">Linkedin</a></li>
          <li><a href="https://github.com/Nishakulkarni06"> github</a></li>
          </ul>
          </div>
      </div>
      <p>All Rights Reserved @nisha</p>
    </div>
  )
}

export default Footer;
