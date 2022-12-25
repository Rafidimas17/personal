import "./intro.scss";
import React from "react";
import Foto from "../../assets/foto.png";
import Down from "../../assets/down.svg";
import Typewriter from "typewriter-effect";
export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={Foto} alt="halo" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi Dear, I'm</h2>
          <h1>Rafi Dimas Ariyanto</h1>
          <h3>
            <Typewriter
              options={{
                strings: ["Web Developer", "IoT Engineer", "Tech Enthusiast"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </div>
        <a href="#portfolio">
          <img src={Down} alt="" />
        </a>
      </div>
    </div>
  );
}
