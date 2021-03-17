import styled from "styled-components";

export const CardWrapper = styled.div`
  margin: 20px 0px;
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    ${({ position }) => `
    height: 100%;
    width: 100%;
    ${[0, 4].includes(position) ? `width: 60%; height: 60%;` : ""}
    ${[1, 3].includes(position) ? `width: 80%; height: 80%;` : ""}
  `}
    cursor: pointer;
  }
  ${({ position }) =>
    [0, 1, 2, 3, 4].includes(position) ? `opacity: 1;` : `opacity:0;`}
  &:nth-child(5) {
    justify-content: flex-start;
  }
  &:first-child {
    justify-content: flex-end;
  }
`;
