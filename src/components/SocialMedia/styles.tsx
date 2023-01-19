import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  `}
`;

export const Link = styled.a`
  ${() => css`
  font-size: 25px;
  color:#FFB606;
  &:hover{
    color:#B28228;
  }
  `}
`;
