// import React, { useRef, useState } from 'react';
// import './Contact.css';
import github from "../../photos/github.jpeg";
import linkedin from "../../photos/Link.jpeg";
// import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
import {motion} from "framer-motion";

// const Contact = () => {
//   const [data, setData] = useState(false);
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         'service_a7rb5ui',
//         'template_dbaz61j',
//         form.current,
//         'VgynWsLOZaJcOA7gf'
//       )
//       .then(
//         () => {
//           console.log('SUCCESS!');
//           setData(true);
//           toast.success("Email sent successfully!");
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//           toast.error("Failed to send email. Please try again.");
//         }
//       );
//   };

//   return (
//     <div className='Contact'>
//       <Toaster /> {/* This line adds the Toaster component for displaying notifications */}
//       <div
//         className="blur"
//         style={{ backgroundColor: 'rgb(300 220 260)', top: "160rem", left: "5rem" }}
//       />
//       <div className="social">
//         <p> Get In Touch
//           <br/>
//           <span style={{color:"#fb982f"}}>Contact Me ! </span>
//         </p>
//         <div className="Sociallogos">
//           <a href='https://www.linkedin.com/in/nisha-kulkarni-developer/'>
//             <img src={linkedin} alt="LinkedIn" />
//           </a>
//           <a href='https://github.com/Nishakulkarni06'>
//             <img src={github} alt="GitHub" />
//           </a>
//         </div>
//       </div>
//       <form ref={form} onSubmit={sendEmail}>
//         <input placeholder='Name' name="user_name" required />
//         <br/>
//         <input placeholder='Email' name="user_email" type="email" required />
//         <br/>
//         <textarea placeholder='Message' name="message" required></textarea>
//         <br/>
//         <input type="submit" value="Submit" style={{ cursor: "pointer" }} />
//       </form>
//     </div>
//   );
// }

// export default Contact;

import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
// import { themeContext } from "../../Context";
const Contact = () => {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const reset = () => {
    const input = document.querySelectorAll("input");
    input.forEach((inputs) => {
      inputs.value = "";
    });

    const textarea = document.querySelector("textarea");
    textarea.value = "";

    const span = document.querySelector("span");
    span.innerHTML = "";
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a7rb5ui",
        "template_dbaz61j",
        form.current,
        "VgynWsLOZaJcOA7gf"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          toast.success("Email sent successfully!");
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const transition = {duration:2,type:'spring'} 

  return (
    <div className="contact-form" id="contact">
      <Toaster />
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <motion.div
    initial={{marginLeft:"3rem" }} 
    whileInView={{marginLeft:"-2rem" }} 
    transition={{ duration: 0.5 }} 
    viewport={{ once: false }} // Set to false for testing
>
          <span>Get in Touch</span>
          <br />
          <span style={{ color: "#fb982f" }}>Contact me</span>
          </motion.div>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        <div className="social">
          <div className="Sociallogos">
            <a href="https://www.linkedin.com/in/nisha-kulkarni-developer/">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/Nishakulkarni06">
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            style={{ border: "2px solid #fb982f" }}
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            style={{ border: "2px solid #fb982f" }}
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            style={{ border: "2px solid #fb982f" }}
          />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
