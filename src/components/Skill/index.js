import React from 'react';

import {
  TotalSkill,
  SkillHolder,
  NameHolder,
  PercentageHolder,
  SkillPercentage,
} from './styles';

export const Skill = ({ skill, palette }) => {
  return (
    <TotalSkill>
      <NameHolder palette={palette}>{skill.name}</NameHolder>
      <SkillHolder palette={palette}>
        <SkillPercentage skill={skill.skill} palette={palette} />
        <PercentageHolder>{skill.skill}</PercentageHolder>
      </SkillHolder>
    </TotalSkill>
  );
};
