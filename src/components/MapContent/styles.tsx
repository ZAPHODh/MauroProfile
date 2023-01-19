import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  width: 60vw;
  height: 450px;
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
  `}
`;

export const Container = styled.section`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `}
`;
