import StartHeading from "../StartHeading";
import { Link } from "react-router-dom";
import "../style.css";

function HowToPlay() {
  return (
    <div
      className="stage"
      style={{
        backgroundImage: `url("https://i.imgur.com/pwph771.png")`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100vh`,
        backgroundPosition: "center",
      }}
    >
    <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "fixed",
          top: "10vh",
        }}
      >
      <StartHeading
        text="How To Play"
        style={{ 
          position: "fixed", 
          top: "12vh" }}
      />
      <p style={{ 
        color: "white",
        lineHeight: "2.2vh",
        width: "30vw",
        position: "fixed", 
        top: "42vh" }}>

      This is a point-and-click game, in each room you will have to look and click around to gather hints of the password to progress onto the next stage.
      
      Work together as a team and support each other throughout this journey!
      </p>

      <Link
          to="/"
          className="menuLink"
          style={{ 
            position: "fixed", 
            bottom: "18vh"}}
        >
          GO BACK
        </Link>

      </div>
    </div>
  );
}

export default HowToPlay;
