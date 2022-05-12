import styled, { keyframes } from 'styled-components/macro';

import { TEXT_COLORS } from 'tokens/colors';
// import { TEXT_SIZES } from 'tokens/text';

export const TotalSkill = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  margin: 10px;
  border-radius: 8px;
  overflow: hidden;
`;

export const SkillHolder = styled.div`
  background: ${({ palette }) => palette.DARKEST};
  width: 550px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const NameHolder = styled.div`
  height: 100%;
  width: 120px;
  padding: 0px 10px;
  background: ${({ palette }) => palette.LIGHTER};
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
  background: ${({ palette }) => palette.LIGHTEST};
  animation: ${({ skill }) => growSkill(skill)} 1s 0.2s forwards;
  height: inherit;
`;

export const PercentageHolder = styled.div`
  position: absolute;
  right: 10px;
  color: ${TEXT_COLORS.DARKEST};
`;
