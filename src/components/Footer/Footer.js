import React from 'react'
import './footer.css'
import Wave from '../../photos/wave.png';


const Footer = () => {
  return (
    <div className='footer' >
      <img src={Wave}></img>
      <div className="f-content">
      <h2> 
        /<span>Let's Work  </span>
<br/>
       Together Today ! 
      </h2>
   
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
          <li><a src="https://www.linkedin.com/in/nisha-kulkarni-developer/">Linkedin</a></li>
          <li><a src="https://github.com/Nishakulkarni06"> github</a></li>
          </ul>
          </div>
      </div>
      <p>All Rights Reserved @nisha</p>
    </div>
  )
}

export default Footer;
