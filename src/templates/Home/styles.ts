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
export const Divisor = styled.hr`
    border-color: #FFB606;
    width: 60%;
    margin: 20px;
`;
