import React from "react";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="container" id="contact">
      <h4
        className="mt-4 text-center"
        style={{ fontFamily: "Oswald", fontSize: 50 }}
      >
        Contact
      </h4>
      <div className="card mb-3 shadow-sm mt-2" style={{ border: "none" }}>
        <div className="row g-1">
          <div className="container text-center" style={{ width: "40rem" }}>
            <p
              className="text-center p-4"
              style={{ fontFamily: "Oswald", fontSize: 20 }}
            >
              Thank you for your visit on my website. <br></br> for discussion?
              I am very open to discussions about this website or about other
              technologies, social connection, etc.<br></br>Contact me here
              &#128071;
            </p>
            <a
              href="mailto:rafidimas1706@gmail.com?subject=Thanks your website"
              className="text-center"
              style={{ fontFamily: "Oswald", fontSize: 18 }}
            >
              <button className="button justify-content-center mb-5">
                Get In Touch
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
