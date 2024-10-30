import React from 'react'
import './footer.css'
import Wave from '../../photos/wave.png';
import {motion} from "framer-motion";

const Footer = () => {
  const transition = {duration:2,type:'spring'} 

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
        /<span>Let's Work  </span>
<br/>
       Together Today ! 
      </h2>
   </motion.div>
      </div>
      <div className="footer_links">
        <div className="part"> 
        <h3>SitePage</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Skills</li>
          <li>Contact</li>
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
