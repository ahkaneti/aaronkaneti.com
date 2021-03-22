import styled, { keyframes } from 'styled-components';

import { TEXT_SIZES } from 'tokens/text';
import { BACKGROUND_COLORS } from 'tokens/colors';

export const Screen = styled.div`
  font-family: Trebuchet MS;
  background: ${BACKGROUND_COLORS.DEFAULT}; //Turkish Palette
  width: 100%;
  color: #fff200;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  z-index: 0;
  h1 {
    font-size: ${TEXT_SIZES.LARGE}PX;
    margin-left: 150px;
    align-self: baseline;
  }
`;
const showHide = keyframes`
  0% {width:100%;}
  100%{width: 0%;}
`;

export const Capital = styled.div`
  font-size: ${TEXT_SIZES.EXTRA_LARGE}px;
`;

export const UpperHolder = styled.div`
  display: flex;
  flex-direction: row;
`;
export const WordHolder = styled.div`
  display: flex;
  flex-direction: row;
  ${({ first }) => first && `margin-left: 10%; `}
  ${({ last }) => last && `margin-left: 15%; `}
  text-align: center;
  font-size: ${TEXT_SIZES.LARGE}px;
  align-items: center;
  position: relative;
  width: 85%;
`;
export const NameHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Name = styled.div`
  width: fit-content;
  position: relative;
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
export const SkillFilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const ProjectHolder = styled.div`
  display: flex;
  flex-direction: row;
  height: 300px;
  align-self: center;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const ProjectCarousel = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${TEXT_SIZES.LARGER}px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${BACKGROUND_COLORS.LIGHT};
  height: 400px;
  input {
    margin-top: 10px;
  }
  z-index: 1;
`;
export const ArrowWrapper = styled.div`
  display: flex;
  height: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  i {
    cursor: pointer;
    margin: 0px 15px;
  }
  ${({ more, less }) => `
  &:nth-child(1){
    color: ${more && `lightgray`};
  }
  &:nth-child(2){
    color: ${less && `lightgray`};
  }
  `}
  p {
    font-size: ${TEXT_SIZES.MEDIUM}px;
  }
`;
export const ProjectCard = styled.div`
  height: ${({ position }) =>
    position === 0 || position === 4
      ? `60%`
      : position === 1 || position === 3
      ? `80%`
      : `100%`};
  width: 200px;
  margin: 0 20px;
`;
export const LogoHolder = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 200px;
  width: 100%;
  margin: 30px 0;
  height: 400px;
  z-index: 1;
`;

export const SkillWrapper = styled.div`
  width: 100%;
  background: ${BACKGROUND_COLORS.DEFAULT};
  justify-content: center;
  padding-bottom: 100px;
`;

export const PhotoWrapper = styled.div`
  img {
    height: 300px;
    width: 300px;
    object-fit: cover;
    border-radius: 50em;
  }
`;
export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${TEXT_SIZES.MEDIUM_LARGE}px;
  justify-content: center;
  color: white;
`;
