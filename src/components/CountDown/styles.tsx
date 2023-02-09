import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
  display: flex;
  align-items: center;
  width: 250px;
  height: 45px;
  border-radius:6.2px ;
  border: 1px solid #FFB606;
  color:#FFB606;
  `}
`;
export const Clock = styled.div`
  width: 70px;
  height: 101%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  border-radius: 5px 0 0 5px;
  background-color:#FFB606;
  color: black;
`;

export const Message = styled.p`
  font-size: 14px;
  margin: 0;
  padding:0;
`;
export const MessageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
