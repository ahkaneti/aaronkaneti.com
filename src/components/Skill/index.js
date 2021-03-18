import React from 'react';

import {
  TotalSkill,
  SkillHolder,
  NameHolder,
  PercentageHolder,
  SkillPercentage,
} from './styled';

export const Skill = ({ skill }) => {
  return (
    <TotalSkill>
      <NameHolder>{skill.name}</NameHolder>
      <SkillHolder>
        <SkillPercentage skill={skill.skill} />
        <PercentageHolder>{skill.skill}</PercentageHolder>
      </SkillHolder>
    </TotalSkill>
  );
};
