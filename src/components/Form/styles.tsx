import { Title } from 'components/Heading/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  ${() => css`
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >${Title}{
    align-self: flex-start;
    padding: 0;
    margin: 5px;
  }
  `}
`;
