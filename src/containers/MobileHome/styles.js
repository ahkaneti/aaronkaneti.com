import styled, { keyframes } from 'styled-components/macro';

import { TEXT_SIZES } from 'tokens/text';
import { TEXT_COLORS } from 'tokens/colors';

export const Screen = styled.div`
  font-family: Trebuchet MS;
  background: ${({ palette }) => palette.DEFAULT};
  width: 100%;
  color: ${TEXT_COLORS.DEFAULT};
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  z-index: 0;
  transition: 500ms;
  overflow-x: hidden;
`;

export const SkillFilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-evenly;
  width: 100%;
`;

export const ProjectHolder = styled.div`
  display: flex;
  flex-direction: row;
  height: 300px;
  justify-content: center;
  width: 100%;
  position: relative;
  overflow: hidden;
  :nth-child(1n) {
    margin: 0px 10px;
  }
`;

export const ProjectCarousel = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${TEXT_SIZES.LARGER}px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ palette }) => palette.LIGHT};
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
  color: ${TEXT_COLORS.DEFAULT};
  i {
    font-size: 45px;
    cursor: pointer;
    &:first-child {
      ${({ less }) => !less && `color: ${TEXT_COLORS.DISABLED};`}
    }
    &:last-child {
      ${({ more }) =>
        more
          ? `color: ${TEXT_COLORS.DEFAULT};`
          : ` color:${TEXT_COLORS.DISABLED};`}
    }
  }
  p {
    font-size: ${TEXT_SIZES.MEDIUM}px;
    width: 280px;
    text-align: center;
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
  ${({ small }) => (small ? `margin: 0px;` : ``)}
  height: 400px;
  z-index: 1;
`;
export const SkillSection = styled.div`
  background: ${({ palette }) => palette.LIGHT};
  display: flex;
  flex-direction: row;
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
  height: 120px;
  align-items: center;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
    margin: 0px 1%;
    height: 60px;
    i {
      padding: 5px;
      background: ${({ palette }) => palette.COMPLEMENT};
    }
  }
`;

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
  text-align: center;
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
  ${({ last }) => (last ? `margin-left: 85px;` : ``)}
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
  ${({ first }) => (first ? `left: 78px;top: 48px;` : ``)}
  ${({ last }) => (last ? `left: 68px;top: 50px;` : ``)}
`;
export const NameFade = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 0%;
  background: ${({ palette }) => palette?.DEFAULT};
  transition: 500ms;
  animation: ${showHide} 1s ease-in;
`;
export const ShortInfo = styled.p`
  background: ${({ palette }) => palette.DARK_VIBRANT};
  padding: 15px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: ${TEXT_SIZES.MEDIUM}px;
  text-align: center;
  position: absolute;
  z-index: 2;
  ${({ two, palette }) =>
    two
      ? `bottom: -0px;
  background: ${palette.FLU}};`
      : ``}
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
  color: ${({ palette }) => palette.DESCRIPTION};
  font-size: ${TEXT_SIZES.SMALl}px;
`;
export const PhotoWrapper = styled.div`
  z-index: 0;
  position: relative;

  img {
    height: 300px;
    width: 300px;
    object-fit: cover;
    margin: 0px 20px;
    ${({ place, palette }) =>
      place === 'intro'
        ? `border-radius: 50em; 
      background: ${palette.VIBRANT}}
      `
        : ''}
  }
`;
export const ContactButton = styled.button`
  background: ${({ palette }) => palette.DARKEST};
  height: 50px;
  width: 150px;
  font-size: 10px;
  color: ${TEXT_COLORS.DEFAULT};
  outline: none;
  cursor: pointer;
  transition: 500ms;
  border: 1px solid ${({ palette }) => palette.VIBRANT};
`;

export const Copied = styled.p`
  background: ${({ copied }) =>
    copied
      ? ({ palette }) => palette.LIGHTEST
      : ({ palette }) => palette.DEFAULT};
  color: ${({ palette }) => palette.DEFAULT};
  margin: 10px;
  text-align: center;
  padding: 10px;
  transition: 500ms;
`;
