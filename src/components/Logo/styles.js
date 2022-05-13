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
  border-radius: 8px;
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
  border-radius: 8px;
`;

export const LogoName = styled.p`
  font-size: ${TEXT_SIZES.DEFAULT}px;
`;
export const LogoButtonWrapper = styled.div`
  margin-top: 10px;
  @media (max-width: ${DIMENSIONS.TABLET}) {
    display: none;
  }
`;
export const LogoButton = styled.button`
  background: ${({ palette }) => palette.DARKEST};
  height: 65px;
  width: 65px;
  border-radius: 100%;
  font-size: ${TEXT_SIZES.SMALL}px;
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
  border-radius: 5px;
  left: 10%;
  &:first-child {
    left: 10%;
  }
  font-size: ${TEXT_SIZES.SMALL}px;
  `}
`;
export const MobileResumeButton = styled.div`
  display: none;
  @media (max-width: ${DIMENSIONS.TABLET}) {
    display: flex;
  }
`;
