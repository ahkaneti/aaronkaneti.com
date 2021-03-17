import React, { useState } from "react";
import { CardWrapper } from "./styles";

export const ProjectCard = ({ project, ...props }) => {
  return (
    <CardWrapper {...props}>
      <img src={project.logo} alt={project.name} />
    </CardWrapper>
  );
};
