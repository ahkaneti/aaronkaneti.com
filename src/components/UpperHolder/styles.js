import styled, { keyframes } from 'styled-components/macro';

import { TEXT_SIZES } from 'tokens/text';
import { BACKGROUND_COLORS, TEXT_COLORS } from 'tokens/colors';

export const ToggleWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 10px;
  height: 100px;
  button {
    outline: none;
  }
`;

const showHide = keyframes`
  0% {width:100%;}
  100%{width: 0%;}
`;

export const Capital = styled.div`
  font-size: ${TEXT_SIZES.EXTRA_LARGE}px;
`;

const moveArrow = keyframes`
0%{bottom: 10px;}
50%{bottom: 25px;}
100%{bottom: 10px;}
`;

export const UpperWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100vh;
  position: relative;
  i {
    font-size: 100px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    animation: ${moveArrow} ease-out 1250ms infinite;
    cursor: pointer;
  }
  h1 {
    font-size: 75px;
  }
  h2 {
    font-size: 50px;
  }
`;

export const WordHolder = styled.div`
  display: flex;
  text-align: center;
  font-size: ${TEXT_SIZES.LARGE}px;
  align-items: center;
  z-index: 1;
  width: 300px;
  position: relative;
  /* ${({ first }) => first && `margin-right: 150px;`}*/
  ${({ last }) => last && `margin-left: 85px;`}
`;
export const PhotoNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const NameHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 50px;
`;
export const Name = styled.div`
  position: absolute;
  ${({ first }) => first && `left: 78px;top: 48px;`}
  ${({ last }) => last && `left: 68px;top: 50px;`}
`;
export const NameFade = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 0%;
  background: ${BACKGROUND_COLORS.DEFAULT};
  animation: ${showHide} 1s ease-in;
`;
export const ShortInfo = styled.p`
  background: ${BACKGROUND_COLORS.DARK_VIBRANT};
  padding: 15px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: ${TEXT_SIZES.MEDIUM}px;
  text-align: center;
  position: absolute;
  z-index: 2;
  ${({ one }) =>
    one &&
    `top: -0px;
  right: -30px;
  transform: rotate(10deg);`}
  ${({ two }) =>
    two &&
    `bottom: -0px;
  left: -30px;
  transform: rotate(-5deg);
  background: ${BACKGROUND_COLORS.FLU};`}
`;
export const DescHolder = styled.div`
  position: absolute;
  right: 7%;
  width: 250px;
`;
export const TitleDesc = styled.p`
  font-size: ${TEXT_SIZES.MEDIUM}px;
`;
export const LongInfo = styled.p`
  color: ${TEXT_COLORS.DESCRIPTION};
  font-size: ${TEXT_SIZES.SMALl}px;
`;
export const PhotoWrapper = styled.div`
  z-index: 0;
  position: relative;
  img {
    height: 400px;
    width: 400px;
    object-fit: cover;
    margin: 0px 20px;
    ${({ place }) =>
      place === 'intro'
        ? `border-radius: 50em; 
      background: ${BACKGROUND_COLORS.VIBRANT}
      `
        : ''}
  }
`;
