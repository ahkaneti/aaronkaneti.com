import React, { useState, useEffect } from 'react';
import {
  Screen,
  Capital,
  Name,
  WordHolder,
  NameHolder,
  ProjectHolder,
  ProjectCarousel,
  ArrowWrapper,
  NameFade,
  UpperHolder,
  LogoHolder,
} from './styles';
import './Home.css';
import { ProjectCard } from 'components/ProjectCard';
import { PhotoHolder } from 'components/PhotoHolder';
import { Logo } from 'components/Logo';

import { PROJECTS } from 'assets/projects.jsx';

export const Home = () => {
  const projects = PROJECTS.projects;
  const [aneti, setAneti] = useState(false);
  const [more, setMore] = useState(true);
  const [less, setLess] = useState(true);
  const [search, setSearch] = useState('');

  const [lower, setLower] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAneti(true);
    }, 1500);
  }, []);

  useEffect(() => {
    if (lower === projects.length - 3) {
      // console.log(
      //   "somehow have the program show the last element as the first element"
      // );
      setMore(false);
    }
    if (lower === -2) {
      setLess(false);
    }
    // console.log(
    //   `lower is ${lower} and is supposed to show ${projects[lower]?.name},${
    //     projects[lower + 1]?.name
    //   }, ${projects[lower + 2]?.name}, ${projects[lower + 3]?.name}, ${
    //     projects[lower + 4]?.name
    //   }`
    // );
  }, [lower, projects]);

  const nextProject = () => {
    if (lower < projects.length - 3 && more) {
      setLower(prev => prev + 1);
      setLess(true);
    }
  };
  const previousProject = () => {
    if (lower > -2 && less) {
      setLower(prev => prev - 1);
      setMore(true);
    }
  };

  return (
    <Screen>
      <h1 className="intro">Hi I'm</h1>
      <UpperHolder>
        <PhotoHolder />
        <NameHolder>
          <WordHolder first>
            <Capital>A</Capital>
            <Name>
              aron
              <NameFade />
            </Name>
          </WordHolder>
          <WordHolder last>
            <Capital>K</Capital>
            {aneti && (
              <Name>
                aneti <NameFade />
              </Name>
            )}
          </WordHolder>
        </NameHolder>
      </UpperHolder>
      <ProjectCarousel>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <ProjectHolder>
          {projects
            .filter(proj =>
              proj.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((project, index) => {
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
            className={
              less
                ? 'ri-arrow-left-circle-line'
                : 'ri-arrow-left-circle-line gray'
            }
            onClick={() => {
              previousProject();
            }}
          />
          <i
            className={
              more
                ? 'ri-arrow-right-circle-line'
                : 'ri-arrow-right-circle-line gray'
            }
            onClick={() => {
              nextProject();
            }}
          />
        </ArrowWrapper>
      </ProjectCarousel>
      <LogoHolder>
        <Logo hobby={true} />
        <Logo exp={true} />
        <Logo />
      </LogoHolder>
    </Screen>
  );
};
