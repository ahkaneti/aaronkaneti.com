import React from 'react';

import {
  ProjectHolder,
  LogoHolder,
  UpperHolder,
  InfoHolder,
  NameHolder,
  DescHolder,
  TechStackHolder,
  LowerHolder,
  LeftHolder,
  ButtonHolder,
  WebsiteButton,
  RightHolder,
  VideoHolder,
  Description,
  Contributor,
} from './styles.js';

export const Project = ({ project, showProject, palette }) => {
  return (
    <ProjectHolder showProject={showProject} palette={palette}>
      {
        <UpperHolder color={project.color} palette={palette}>
          <LogoHolder>
            <img src={project.logo} alt={project.name} />
          </LogoHolder>
          <InfoHolder>
            <NameHolder>{project.name}</NameHolder>
            <DescHolder>{project.short_description}</DescHolder>
            <TechStackHolder>{project.used_technologies}</TechStackHolder>
          </InfoHolder>
        </UpperHolder>
      }
      <LowerHolder color={project.color}>
        <LeftHolder>
          <Description>{project.description}</Description>
          <a
            href={project.github_link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="ri-github-fill" />
          </a>
          {project.website_link && (
            <ButtonHolder>
              <a
                href={project.website_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WebsiteButton palette={palette}>
                  Go To {project.name}
                </WebsiteButton>
              </a>
              {project.name === 'hymn' && (
                <a
                  href={project.second_website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WebsiteButton palette={palette}>
                    hymn's new look
                  </WebsiteButton>
                </a>
              )}
            </ButtonHolder>
          )}

          {project.contributors && (
            <Contributor>Contributors: {project.contributors}</Contributor>
          )}
        </LeftHolder>
        {project.video_link && (
          <RightHolder>
            <VideoHolder video>
              <iframe
                title={project.name + 'video'}
                src={project.video_link}
                frameBorder="0"
                allowFullScreen
              />
            </VideoHolder>
          </RightHolder>
        )}
      </LowerHolder>
    </ProjectHolder>
  );
};
