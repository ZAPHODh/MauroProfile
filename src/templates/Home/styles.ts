import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
    background-color: #1C1C1C;
    width: 100vw;
    display: flex;
    align-items: center ;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
    min-width: 0;
  `}
`;
