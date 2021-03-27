import styled, { keyframes } from 'styled-components/macro';

import { BACKGROUND_COLORS, TEXT_COLORS } from 'tokens/colors';
// import { TEXT_SIZES } from 'tokens/text';

export const TotalSkill = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  margin: 10px;
`;

export const SkillHolder = styled.div`
  background: ${BACKGROUND_COLORS.LIGHTEST};
  width: 550px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const NameHolder = styled.div`
  height: 100%;
  width: 100px;
  padding: 0px 10px;
  background: ${BACKGROUND_COLORS.DEFAULT};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${TEXT_COLORS.DEFAULT};
`;

const growSkill = skill => keyframes`
0% {width: 0;}
100% {width: ${skill};}
`;

export const SkillPercentage = styled.div`
  background: ${BACKGROUND_COLORS.DARKEST};
  animation: ${({ skill }) => growSkill(skill)} 1s 0.2s;
  width: ${({ skill }) => skill};
  height: inherit;
`;

export const PercentageHolder = styled.div`
  position: absolute;
  right: 10px;
  color: ${TEXT_COLORS.DARKEST};
`;
