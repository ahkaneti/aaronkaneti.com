import React from "react";
import styled from "styled-components";

const pickPlace = (position) => {
  switch (position) {
    case 0:
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    default:
  }
};

export const CardWrapper = styled.div`
  margin: 20px 0px;
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(50, 50);
  img {
    ${({ position }) => `
    height: 100%;
    width: 100%;
    ${[0, 4].includes(position) ? `width: 60%; height: 60%;` : ""}
    ${[1, 3].includes(position) ? `width: 80%; height: 80%;` : ""}
  `}
    cursor: pointer;
  }
  ${({ position, lower }) =>
    position >= lower && position <= lower + 4 ? `opacity: 1;` : `opacity: 0;`}
  &:nth-child(5) {
    justify-content: flex-start;
  }
  &:nth-child(1n) {
    position: absolute;
    left: ${({ position }) => `${20 + position * 12}%`};
  }
  &:first-child {
    justify-content: flex-end;
  }
`;
