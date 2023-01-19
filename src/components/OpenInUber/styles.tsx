import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${() => css`
  position: absolute;
  top:0;
  z-index: 1;
  background-color:#FFB606 ;
  color:#1C1C1C;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  padding: 10px;
  font-size: 18px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
  `}
`;
