import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

//Pages
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import MobileHome from "./pages/MobileHome";
import ProjectsMobile from "./pages/ProjectsMobile";
import Project from "./components/singularProject";
import ProjectMobile from "./components/singularProjectMobile";

//Assets
import { PROJECTS } from "./assets/projects";

//Components
import Sidebar from "./components/sidebar";

//Handlers
import { HashRouter as Router, Switch, Route } from "react-router-dom";

require("typeface-montserrat");
export default function App() {
  const [mode, setMode] = useState(true);
  const device = window.innerWidth <= 1200 || window.innerHeight < 600;

  function handleChange() {
    setMode(!mode);
  }
  return (
    <Router basename="/">
      <Switch>
        <React.Fragment>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {device ? <div /> : <Sidebar mode={mode} onChange={handleChange} />}
            {device ? (
              <Route
                exact
                path="/"
                component={() => (
                  <MobileHome mode={mode} onChange={handleChange} />
                )}
              />
            ) : (
              <Route exact path="/" component={() => <Home mode={mode} />} />
            )}
            <Route
              exact
              path="/aboutme"
              component={() => <AboutMe mode={mode} />}
            />
            <Route
              exact
              path="/resume"
              component={() => <Resume mode={mode} device={device} />}
            />
            <Route
              exact
              path="/educationexperience"
              component={() => <Education mode={mode} />}
            />
            {PROJECTS.projects.map((project) => (
              <Route
                path={"/projects/" + project.name}
                key={project.name}
                component={() =>
                  device ? (
                    <ProjectMobile project={project} mode={mode} />
                  ) : (
                    <Project project={project} mode={mode} />
                  )
                }
              />
            ))}
            <Route
              exact
              path="/projects"
              component={() =>
                device ? (
                  <ProjectsMobile mode={mode} />
                ) : (
                  <Projects mode={mode} />
                )
              }
            />
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}
