import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='Contact'>
          <div
            className="blur"
            style={{ backgroundColor: 'rgb(300 220 260)', top: "160rem", left: "5rem" }}
          >
            {" "}
          </div>
      <p> Get In Touch
         <br/>
         <span style={{color:"#fb982f"}}>Contact Me ! </span>
      </p>
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
