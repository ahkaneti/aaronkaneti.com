import React from 'react';
import { CardWrapper } from './styles';

export const ProjectCard = ({ project, lower, index, ...props }) => {
  return (
    <CardWrapper lower={lower} index={index}>
      <img src={project.logo} alt={project.name} />
    </CardWrapper>
  );
};
