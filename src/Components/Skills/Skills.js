import React from "react";
import FotoBoot from "../../assets/bootstrap.png";
import FotoFigma from "../../assets/figma.png";
export default function Skills() {
  return (
    <div className="container" id="skills">
      <h2
        className="text-center mt-5"
        style={{ fontSize: 50, fontFamily: "Oswald" }}
      >
        Skills
      </h2>
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
        <div className="col">
          <div
            className="card text-center shadow-sm"
            style={{ border: "none" }}
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              style={{
                height: 150,
                width: 150,
                display: "block",
                margin: "auto",
              }}
              className="card-img-top h-25"
              alt="react"
            />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ fontFamily: "Oswald", fontSize: 25 }}
              >
                React Js
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow-sm" style={{ border: "none" }}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-512.png"
              style={{
                height: 150,
                width: 150,
                display: "block",
                margin: "auto",
              }}
              className="card-img-top"
              alt="node"
            />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ fontFamily: "Oswald", fontSize: 25 }}
              >
                Node Js
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow-sm" style={{ border: "none" }}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-512.png"
              style={{
                height: 150,
                width: 150,
                display: "block",
                margin: "auto",
              }}
              className="card-img-top"
              alt="gol"
            />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ fontFamily: "Oswald", fontSize: 25 }}
              >
                MongoDB
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow-sm" style={{ border: "none" }}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png"
              style={{
                height: 150,
                width: 150,
                display: "block",
                margin: "auto",
              }}
              className="card-img-top"
              alt="mysql"
            />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ fontFamily: "Oswald", fontSize: 25 }}
              >
                MySQL
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow-sm" style={{ border: "none" }}>
            <img
              src="https://expressjs.com/images/express-facebook-share.png"
              style={{
                height: 150,
                width: 250,
                display: "block",
                margin: "auto",
              }}
              className="card-img-top"
              alt="express"
            />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ fontFamily: "Oswald", fontSize: 25 }}
              >
                Express Js
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow-sm " style={{ border: "none" }}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/codeigniter-4-1175201.png?f=avif&w=256"
              style={{
                height: 150,
                width: 160,
                display: "block",
                margin: "auto",
              }}
              className="card-img-top"
              alt="php"
            />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ fontFamily: "Oswald", fontSize: 25 }}
              >
                CodeIgniter
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow-sm " style={{ border: "none" }}>
            <img
              src={FotoFigma}
              style={{
                height: 130,
                width: 130,
                display: "block",
                margin: "auto",
              }}
              className="card-img-top mt-3"
              alt="figma"
            />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ fontFamily: "Oswald", fontSize: 25 }}
              >
                Figma
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow-sm " style={{ border: "none" }}>
            <img
              src={FotoBoot}
              style={{
                height: 130,
                width: 140,
                display: "block",
                margin: "auto",
              }}
              className="card-img-top mt-3"
              alt="bootstrap"
            />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ fontFamily: "Oswald", fontSize: 25 }}
              >
                Bootstrap
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
