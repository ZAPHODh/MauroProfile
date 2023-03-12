import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
    background-color: #1C1C1C;
    width: 100vw;
    display: flex;
    align-items: center ;
    justify-content: center; /* Alterei a propriedade justify-content para space-between */
    flex-wrap: nowrap; /* Adicionei a propriedade flex-wrap para quebrar a linha dos elementos quando necessário */
    flex-direction: column;
    color: #ffb606;
  `}
`;
