import styled, { css } from 'styled-components';

export const Wrapper = styled.tr`
${() => css`
  width: 100%;
  background-color:#3B3B3B;
  color: white;
  /* &:nth-child(even){
    background-color:#3B3B3B;
  } */
`}
`;

export const Td = styled.td`
  border-bottom: 1px solid #1C1C1C;
  /* text-align: left; */
  padding: 8px;
`;
