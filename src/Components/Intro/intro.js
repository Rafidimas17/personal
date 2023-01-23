import "./intro.scss";
import React from "react";
import Foto from "../../assets/foto.svg";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left justify-content-center">
        <div className="wrapper mr-3 justify-content-center">
          <h2 className="mt-5">Hi Dear, I'm</h2>
          <h1 className="mt-2">Rafi Dimas Ariyanto</h1>
          <h3 className="mt-2">Web Developer</h3>
          <div className="row mt-3">
            <div className="col">
              <a
                className="text-center"
                href="https://www.linkedin.com/in/rafi-dimas-ariyanto-8932531b8/"
              >
                <button className="hireme mt-3">Hire Me</button>
              </a>
            </div>
            <div className="col">
              <a className="text-center" href="#skills">
                <button className="moreabout mt-3">More About Me</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src={Foto} alt="halo" />
        </div>
      </div>
    </div>
  );
}
