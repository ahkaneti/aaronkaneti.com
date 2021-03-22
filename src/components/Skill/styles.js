import styled, { keyframes } from 'styled-components';

export const TotalSkill = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  margin: 10px;
`;

export const SkillHolder = styled.div`
  background: #eee;
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
  background: #7efff5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const growSkill = skill => keyframes`
0% {width: 0;}
${({ skill }) => console.log(skill)}
100% {width: ${skill};}
`;

export const SkillPercentage = styled.div`
  background: #67e6dc;
  /* transition: ${({ skill }) => growSkill(skill)} 1.1s 0.2s width; */
  animation: ${({ skill }) => growSkill(skill)} 1s 0.2s;
  width: ${({ skill }) => skill};
  height: inherit;
`;

export const PercentageHolder = styled.div`
  position: absolute;
  right: 10px;
  color: #666;
`;
