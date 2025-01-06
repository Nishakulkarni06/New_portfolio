import "./App.css";
import "./styles/body.css";
import "./components/Cards/cards.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/navbar";
import FloatingDiv from "./components/FloatingDiv/FloatingDiv";
import crown from "./photos/crown.png";
import code from "./photos/code.jpg";
import book from "./photos/book.jpeg";
import nisha_img from "./photos/nisha_img.jpg";
import Cards from "./components/Cards/cards";
import { Icon } from '@iconify/react';
import reactIcon from '@iconify-icons/logos/react'; 
import htmlIcon from '@iconify-icons/logos/html-5';
import cssIcon from '@iconify-icons/logos/css-3'; 
import jsIcon from '@iconify-icons/logos/javascript';
import bootstrapIcon from '@iconify-icons/logos/bootstrap';
import nodeJs from '@iconify-icons/logos/nodejs';
import mongodb from '@iconify-icons/logos/mongodb';
import express from '@iconify-icons/logos/express';
import sql from '@iconify-icons/logos/mysql'; 
import figma from '@iconify-icons/logos/figma';
import c from '@iconify-icons/logos/c';
import java from '@iconify-icons/logos/java'
import python from '@iconify-icons/logos/python'; 
import Main from "./components/MainProjCards/Main"
import Contact from "./components/Contact/Contact";
import {motion} from "framer-motion";  
import { duration } from "@mui/material";
import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
const transition = {duration:2,type:'spring'} 
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode; 
  return (
    <div className="App" 
    style = {{
      backgroundColor: darkMode ? "black" : "",
      color : darkMode ? "white" : ""
    }}>
      <Navbar></Navbar>
      <div className="main">
        <div className="hero" id="home">
          <div className="left_main">
            <h3>Hii I'm </h3>
            <br></br>
            <motion.div
        initial={{ marginTop:"5rem" }} // Initial state
        whileInView={{ marginTop:"1em" }} // Animation state when in view
        transition={transition} // Your transition object
        >
            <span> Nisha </span>
            <br></br>
            <span>Kulkarni</span>
            <br></br>
            <a href="/Nisha.Resume.pdf" download="Nisha_Resume.pdf">
            <button>Download Resume</button>
            </a>
            <hr></hr>
            <p>Aspiring Full Stack Web Developer </p>
            </motion.div> 
          </div>
          <div className="right_main">
            <div className="image"></div>
            <div className="float">
            <motion.div
        initial={{ marginLeft:"-.5rem" }} // Initial state
        whileInView={{ marginLeft:"-2rem" }} // Animation state when in view
        transition={transition} // Your transition object
    >
               <FloatingDiv
                image={crown}
                txt1={"Web"}
                txt2={"Developer"}
              ></FloatingDiv>
               </motion.div>
              <div className="code_img">
                <motion.img 
                 initial={{marginLeft:"-15rem"}}
                 whileInView={{marginLeft:"-12rem"}}
                 transition={transition}
               src={code}
               ></motion.img>
              </div>
            </div>
          </div>
          {/* blurr divs */}
          <div className="blur" style={{ backgroundColor: "rgb(238 210 255)" }}>
            {" "}
          </div>
          <div
            className="blur"
            style={{ backgroundColor: "#c1f5ff", top: "30rem", left: "45rem" }}
          >
            {" "}
          </div>
        </div>
        <div className="About" id="About">
        <motion.div
        initial={{ marginLeft:"-3rem" }} // Initial state
        whileInView={{ marginLeft:"-.5rem" }} // Animation state when in view
        transition={transition} // Your transition object
    >
          <h2>About me</h2>
          <Cards
            image={nisha_img}
            about={"About"}
            desc={
              "A passionate web developer specializing in the MERN stack, constantly learning and building modern, scalable web applications."
            }
          ></Cards>
               </motion.div>

               <motion.div
        initial={{ marginLeft:"3rem" }} // Initial state
        whileInView={{ marginLeft:"-.5rem" }} // Animation state when in view
        transition={transition} // Your transition object
    >
          <div className="card" style={{ marginTop: 70 }}>
            <h3>Education</h3>
            <p style={{ marginLeft: -190 }}>
              BTech : Computer Science & Engineering
              <br />
              9.2 cgpa
              <br />
              10th : 90.20%
              <br />
              12th : 76.4%
            </p>
            <img src={book} style={{ width: 150, marginRight: 60 }}></img>

          </div>
          </motion.div>

        </div>

        <div
            className="blur"
            style={{ backgroundColor: "#c1f5ff", top: "90rem", left: "10rem" }}
          >
            {" "}
          </div>

        <div className="skills" id="skills">
          <h2>Skills</h2>
          <div className="logos">
            <div className="slider">
              <div className="slide-track">
                    <div className="slide">
                      <Icon icon={htmlIcon} style={{ fontSize: '50px' }} />                      
                    </div>

                    <div className="slide">
                    <Icon icon={cssIcon} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={jsIcon} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={reactIcon} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={bootstrapIcon} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={nodeJs} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={mongodb} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={express} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={sql} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={figma} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={c} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={java} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={python} style={{ fontSize: '50px' }} />
                    </div>

                    {/* double */}

                    <div className="slide">
                    <Icon icon={htmlIcon} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={cssIcon} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={jsIcon} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={reactIcon} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={bootstrapIcon} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={nodeJs} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={mongodb} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={express} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={sql} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={figma} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={c} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={java} style={{ fontSize: '50px' }} />
                    </div>

                    <div className="slide">
                    <Icon icon={python} style={{ fontSize: '50px' }} />
                    </div>
              </div>
            </div>
          </div>

        </div>

        <Main ></Main>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
