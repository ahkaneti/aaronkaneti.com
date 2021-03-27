import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Screen,
  ProjectHolder,
  ProjectCarousel,
  ArrowWrapper,
  LogoHolder,
  SkillFilterWrapper,
  SkillWrapper,
  SocialMediaWrapper,
  // PhotoWrapper,
  SkillSection,
} from './styles';
import { ProjectCard } from 'components/ProjectCard';
import { useOnScreen } from 'hooks/useOnScreen';
// import { useWindowSize } from 'hooks/useWindowSize';

//Pics
// import snow from 'assets/snow.png';

//Components
import { Logo } from 'components/Logo';
import { SkillButton } from 'components/SkillButton';
import { Skill } from 'components/Skill';
import { Project } from 'components/Project';
import { UpperHolder } from 'components/UpperHolder';
import { EduModal } from 'components/EduModal';

//Assets
import skills from 'assets/skills';
import { PROJECTS } from 'assets/projects';
import { WorkingOnItModal } from 'components/WorkingOnItModal';

export const Home = () => {
  const [projects, setProjects] = useState(PROJECTS.projects);
  const [more, setMore] = useState(true);
  const [less, setLess] = useState(true);
  // const [search, setSearch] = useState('');
  const [showProject, setShowProject] = useState(false);
  const [displayEduModal, setDisplayEduModal] = useState(false);
  const [displayWorkingModal, setDisplayWorkingModal] = useState(false);

  const [lower, setLower] = useState(-2);
  const [selectedProject, setSelectedProject] = useState(projects[lower + 2]);
  const [selectedSkill, setSelectedSkill] = useState('All');

  const onScreenRef = useRef();
  // const windowSizeRef = useRef();

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
  const handleEduModal = () => {
    setDisplayEduModal(prev => !prev);
  };
  const handleWorkingModal = () => {
    setDisplayWorkingModal(prev => !prev);
  };

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
    <Screen>
      <UpperHolder onBackClick={handleBackClick} />
      <ProjectCarousel ref={projectsRef}>
        <SkillFilterWrapper>
          <SkillButton
            name={'Python'}
            onClick={() => filterSkill('Python')}
            selected={selectedSkill === 'Python'}
          />
          <SkillButton
            name={'React'}
            onClick={() => filterSkill('React.js')}
            selected={selectedSkill === 'React.js'}
          />
          <SkillButton
            name={'All'}
            onClick={() => filterSkill()}
            selected={selectedSkill === 'All'}
          />

          <SkillButton
            name={'RN'}
            onClick={() => filterSkill('React Native')}
            selected={selectedSkill === 'React Native'}
          />
          {/* <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          /> */}
        </SkillFilterWrapper>
        <ProjectHolder>
          {projects
            // .filter(proj =>
            //   proj.name.toLowerCase().includes(search.toLowerCase())
            // )
            .map((project, index) => {
              return (
                <ProjectCard
                  index={index}
                  project={project}
                  key={index}
                  lower={lower}
                  onClick={() => setShowProject(prev => !prev)}
                  nextProject={nextProject}
                  previousProject={previousProject}
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
      <Project project={selectedProject} showProject={showProject} />
      <LogoHolder>
        <Logo
          name={'Hobbies'}
          onClick={() => {
            handleWorkingModal();
          }}
        />

        {displayWorkingModal && (
          <WorkingOnItModal handleWorkingModal={handleWorkingModal} />
        )}
        <Logo
          name={'Experience'}
          style={{ margin: '0px 15%' }}
          onClick={() => {
            handleEduModal();
          }}
        />
        {displayEduModal && <EduModal handleEduModal={handleEduModal} />}
        <Logo name={'Resume'} />
      </LogoHolder>
      <SkillSection ref={onScreenRef}>
        {onScreen || wasOnScreen.current >= 2 ? (
          <SkillWrapper>
            {skills.map(skill => {
              return (
                <Skill
                  skill={skill}
                  key={skill.name}
                  selected={selectedSkill}
                />
              );
            })}
          </SkillWrapper>
        ) : (
          <div />
        )}
        {/* <PhotoWrapper>
          <img src={snow} alt="baby" />
        </PhotoWrapper> */}
      </SkillSection>
      <SocialMediaWrapper>
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
