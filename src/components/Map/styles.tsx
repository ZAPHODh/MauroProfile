import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
  width: 100%;
  height: 400px;
  `}
`;

export const Indicator = styled.span`
  ${() => css`
    pointer-events: none;
    color:red;
    font-size: 45px;
  `}
`;
