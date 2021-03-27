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

export const Project = ({ project, showProject }) => {
  return (
    <ProjectHolder showProject={showProject}>
      <UpperHolder color={project.color}>
        <LogoHolder>
          <img src={project.logo} alt={project.name} />
        </LogoHolder>
        <InfoHolder>
          <NameHolder>{project.name}</NameHolder>
          <DescHolder>{project.short_description}</DescHolder>
          <TechStackHolder>{project.used_technologies}</TechStackHolder>
        </InfoHolder>
      </UpperHolder>
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
                <WebsiteButton>{project.name}'s Website</WebsiteButton>
              </a>
              {project.name === 'hymn' && (
                <a
                  href={project.second_website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WebsiteButton>hymn's new look</WebsiteButton>
                </a>
              )}
            </ButtonHolder>
          )}

          <Contributor>Contributors: {project.contributors}</Contributor>
        </LeftHolder>
        {project.video_link && (
          <RightHolder>
            <VideoHolder video>
              <iframe
                title={project.name + 'video'}
                width="560"
                height="315"
                src={project.video_link}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </VideoHolder>
          </RightHolder>
        )}
      </LowerHolder>
    </ProjectHolder>
  );
};
