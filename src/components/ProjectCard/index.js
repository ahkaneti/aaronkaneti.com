import React, { useState, useEffect } from "react";
import { CardWrapper } from "./styles";

export const ProjectCard = ({ project, ...props }) => {
  const [position, setPosition] = useState(props.index - props.lower);

  useEffect(() => {
    setPosition(position - props.lower);
  }, [position, props.lower]);

  return (
    <CardWrapper {...props} position={position}>
      <img src={project.logo} alt={project.name} />
    </CardWrapper>
  );
};
