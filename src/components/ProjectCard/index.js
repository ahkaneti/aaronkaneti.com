import React from 'react';
import { CardWrapper, ProjectInfo } from './styles';

export const ProjectCard = ({ project, ...props }) => {
  return (
    <CardWrapper {...props}>
      <img src={project.logo} alt={project.name} />
      <ProjectInfo {...props}>
        <p>Name: {project.name}</p>
        <p>Tech Stack: {project.used_technologies}</p>
        <p>{project.short_description}</p>
      </ProjectInfo>
    </CardWrapper>
  );
};
