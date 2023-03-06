import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
  position:relative;
  `}
`;

export const CaldendarIcon = styled.div`
${() => css`
  width: 50px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  padding: 8px;
  font-size: 30px;
  color:#FFB606;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  &:hover{
    cursor: pointer;
    background-color: rgba(1,1,1,0.1);
  }
`}`;
export const CalendarContainer = styled.div<{ visible: boolean }>`
  ${({ visible }) => css`
    z-index: 1;
    display: ${visible ? 'block' : 'none'};
    position: absolute;
    right: 0rem;
    top: 1rem;
    width: 280px;
    color: black;
  `}
`;
