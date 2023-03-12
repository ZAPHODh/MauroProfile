import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
  display: flex;
  align-items: center;
  justify-content: center;
  `}
`;
export const Login = styled.button`
  ${() => css`
  align-self: flex-start;
  background-color: transparent;
  padding: 8px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border:none;
  border-radius: 50%;
  color:#FFB606;
  flex-direction: column;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  margin: 5px;
  &:hover{
    cursor: pointer;
    pointer-events: all !important;
    background-color: rgba(0,0,0,0.1);
  }

  `}
`;
