import React, { Component } from "react";
import "../styles/singularProject.css";

import { Button } from "react-bootstrap";

import { RiGithubLine } from "react-icons/ri";

export default class Project extends Component {
  render() {
    const {
      name,
      short_description,
      github_link,
      used_technologies,
      description,
      contributors,
      video_link,
      logo,
    } = this.props.project;
    const mode = this.props.mode;
    return (
      <div className="App">
        <div className={mode ? "midpart light-screen" : "midpart"}>
          <div className="short_description_holder">
            <p>{short_description}</p>
          </div>
          <div
            className={
              mode ? "name_logo_holder light-component" : "name_logo_holder"
            }
          >
            <p>{name}</p>
            <img src={logo} className="projectlogo" alt="logo" />
          </div>

          <div className="description_holder">
            <p>{description}</p>
            {contributors ? (
              <p>I worked on this project with {contributors}.</p>
            ) : (
              <div />
            )}
            {name === "hymn" ? (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.hymnco.com/newLook/"
                  style={{ marginBottom: "1%" }}
                >
                  <Button>New Look</Button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.hymnco.com"
                  style={{ marginBottom: "1%" }}
                >
                  <Button>Functional Look</Button>
                </a>
              </div>
            ) : (
              <div />
            )}
            {name === "I-Come-Sopra" ? (
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://i-come-sopra.github.io"
                >
                  <Button>Visit I-Come-Sopra!</Button>
                </a>
              </div>
            ) : (
              <div />
            )}
          </div>
          {video_link ? (
            <iframe
              title={name + "video"}
              width="560"
              height="315"
              src={video_link}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div />
          )}
          <div className="explanation_holder">
            <p>Used technologies: [{used_technologies}]</p>
          </div>
          <Button>
            <a target="_blank" rel="noopener noreferrer" href={github_link}>
              <RiGithubLine size={55} color="white" />
            </a>
          </Button>
        </div>
      </div>
    );
  }
}
