import React, { useState, useEffect } from 'react';
import { CardWrapper } from './styles';

export const ProjectCard = ({ project, lower, index }) => {
  const [position, setPosition] = useState();
  const [isShown, setIsShown] = useState();
  const [size, setSize] = useState();
  useEffect(() => {
    setPosition(index - lower);
    setIsShown([0, 1, 2, 3, 4].includes(index - lower));
    setSize(
      [0, 4].includes(index - lower)
        ? 'small'
        : [1, 3].includes(index - lower)
        ? 'medium'
        : index - lower === 2
        ? 'large'
        : 'nothing'
    );
  }, [lower, index]);
  return (
    <CardWrapper
      lower={lower}
      position={position}
      isShown={isShown}
      size={size}
    >
      <img src={project.logo} alt={project.name} />
    </CardWrapper>
  );
};
