import React from "react";
import { aboutData } from "../DevData";
export default function About() {
  return (
    <section id="about">
      <div className="about container">
        <div className="col-left">
          <div className="about-image">
            <img
              src={aboutData.img}
              style={{ maxHeight: "100%", maxWidth: "100%" }}
              alt=""
            />
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title">
            About <span>Me</span>
          </h1>
          <h2>{aboutData.position}</h2>
          <p>{aboutData.description}</p>
          {/* <a href="#" className="cta">
            Download Resume
          </a> */}
        </div>
      </div>
    </section>
  );
}
