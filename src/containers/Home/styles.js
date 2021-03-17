import styled, { keyframes } from "styled-components";

export const Screen = styled.div`
  font-family: Trebuchet MS;
  background: white;
  width: 100%;
  color: #000;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const showHide = keyframes`
  0% {width:100%;}
  100%{width: 0%;}
`;

export const Capital = styled.div`
  font-size: 180px;
`;
export const NameHolder = styled.div`
  display: flex;
  flex-direction: row;
  ${({ first }) => first && `margin-left: 10%; `}
  ${({ last }) => last && `margin-left: 15%; `}
  text-align: center;
  font-size: 80px;
  align-items: center;
  position: relative;
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
  background: white;
  animation: ${showHide} 1s ease-in;
`;

export const ProjectHolder = styled.div`
  display: flex;
  flex-direction: row;
  height: 300px;
  overflow: hidden;
  align-self: center;
  background: red;
  width: 100%;
`;

export const ProjectCarousel = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 100px;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;
export const ArrowWrapper = styled.div`
  display: flex;
  height: 100px;
  flex-direction: row;
  i {
    cursor: pointer;
    margin: 0px 15px;
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
