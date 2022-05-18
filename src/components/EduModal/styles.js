import styled, { keyframes } from 'styled-components/macro';
import { TEXT_COLORS } from 'tokens/colors';
import { TEXT_SIZES } from 'tokens/text';

export const ModalBackground = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1000; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  overflow: hidden;
`;

export const ModalContent = styled.div`
  background: ${({ palette }) => palette.DEFAULT};
  margin: auto;
  width: 60%;
  border: 1px solid ${({ palette }) => palette.DARKEST};
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 80%;
  overflow-y: scroll;
  overscroll-behavior: none;
  div:nth-of-type(2) {
    margin-top: 70px;
  }
`;

export const TitleHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: inherit;
  position: fixed;
  background: ${({ palette }) => palette.LIGHTER};
`;

const moveIn = i => keyframes`
0%{margin-right: 0px;}
100%{margin-right: ${({ i }) => (i ? `-` : ``)}300px;}
`;
export const Exp = styled.div`
  padding: 20px;
  width: 350px;
  background: ${({ palette }) => palette.DARKEST};
  p {
    color: ${TEXT_COLORS.DEFAULT};
  }
  margin: 10px 10px;
  animation: ${moveIn} ease-out 2s;
  margin-right: ${({ i }) => (i ? `-25` : `25`)}%;
  border-radius: 8px;
`;
export const Name = styled.p`
  font-size: ${TEXT_SIZES.MEDIUM}px;
`;
export const Date = styled.p`
  font-size: ${TEXT_SIZES.SMALL}px;
`;
export const Desc = styled.p`
  font-size: ${TEXT_SIZES.LABEL}px;
`;
