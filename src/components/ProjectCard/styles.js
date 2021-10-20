import styled from 'styled-components/macro';

import { DIMENSIONS } from 'tokens/dimensions';

export const CardWrapper = styled.div`
  margin: 20px 0px;
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
  ${({ position }) => `
  left: ${20 + position * 12}%;
  @media (max-width: ${DIMENSIONS.TABLET}){
    left: ${position * 20 - 15}%;
  }
  `}

  transition: linear 500ms;
  img {
    ${({ size, position }) => `
    width: 0%;
    ${size === 'small' ? `width: 60%; height: 60%;` : ``}
    ${size === 'medium' ? `width: 80%; height: 80%; z-index: 2;` : ``}
    ${size === 'large' ? `width: 100%; height: 100%; z-index: 3;` : ``}
    border-radius: 23%;
    transition: 500ms;
    overflow: hidden;
  ${[0, 1, 2, 3, 4].includes(position) && `cursor: pointer;`}
  `}
  }
  ${({ isShown }) => (isShown ? `opacity: 1;` : `opacity: 0;`)}
  &:nth-child(${({ lower }) => lower + 5}) {
    justify-content: flex-start;
    align-items: center;
  }
  &:nth-child(${({ lower }) => lower + 1}) {
    justify-content: flex-end;
    align-items: center;
  }
`;
