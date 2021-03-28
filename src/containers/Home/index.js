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
  SkillSection,
} from './styles';
import { ProjectCard } from 'components/ProjectCard';
import { useOnScreen } from 'hooks/useOnScreen';

//Pics

//Dark Mode Toggle shits
import { useColor } from 'hooks/useColor';

//Components
import { Logo } from 'components/Logo';
import { SkillButton } from 'components/SkillButton';
import { Skill } from 'components/Skill';
import { Project } from 'components/Project';
import { UpperHolder } from 'components/UpperHolder';
import { EduModal } from 'components/EduModal';

//Assets
import { skills } from 'assets/skills';
import { PROJECTS } from 'assets/projects';
import { WorkingOnItModal } from 'components/WorkingOnItModal';

export const Home = () => {
  const [projects, setProjects] = useState(PROJECTS.projects);

  //Carousel movement
  const [canIncrease, setCanIncrease] = useState(true);
  const [canDecrease, setCanDecrease] = useState(true);

  //Should I show project or not
  const [showProject, setShowProject] = useState(false);

  //Do I display the education & experience modal
  const [displayEduModal, setDisplayEduModal] = useState(false);

  //Do I display the working modal
  const [displayWorkingModal, setDisplayWorkingModal] = useState(false);

  //Whats the leftmost project
  const [lower, setLower] = useState(-2);

  //Whats the selected project
  const [selectedProject, setSelectedProject] = useState(projects[lower + 2]);

  //Skill Filter for project carousel
  const [selectedSkill, setSelectedSkill] = useState('All');

  const onScreenRef = useRef();

  const { palette, textPalette, darkMode, setDarkMode } = useColor();

  const onScreen = useOnScreen(onScreenRef, '-10px');

  const wasOnScreen = useRef(0);

  useEffect(() => {
    setSelectedProject(projects[lower + 2]);
  }, [projects, lower]);

  useEffect(() => {
    wasOnScreen.current += 1;
  }, [onScreen]);

  useEffect(() => {
    if (lower === projects.length - 3) {
      setCanIncrease(false);
      return;
    }
    if (lower === -2) {
      setCanDecrease(false);
      return;
    }
    setCanDecrease(true);
    setCanIncrease(true);
  }, [lower, projects]);

  const nextProject = useCallback(() => {
    if (lower < projects.length - 3 && canIncrease) {
      setLower(prev => prev + 1);
      setCanDecrease(true);
    }
  }, [lower, canIncrease, projects.length]);
  const previousProject = useCallback(() => {
    if (lower > -2 && canDecrease) {
      setLower(prev => prev - 1);
      setCanIncrease(true);
    }
  }, [canDecrease, lower]);
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
      setCanIncrease(true);
      setCanDecrease(true);
    } else {
      setProjects(
        PROJECTS.projects.filter(proj =>
          proj.used_technologies.toLowerCase().includes(skill.toLowerCase())
        )
      );
      setLower(-2);
      setCanIncrease(true);
    }
  };

  return (
    <Screen palette={palette}>
      <UpperHolder
        onBackClick={handleBackClick}
        onChange={setDarkMode}
        mode={darkMode}
        palette={palette}
        textPalette={textPalette}
      />
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
            name={'React Native'}
            onClick={() => filterSkill('React Native')}
            selected={selectedSkill === 'React Native'}
            palette={palette}
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
        <ArrowWrapper more={canIncrease} less={canDecrease}>
          <i
            className={
              canDecrease
                ? 'ri-arrow-left-circle-line'
                : 'ri-arrow-left-circle-line disabled'
            }
            onClick={() => {
              previousProject();
            }}
          />
          <p>{selectedProject.name}</p>
          <i
            className={'ri-arrow-right-circle-line'}
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
      />
      <LogoHolder>
        <Logo
          name={'Hobbies'}
          onClick={() => {
            handleWorkingModal();
          }}
          palette={palette}
        />

        {displayWorkingModal && (
          <WorkingOnItModal
            handleWorkingModal={handleWorkingModal}
            palette={palette}
          />
        )}
        <Logo
          name={'Experience'}
          style={{ margin: '0px 15%' }}
          onClick={() => {
            handleEduModal();
          }}
          palette={palette}
        />
        {displayEduModal && (
          <EduModal handleEduModal={handleEduModal} palette={palette} />
        )}
        <Logo name={'Resume'} palette={palette} />
      </LogoHolder>
      <SkillSection ref={onScreenRef} palette={palette}>
        {onScreen || wasOnScreen.current >= 2 ? (
          <SkillWrapper>
            {skills.map(skill => {
              return (
                <Skill
                  skill={skill}
                  key={skill.name}
                  selected={selectedSkill}
                  palette={palette}
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
