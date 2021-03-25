import styled from 'styled-components/macro';

import { BACKGROUND_COLORS, TEXT_COLORS } from 'tokens/colors';
import { TEXT_SIZES } from 'tokens/text';

export const LogoInfo = styled.div`
  opacity: 0;
  background: ${BACKGROUND_COLORS.DEFAULT};
  transition: 500ms;
  height: 200px;
  width: 200px;
  padding: 20px;
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  transition: 500ms;
  border: 2px solid ${BACKGROUND_COLORS.DARKEST};
`;

export const LogoWrapper = styled.div`
  height: 200px;
  img {
    height: inherit;
  }
  margin: 0px 20px;
  padding: 20px;
  background: ${BACKGROUND_COLORS.DARKEST};
  &:hover ${LogoInfo} {
    opacity: 1;
    button {
      bottom: 20px;
    }
  }
  position: relative;
`;

export const LogoName = styled.p`
  font-size: ${TEXT_SIZES.DEFAULT}px;
`;
export const LogoButtonWrapper = styled.div`
  margin-top: 10px;
`;
export const LogoButton = styled.button`
  background: ${BACKGROUND_COLORS.DARKEST};
  height: 75px;
  width: 75px;
  border-radius: 100%;
  font-size: ${TEXT_SIZES.SMALL}px;
  border: none;
  color: ${TEXT_COLORS.DEFAULT};
  &:first-child {
    margin-right: 5px;
  }
  outline: none;
  cursor: pointer;
  position: absolute;
  bottom: -50px;
  ${({ first }) => first && `left: 17%;`}
  transition: 500ms;
  border: 1px solid ${BACKGROUND_COLORS.VIBRANT};
  ${({ large }) =>
    large &&
    `height: 50px;
  width: 80%;
  border-radius: 0px;
  left: 10%;
  &:first-child {
    left: 10%;
  }
  font-size: ${TEXT_SIZES.SMALL}px;
  `}
`;
