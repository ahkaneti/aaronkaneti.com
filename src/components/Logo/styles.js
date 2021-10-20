import styled from 'styled-components/macro';

import { TEXT_COLORS } from 'tokens/colors';
import { TEXT_SIZES } from 'tokens/text';
import { DIMENSIONS } from 'tokens/dimensions';

export const LogoInfo = styled.div`
  opacity: 0;
  background: ${({ palette }) => palette.DEFAULT};
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
  border: 2px solid ${({ palette }) => palette.DARKEST};
`;

export const LogoWrapper = styled.div`
  height: 200px;
  img {
    height: inherit;
  }
  margin: 0px 20px;
  padding: 20px;
  background: ${({ palette }) => palette.DARKEST};
  &:hover ${LogoInfo} {
    //display: flex;
    opacity: 1;
    button {
      bottom: 20px;
    }
  }
  @media (max-width: ${DIMENSIONS.TABLET}) {
    :not(:last-child) {
      display: none;
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
  background: ${({ palette }) => palette.DARKEST};
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
  border: 1px solid ${({ palette }) => palette.VIBRANT};
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
