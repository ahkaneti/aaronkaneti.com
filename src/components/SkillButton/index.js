import React from 'react';

import { SkillWrapper } from './styles';

export const SkillButton = props => {
  return (
    <SkillWrapper
      onClick={props.onClick}
      selected={props.selected}
      palette={props.palette}
    >
      <p>{props.name === 'RN' ? 'React Native' : props.name}</p>
    </SkillWrapper>
  );
};
