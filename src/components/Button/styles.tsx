import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    color:black;
    padding: 10px;
    width: 350px;
    height: 50px;
    background-color: #FFB606;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size:20px;
    margin:15px ;
    &:hover{
      cursor: pointer;
    }
    @media ${theme.media.lteMedium} {
      width: 80%;

    }
  `}
`;
