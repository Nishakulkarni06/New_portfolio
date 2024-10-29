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

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="main">
        <div className="hero">
          <div className="left_main">
            <h3>Hii I'm </h3>
            <br></br>
            <span> Nisha </span>
            <br></br>
            <span>Kulkarni</span>
            <br></br>
            <button>Download Resume</button>
            <hr></hr>
            <p>Aspiring Full Stack Web Developer </p>
          </div>
          <div className="right_main">
            <div className="image"></div>
            <div className="float">
              <FloatingDiv
                image={crown}
                txt1={"Web"}
                txt2={"Developer"}
              ></FloatingDiv>
              <div className="code_img">
                <img src={code}></img>
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
        <div className="About">
          <h2>About me</h2>
          <Cards
            image={nisha_img}
            about={"About"}
            desc={
              "A passionate web developer specializing in the MERN stack, constantly learning and building modern, scalable web applications."
            }
          ></Cards>
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
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
