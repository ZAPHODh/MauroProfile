import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  width: 60vw;
  height: 450px;
  border: 3px solid #FFB606;
  border-radius: 10px;
  position: relative;

  @media ${theme.media.lteMedium} {
    width: 100%;
  }
  `}
`;

export const Indicator = styled.span`
  ${() => css`
    pointer-events: none;
    color:#FFB606;
    font-size: 45px;
  `}
`;
export const Address = styled.div`
  ${({ theme }) => css`
  color:${theme.colors.primaryColor};
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFB606;
  padding: 5px;
  border-radius: 0 5px 0 5px;
  font-size: 20px;
  &:hover{
    cursor: pointer;
    background-color: #B28228;
    @media ${theme.media.lteMedium} {
      background-color: #FFB606;
    }

  }
  `}
`;

export const Container = styled.section`
  ${() => css`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #1C1C1C;
  `}
`;
export const ButtonContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: -0.1rem;
  width: 250px;
`;
