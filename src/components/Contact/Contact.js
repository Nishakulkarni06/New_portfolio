import React from 'react'
import './Contact.css';
import github from '../../photos/github.jpeg';
import linkedin from '../../photos/Link.jpeg'
const Contact = () => {
  return (
    <div className='Contact'>
          <div
            className="blur"
            style={{ backgroundColor: 'rgb(300 220 260)', top: "160rem", left: "5rem" }}
          >
            {" "}
          </div>
          <div className="social">

      <p> Get In Touch
         <br/>
         <span style={{color:"#fb982f"}}>Contact Me ! </span>
      </p>
      <div className="Sociallogos">
        <a href='https://www.linkedin.com/in/nisha-kulkarni-developer/'><img src={linkedin}></img></a>
        <a href='https://github.com/Nishakulkarni06'><img src={github}></img></a>
      </div>
                  
      </div>
        <form> 
            <input placeholder='Name'></input>
         <br/>
            <input placeholder='Email'></input>
         <br/>
            <textarea placeholder='Message'></textarea>
         <br/>
           <button>Submit</button>
        </form>
    </div>
  )
}

export default Contact
