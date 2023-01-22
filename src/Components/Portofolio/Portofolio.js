import React, { useEffect, useState } from "react";
import iconBerkas from "../../assets/berkas.png";
import "./Portofolio.scss";
import { webPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "web",
      title: "Web App",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  return (
    <div className="container" id="portofolio">
      <h4
        className="text-center mt-5"
        style={{ fontFamily: "Oswald", fontSize: 50 }}
      >
        Portofolio
      </h4>
      <div class="row row-cols-1 row-cols-md-3 g-4 mt-2">
        {data.map((d) => (
          <div class="col">
            <div class="card h-100 shadow-sm" style={{ border: "none" }}>
              <img
                src={d.img}
                class="card-img-top"
                alt={d.img}
                style={{ height: 200 }}
              />
              <div class="card-body">
                <h5 class="card-title text-center">{d.title}</h5>
                <ul>
                  <p></p>
                  <li style={{ fontFamily: "Oswald", fontSize: 15 }}>
                    {d.tech}
                  </li>
                  <li style={{ fontFamily: "Oswald", fontSize: 15 }}>
                    {d.utility}
                  </li>
                  <li style={{ fontFamily: "Oswald", fontSize: 15 }}>
                    {d.event}
                  </li>
                </ul>
              </div>
              <div class="card-footer">
                <small class="text">
                  <a
                    href={d.url}
                    className="text-decoration-none"
                    style={{ fontFamily: "Oswald" }}
                  >
                    <img src={iconBerkas} style={{ width: 25 }} alt="icon" />{" "}
                    Code
                  </a>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
