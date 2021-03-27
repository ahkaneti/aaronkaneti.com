import styled from 'styled-components/macro';
import { BACKGROUND_COLORS } from 'tokens/colors';

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
  background-color: ${BACKGROUND_COLORS.DEFAULT};
  margin: auto;
  width: 60%;
  border: 1px solid ${BACKGROUND_COLORS.DARKEST};
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 700px;
  align-items: center;
`;
