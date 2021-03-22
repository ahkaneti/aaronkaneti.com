import styled from 'styled-components';
import {
  NORMAL_COLOR,
  LIGHT_COLOR,
  DARK_COLOR,
  DARKER_COLOR,
} from 'tokens/colors';

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
  background: ${LIGHT_COLOR};
`;

export const Normal = styled.div`
  background: ${NORMAL_COLOR};
`;
export const Dark = styled.div`
  background: ${DARK_COLOR};
`;
export const Darker = styled.div`
  background: ${DARKER_COLOR};
`;
