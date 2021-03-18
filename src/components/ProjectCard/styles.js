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
    ${index - lower === 2 ? `width: 100%; height: 100%;` : ''}
    border-radius: 23%;
    transition: 500ms;
    overflow: hidden;
  `}
  }
  ${({ index, lower }) =>
    index >= lower && index <= lower + 4 ? `opacity: 1;` : `opacity: 0;`}
  &:nth-child(${({ lower }) => lower + 5}) {
    justify-content: flex-start;
    align-items: center;
  }
  &:nth-child(${({ lower }) => lower + 1}) {
    justify-content: flex-end;
    align-items: center;
  }
  p {
    font-size: 25px;
    justify-content: flex-end;
  }
`;
