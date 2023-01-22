import React from "react";
import "./Topbar.scss";
import Person from "@mui/icons-material/Person";
import Mail from "@mui/icons-material/Mail";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="/" className="logo">
            sayHi.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+6285-645-663-350</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>rafidimas1706@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
