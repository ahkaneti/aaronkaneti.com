import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Screen,
  ProjectHolder,
  ProjectCarousel,
  ArrowWrapper,
  LogoHolder,
  SkillFilterWrapper,
  SocialMediaWrapper,
  ToggleWrapper,
  PhotoWrapper,
  UpperWrapper,
  ShortInfo,
  PhotoNameWrapper,
  ContactButton,
  Copied,
} from './styles';
import { ProjectCard } from 'components/ProjectCard';
import { useOnScreen } from 'hooks/useOnScreen';

//Pics
// import snow from 'assets/snow.png';

//Additions
import DarkModeToggle from 'react-dark-mode-toggle'; //https://github.com/cawfree/react-dark-mode-toggle#readme

//Pics
import AHK from 'assets/AHK.png';

//Dark Mode Toggle shits
import { useColor } from 'hooks/useColor';

//Components
import { Logo } from 'components/Logo';
import { SkillButton } from 'components/SkillButton';
import { Project } from 'components/Project';

//Assets
import { PROJECTS } from 'assets/projects';

export const MobileHome = ({ small }) => {
  const [projects, setProjects] = useState(PROJECTS.projects);
  const [more, setMore] = useState(true);
  const [less, setLess] = useState(true);

  const [showProject, setShowProject] = useState(false);

  const [lower, setLower] = useState(-2);
  const [selectedProject, setSelectedProject] = useState(projects[lower + 2]);
  const [selectedSkill, setSelectedSkill] = useState('All');
  const [contact, setContact] = useState('Contact Me');
  const [copied, setCopied] = useState(false);
  const copy = () => {
    const textField = document.createElement('textarea');
    textField.innerText = 'aaronkaneti@gmail.com';
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const onScreenRef = useRef();
  // const windowSizeRef = useRef();

  const { palette, darkMode, setDarkMode } = useColor();

  const onScreen = useOnScreen(onScreenRef, '-10px');
  // const windowSize = useWindowSize(windowSizeRef);

  const wasOnScreen = useRef(0);

  useEffect(() => {
    setSelectedProject(projects[lower + 2]);
  }, [projects, lower]);

  useEffect(() => {
    wasOnScreen.current += 1;
  }, [onScreen]);

  useEffect(() => {
    if (lower === projects.length - 3) {
      setMore(false);
      return;
    }
    if (lower === -2) {
      setLess(false);
      return;
    }
    setLess(true);
    setMore(true);
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

  const projectsRef = useRef();

  const handleBackClick = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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
    setSelectedSkill(skill || 'All');
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
      setLower(-2);
    }
  };

  return (
    <Screen palette={palette}>
      <UpperWrapper>
        <ToggleWrapper>
          <DarkModeToggle onChange={setDarkMode} checked={darkMode} size={75} />
        </ToggleWrapper>
        <h1>Hi! I'm</h1>
        <PhotoNameWrapper>
          <PhotoWrapper place="intro" palette={palette}>
            <img alt="ahk" src={AHK} />
            <ShortInfo two palette={palette}>
              a Frontend Engineer
            </ShortInfo>
          </PhotoWrapper>
        </PhotoNameWrapper>
        <h2> Aaron Kaneti</h2>

        <ContactButton
          palette={palette}
          onMouseEnter={() => {
            setContact('aaronkaneti@gmail.com');
          }}
          onMouseLeave={() => setContact('Contact Me')}
          onClick={() => copy()}
        >
          {contact}
        </ContactButton>

        <p>open to new positions</p>
        <Copied palette={palette} copied={copied}>
          Copied to clipboard.
        </Copied>
        <i className="ri-arrow-down-line" onClick={handleBackClick} />
      </UpperWrapper>
      <ProjectCarousel ref={projectsRef} palette={palette}>
        <SkillFilterWrapper>
          <SkillButton
            name={'All'}
            onClick={() => filterSkill()}
            selected={selectedSkill === 'All'}
            palette={palette}
          />
          <SkillButton
            name={'Python'}
            onClick={() => filterSkill('Python')}
            selected={selectedSkill === 'Python'}
            palette={palette}
          />
          <SkillButton
            name={'React'}
            onClick={() => filterSkill('React.js')}
            selected={selectedSkill === 'React.js'}
            palette={palette}
          />

          <SkillButton
            name={'RN'}
            onClick={() => filterSkill('React Native')}
            selected={selectedSkill === 'React Native'}
            palette={palette}
          />
        </SkillFilterWrapper>
        <ProjectHolder>
          {projects.map((project, index) => {
            return (
              <ProjectCard
                index={index}
                project={project}
                key={index}
                lower={lower}
                onClick={() => setShowProject(prev => !prev)}
                nextProject={nextProject}
                previousProject={previousProject}
                small
              />
            );
          })}
        </ProjectHolder>
        <ArrowWrapper more less>
          <i
            className={
              less
                ? 'ri-arrow-left-circle-line'
                : 'ri-arrow-left-circle-line disabled'
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
                : 'ri-arrow-right-circle-line disabled'
            }
            onClick={() => {
              nextProject();
            }}
          />
        </ArrowWrapper>
      </ProjectCarousel>
      <Project
        project={selectedProject}
        showProject={showProject}
        palette={palette}
        small
      />
      <LogoHolder small>
        <Logo name={'Resume'} palette={palette} small />
      </LogoHolder>
      <SocialMediaWrapper palette={palette}>
        <a
          href="https://www.facebook.com/harunkaneti/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-facebook-box-fill" />
        </a>
        <a
          href="https://linkedin.com/in/aaronkaneti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-linkedin-box-fill" />
        </a>
        <a
          href="https://github.com/ahkaneti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-github-fill" />
        </a>
        <a
          href="https://www.instagram.com/ahkaneti/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-instagram-fill" />
        </a>
        <a
          href="https://twitter.com/AaronKaneti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-twitter-fill" />
        </a>
      </SocialMediaWrapper>
    </Screen>
  );
};
