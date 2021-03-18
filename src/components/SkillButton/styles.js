import styled from 'styled-components';

export const SkillWrapper = styled.div`
  display: flex;
  width: 100px;
  height: 50px;
  background: darkgrey;
  font-size: 12px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  &:last-child {
    /* margin-left: 0px; */
  }
  &:hover {
    background: lightgrey;
    cursor: pointer;
  }
`;
