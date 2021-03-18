import styled from 'styled-components';

export const SkillHolder = styled.div`
  background: #eee;
  width: 550px;
  height: 30px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const NameHolder = styled.div`
  height: 100%;
  width: 200px;
  padding: 0px 10px;
  background: #7efff5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const SkillPercentage = styled.div`
  background: #67e6dc;
  width: ${({ skill }) => `${skill}`};
  height: inherit;
`;
export const TotalPercentage = styled.div`
  width: 100%;
`;
export const PercentageHolder = styled.div`
  position: absolute;
  right: 10px;
  color: #666;
`;
