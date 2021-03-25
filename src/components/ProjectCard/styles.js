import styled from 'styled-components/macro';

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
  `}
  transition: linear 500ms;
  img {
    ${({ size, position }) => `
    width: 0%;
    ${size === 'small' ? `width: 60%; height: 60%;` : ``}
    ${size === 'medium' ? `width: 80%; height: 80%;` : ``}
    ${size === 'large' ? `width: 100%; height: 100%;` : ``}
    border-radius: 23%;
    transition: 500ms;
    overflow: hidden;
  ${(position === 2 || position === 1 || position === 3) && `cursor: pointer;`}
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
