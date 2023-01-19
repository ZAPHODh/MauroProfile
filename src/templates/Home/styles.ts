import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryColor};
    height: 100vh;
    width: 100vw;
    /* display: flex;
    align-items: center ;
    justify-content: flex-start;
    flex-direction: column; */
  `}
`;
