import React, { useState, useEffect } from 'react';
import { CardWrapper } from './styles';

export const ProjectCard = ({
  project,
  lower,
  index,
  onClick,
  previousProject,
  nextProject,
  small,
}) => {
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
        : ''
    );
  }, [lower, index]);

  const handleOnClick = (position, onClick) => {
    if (position === 2) {
      onClick();
    } else if (position === 1) {
      previousProject();
    } else if (position === 3) {
      nextProject();
    } else if (position === 4) {
      nextProject();
      nextProject();
    } else if (position === 0) {
      previousProject();
      previousProject();
    }
  };
  return (
    <CardWrapper
      lower={lower}
      position={position}
      isShown={isShown}
      size={size}
      small={small}
      onClick={() => handleOnClick(position, onClick)}
    >
      <img src={project.logo} alt={project.name} />
    </CardWrapper>
  );
};
