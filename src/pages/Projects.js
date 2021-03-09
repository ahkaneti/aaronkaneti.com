import React from "react";
import "../styles/App.css";
import "../styles/Projects.css";
import { PROJECTS } from "../assets/projects";
import { Accordion, Card, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

const Projects = (props) => {
  return (
    <div className="App">
      <div className={props.mode ? "midpart light-screen" : "midpart"}>
        <div className="outer-holder">
          <div className={props.mode ? "legend light-component" : "legend"}>
            <div className="singular-legend">
              <div className="react legend-circle"></div> <p>React</p>
            </div>
            <div className="singular-legend">
              <div className="react-native legend-circle"></div>
              <p>React Native</p>
            </div>
            <div className="singular-legend">
              <div className="python legend-circle"></div>
              <p>Python</p>
            </div>
            <div className="singular-legend">
              <div className="html legend-circle"></div>
              <p>HTML</p>
            </div>
          </div>

          {PROJECTS.projects.map((project) => (
            <Accordion>
              <Card
                className={props.mode ? "box light-component" : "box"}
                key={project.name}
              >
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <div className="project-legend">
                    <div
                      className={
                        project.used_technologies.includes("React Native")
                          ? "react-native legend-circle"
                          : "" || project.used_technologies.includes("Python")
                          ? "python legend-circle"
                          : "" || project.used_technologies.includes("HTML")
                          ? "html legend-circle"
                          : "react legend-circle"
                      }
                    />
                  </div>
                  <p style={{ fontSize: "25px", marginTop: "2vh" }}>
                    <strong>{project.name}</strong>
                  </p>
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt="logo"
                      className="project-logo"
                    />
                  )}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="line">
                      <p>Github Link: </p>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.github_link}
                      >
                        {project.github_link}
                      </a>
                    </div>
                    <div className="line">
                      <p>Description: </p>
                      <p>{project.short_description}</p>
                    </div>
                    {project.contributors ? (
                      <div className="line">
                        <p>Team Members:</p>
                        <p>{project.contributors}</p>
                      </div>
                    ) : (
                      <div />
                    )}
                    {project.name === "Aaron Kaneti's website" ? (
                      <div />
                    ) : (
                      <Button
                        className="project_button"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        <Link to={"/projects/" + project.name}>
                          {project.name}'s Page
                        </Link>
                      </Button>
                    )}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
