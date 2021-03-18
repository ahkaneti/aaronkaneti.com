import React from 'react';

import {
  SkillHolder,
  NameHolder,
  PercentageHolder,
  SkillPercentage,
  TotalPercentage,
} from './styled';

export const Skill = ({ skill }) => {
  return (
    <SkillHolder>
      <NameHolder>{skill.name}</NameHolder>
      <SkillPercentage skill={skill.skill} />
      <TotalPercentage>
        <PercentageHolder>{skill.skill}</PercentageHolder>
      </TotalPercentage>
    </SkillHolder>
  );
};
