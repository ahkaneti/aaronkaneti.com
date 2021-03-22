import styled from 'styled-components';
import { LIGHTMODE_BACKGROUND } from 'tokens/colors';

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  div {
    height: 200px;
    width: 100%;
  }
`;

export const Light = styled.div`
  background: ${LIGHTMODE_BACKGROUND.DEFAULT};
`;

export const Normal = styled.div`
  background: ${LIGHTMODE_BACKGROUND.DARK};
`;
