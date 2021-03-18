import styled from 'styled-components';

export const CardWrapper = styled.div`
  margin: 20px 0px;
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
  left: ${({ index, lower }) => `${20 + (index - lower) * 12}%`};
  transition: linear 500ms;
  img {
    ${({ index, lower }) => `
    width: 0%;
    ${[0, 4].includes(index - lower) ? `width: 60%; height: 60%;` : ''}
    ${[1, 3].includes(index - lower) ? `width: 80%; height: 80%;` : ''}
    ${[2].includes(index - lower) ? `width: 100%; height: 100%;` : ''}
    border-radius: 23%;
    transition: 500ms;
    overflow: hidden;
  `}
  }
  ${({ index, lower }) =>
    index >= lower && index <= lower + 4 ? `opacity: 1;` : `opacity: 0;`}
  &:nth-child(${({ lower }) => lower + 5}) {
    justify-content: flex-start;
  }
  &:nth-child(${({ lower }) => lower + 1}) {
    justify-content: flex-end;
  }
`;

export const ProjectInfo = styled.div`
  background-color: black;
  opacity: 0.73;
  ${({ index, lower }) => `
  width: 100%;
  height: 100%;
  ${[0, 4].includes(index - lower) ? `width: 60%; height: 60%;` : ''}
  ${[1, 3].includes(index - lower) ? `width: 80%; height: 80%;` : ''}
`}
  justify-content: center;
  flex-direction: column;
  p {
    font-size: 10px;
    margin: 0 15px;
    margin-bottom: 10px;
  }
  p:last-of-type {
    margin-bottom: 0px;
  }

  position: absolute;
  border-radius: 23%;
  display: none;
  ${CardWrapper}:hover & {
    display: flex;
    cursor: pointer;
  }
`;
