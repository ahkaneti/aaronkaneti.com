import styled from 'styled-components/macro';

import { TEXT_COLORS } from 'tokens/colors';

import { TEXT_SIZES } from 'tokens/text';

export const SkillWrapper = styled.div`
  display: flex;
  width: 135px;
  height: 50px;
  ${({ selected, palette }) =>
    selected &&
    `
  background: ${palette.VIBRANT};`}
  transition: ease-out 500ms;
  font-size: ${TEXT_SIZES.DEFAULT}px;
  text-align: center;
  color: ${TEXT_COLORS.DEFAULT};
  justify-content: center;
  align-items: center;
  margin-left: 10px;

  cursor: pointer;
  &:last-child {
    /* margin-left: 0px; */
  }
  /* border-radius: 10px; */
`;
