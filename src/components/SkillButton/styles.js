import styled from 'styled-components/macro';

import { TEXT_SIZES } from 'tokens/text';

export const SkillWrapper = styled.div`
  display: flex;
  width: 100px;
  height: 50px;
  background: darkgrey;
  font-size: ${TEXT_SIZES.SMALL}px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  &:last-child {
    /* margin-left: 0px; */
  }
  border-radius: 10px;
  &:hover {
    background: lightgrey;
    cursor: pointer;
  }
`;
