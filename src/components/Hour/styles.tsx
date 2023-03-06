import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ selected: boolean }>`
  ${({ selected }) => css`
  width: 120px;
  margin: 5px;
  padding: 10px;
  background-color: #1C1C1C;
  color: white;
  border-radius: 5px;
  border: none;
  ${
    selected &&
    css`
  background-color: #FFB606;
  `
  }
  &:hover{
    cursor: pointer;
    background-color:#FFB606;
  }
  `}
`;
