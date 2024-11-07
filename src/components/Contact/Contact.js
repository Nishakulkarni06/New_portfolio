import github from "../../photos/github.jpeg";
import linkedin from "../../photos/Link.jpeg";
import { toast, Toaster } from 'react-hot-toast';
import {motion} from "framer-motion";
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
    alert("sendEmail function triggered");
    e.preventDefault();
    console.log("sending email");

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
      <div
            className="contact_blur"
            style={{ backgroundColor: "#c1f5ff", top: "90rem", left: "10rem" }}
          >
            {" "}
          </div>
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
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "#fb982f" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
