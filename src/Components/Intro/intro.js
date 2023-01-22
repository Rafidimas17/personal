import "./intro.scss";
import React from "react";
import Foto from "../../assets/foto.svg";

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
          <h3>Web Developer</h3>
        </div>
      </div>
    </div>
  );
}
