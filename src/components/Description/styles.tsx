import styled, { css } from 'styled-components';

export const Wrapper = styled.p<{ fontSize: string }>`
  ${({ fontSize }) => css`
    text-align: justify;
    font-size: ${fontSize};
  `}
`;
