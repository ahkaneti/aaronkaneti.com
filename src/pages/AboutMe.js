import React from "react";
import "../styles/App.css";
import "../styles/AboutMe.css";

import Logos from "../components/Logos.js";
import skills from "../assets/skills.json";

import Typist from "react-typist";
import "react-typist/dist/Typist.css";

const AboutMe = (props) => {
  return (
    <div className="App">
      <div className={props.mode ? "midpart light-screen" : "midpart"}>
        <h1>
          <Typist>
            <Typist.Delay ms={1000} />
            About <strong>Me</strong>
          </Typist>
        </h1>
        <h3>
          Bachelor of Science in Psychology & Computer Science <br /> Front-End
          Engineer • Data Analyst
        </h3>
        <p
          style={{
            marginLeft: "10%",
            marginRight: "10%",
            fontFamily: "monospace",
          }}
        >
          <strong>
            I am a software engineer that strives to create code that is as
            ergonomically induced as possible. My aim, when coding, is to create
            code that <i>anyone</i> can use.
          </strong>
        </p>
        <h1>
          <Typist>
            <Typist.Delay ms={2000} />
            <strong>Technical Expertise</strong>
          </Typist>
        </h1>
        <div className="expertise-row">
          {skills.map((skill, index) => {
            return (
              <div
                className={
                  props.mode ? "all-parts light-component" : "all-parts"
                }
              >
                <p className="subject">
                  <strong>{skill.name}</strong>
                </p>
                <p className="percentage">{skill.skill}</p>
                <div className="total">
                  <div
                    className={
                      props.mode ? "achieved light-screen" : "achieved"
                    }
                    style={{ width: skill.skill }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Logos mode={props.mode} />
    </div>
  );
};
export default AboutMe;
