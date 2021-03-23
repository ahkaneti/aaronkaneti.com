import styled from 'styled-components/macro';

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
`;

export const PhotoWrapper = styled.div`
  left: 400px;
  z-index: 0;
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
export const SkillSection = styled.div`
  background: ${BACKGROUND_COLORS.LIGHT};
  display: flex;
  flex-direction: row;
  :nth-child(2) {
  }
  justify-content: space-around;
`;

export const SkillWrapper = styled.div`
  justify-content: center;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${TEXT_SIZES.MEDIUM_LARGE}px;
  justify-content: center;
  color: white;
`;
