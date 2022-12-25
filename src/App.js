import Topbar from "./Components/topbar/Topbar";
import "./App.scss";
import React, { useState } from "react";
import Menu from "./Components/menu/menu";
import Intro from "./Components/Intro/intro";
import Portofolio from "./Components/Portofolio/Portofolio";
import Works from "./Components/Works/Works";
import Testimonials from "./Components/testimonial/testimonial";
import Contact from "./Components/Contact/contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portofolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
