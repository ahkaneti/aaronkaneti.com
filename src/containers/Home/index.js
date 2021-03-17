import React, { useState, useEffect } from "react";
import {
  Screen,
  Capital,
  Name,
  NameHolder,
  ProjectHolder,
  ProjectCarousel,
  ArrowWrapper,
  NameFade,
} from "./styles";
import "./Home.css";
import { ProjectCard } from "components/ProjectCard";

import { PROJECTS } from "assets/projects.jsx";

export const Home = () => {
  const [projects, setProjects] = useState(PROJECTS);
  const [aneti, setAneti] = useState(false);
  const [lower, setLower] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAneti(true);
    }, 1500);
  }, []);

  const nextProject = () => {
    setLower(lower + 1);
    setProjects(PROJECTS);
  };
  const previousProject = () => {
    setLower(lower - 1);
  };

  return (
    <Screen>
      <h1 className="intro">Hi I'm</h1>
      <NameHolder first>
        <Capital>A</Capital>
        <Name>
          aron
          <NameFade />
        </Name>
      </NameHolder>
      <NameHolder last>
        <Capital>K</Capital>
        {aneti && (
          <Name>
            aneti <NameFade />
          </Name>
        )}
      </NameHolder>
      <ProjectCarousel>
        <ProjectHolder>
          {projects.projects.map((project, index) => {
            return (
              <ProjectCard
                index={index}
                project={project}
                key={index}
                lower={lower}
              />
            );
          })}
        </ProjectHolder>
        <ArrowWrapper>
          <i
            className="ri-arrow-left-circle-line"
            onClick={() => {
              previousProject();
            }}
          />
          <i
            className="ri-arrow-right-circle-line"
            onClick={() => {
              nextProject();
            }}
          />
        </ArrowWrapper>
      </ProjectCarousel>
    </Screen>
  );
};
