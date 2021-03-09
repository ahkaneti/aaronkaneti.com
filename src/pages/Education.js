import React from "react";
import "../styles/App.css";
import "../styles/education.css";

import education from "../assets/education.json";
import experience from "../assets/experience.json";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

const Education = (props) => {
  return (
    <div className="App">
      <div className={props.mode ? "midpart light-screen" : "midpart"}>
        <h1>
          <Typist>
            <Typist.Delay ms={1000} />
            Education & Experience
          </Typist>
        </h1>
        <div className="holder">
          <div className="education">
            <h2>Education</h2>
            {education.map((edu, index) => {
              return (
                <div className={props.mode ? "light-component box" : "box"}>
                  <p className="year">{edu.year}</p>
                  <p className="title">
                    <strong>{edu.name}</strong>
                  </p>
                  <p className="description">{edu.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="experience">
            <h2>Experience</h2>
            {experience.map((exp, index) => {
              return (
                <div className={props.mode ? "box light-component" : "box"}>
                  <p className="year">{exp.year}</p>
                  <p className="title">
                    <strong>{exp.name}</strong>
                  </p>
                  <p className="description">{exp.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
