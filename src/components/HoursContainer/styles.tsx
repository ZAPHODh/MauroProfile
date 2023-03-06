import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  `}
`;
