import React from "react";
import "./about.scss";

export default function About() {
  return (
    <div className="container" id="about">
      <h4
        className="mt-4 text-center"
        style={{ fontFamily: "Poppins", fontSize: 50 }}
      >
        About
      </h4>
      <div class="card mb-3 shadow-sm" style={{ border: "none" }}>
        <div class="row g-1">
          <div class="col-8 p-4">
            <p
              class="card-text"
              style={{
                fontFamily: "Oswald",
                fontSize: 18,
                fontWeight: 520,
                textAlign: "justify",
              }}
            >
              <strong>
                Hi&#128075;, I'm Rafi Dimas Ariyanto a website developer{" "}
              </strong>
              from East Java, Indonesia. I have 1 year experience in website
              development. I'd'like create websites starting from{" "}
              <strong>UI design, Slicing design, until deployment </strong>
              because this will make the{" "}
              <span style={{ fontWeight: 550 }}>
                workflow clear, structured, and easier to work with the team
              </span>
              . I am looking for opportunities in the field of website
              development&#128064;
            </p>
            <h5
              class="card-title mt-3"
              style={{
                fontFamily: "Oswald",
                fontSize: 25,
              }}
            >
              WHAT I DO ?
            </h5>
            <ul
              style={{
                fontFamily: "Oswald",
                fontSize: 18,
              }}
            >
              <li>
                Start change from small things!
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontSize: 13,
                  }}
                >
                  {" "}
                  <strong>(Don't forget `..`)</strong>
                </span>
              </li>
              <li>Share code for github to learn from each other</li>
              <li>Able to work with various roles in making a website</li>
            </ul>
          </div>
          <div class="col-4 p-2">
            <div class="card-body">
              <a href="https://www.linkedin.com/in/rafi-dimas-ariyanto-8932531b8/">
                <button className="hireme">Hire Me</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
