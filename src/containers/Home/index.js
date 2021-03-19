import React, { useState, useEffect, useCallback } from 'react';
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
  SkillFilterWrapper,
  SkillWrapper,
  SocialMediaWrapper,
} from './styles';
import './Home.css';
import { ProjectCard } from 'components/ProjectCard';
import { PhotoHolder } from 'components/PhotoHolder';
import { Logo } from 'components/Logo';
import { SkillButton } from 'components/SkillButton';
import { Skill } from 'components/Skill';
import { Project } from 'components/Project';

import skills from 'assets/skills';

import { PROJECTS } from 'assets/projects.jsx';

export const Home = () => {
  const [projects, setProjects] = useState(PROJECTS.projects);
  const [aneti, setAneti] = useState(false);
  const [more, setMore] = useState(true);
  const [less, setLess] = useState(true);
  const [search, setSearch] = useState('');

  const [lower, setLower] = useState(0);
  const [selectedProject, setSelectedProject] = useState(projects[lower + 2]);

  useEffect(() => {
    setTimeout(() => {
      setAneti(true);
    }, 1500);
  }, []);

  useEffect(() => {
    setSelectedProject(projects[lower + 2]);
  }, [projects, lower]);

  //React PDF pages has been installed

  useEffect(() => {
    if (lower === projects.length - 3) {
      setMore(false);
    }
    if (lower === -2) {
      setLess(false);
    }
  }, [lower, projects]);

  const nextProject = useCallback(() => {
    if (lower < projects.length - 3 && more) {
      setLower(prev => prev + 1);
      setLess(true);
    }
  }, [lower, more, projects.length]);
  const previousProject = useCallback(() => {
    if (lower > -2 && less) {
      setLower(prev => prev - 1);
      setMore(true);
    }
  }, [less, lower]);

  useEffect(() => {
    const handleUserPress = e => {
      if (e.keyCode === 39) {
        nextProject();
      } else if (e.keyCode === 37) {
        previousProject();
      }
    };
    window.addEventListener('keydown', handleUserPress);
    return () => {
      window.removeEventListener('keydown', handleUserPress);
    };
  }, [nextProject, previousProject]);

  const filterSkill = skill => {
    if (!skill) {
      setProjects(PROJECTS.projects);
      setMore(true);
      setLess(true);
    } else {
      setProjects(
        PROJECTS.projects.filter(proj =>
          proj.used_technologies.toLowerCase().includes(skill.toLowerCase())
        )
      );
      setLower(0);
    }
  };

  return (
    <Screen>
      <h1 className="intro">Hi I'm</h1>
      <UpperHolder>
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
        <PhotoHolder />
      </UpperHolder>
      <ProjectCarousel>
        <SkillFilterWrapper>
          <SkillButton name={'Python'} onClick={() => filterSkill('Python')} />
          <SkillButton name={'React'} onClick={() => filterSkill('React.js')} />
          <SkillButton
            name={'RN'}
            onClick={() => filterSkill('React Native')}
          />
          <SkillButton name={'Reset'} onClick={() => filterSkill()} />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </SkillFilterWrapper>
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
          <p>{selectedProject.name}</p>
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
      <Project project={selectedProject} />
      <LogoHolder>
        <Logo hobby={true} />
        <Logo exp={true} style={{ margin: '0px 15%' }} />
        <Logo />
      </LogoHolder>
      <SkillWrapper>
        {skills.map(skill => {
          return <Skill skill={skill} key={skill.name} />;
        })}
      </SkillWrapper>
      <SocialMediaWrapper>
        <i class="ri-facebook-box-fill" />
        <i class="ri-linkedin-box-fill" />
        <i class="ri-github-fill" />
        <i class="ri-instagram-fill" />
        <i class="ri-twitter-fill" />
      </SocialMediaWrapper>
    </Screen>
  );
};
