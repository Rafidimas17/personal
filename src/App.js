import React, { useState } from "react";
import Topbar from "./Components/topbar/Topbar";
import "./App.scss";
import Menu from "./Components/menu/menu";
import Intro from "./Components/Intro/intro";
import Portofolio from "./Components/Portofolio/Portofolio";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="container">
        <Intro />
        <Skills />
        <Portofolio />
        <Contact />
      </div>
      <div class="card" style={{ border: "none" }}>
        <div class="card-body">
          <p
            style={{ fontFamily: "Poppins", fontSize: 15 }}
            className="text-center">
            Create by rafidimas 2023
          </p>
          <footer class="footer"></footer>
        </div>
      </div>
    </div>
  );
}

export default App;
