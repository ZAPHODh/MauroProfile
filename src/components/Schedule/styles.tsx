import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;`}
`;

export const Link = styled.a`
  color:white;
  &:hover{
    color:#FFB606;
  }
`;

export const LogoutButton = styled.button`
  ${() => css`
  background-color: transparent;
  border: none;
  color:#FFB606;
  font-size: 20px;
  position: absolute;
  top:-1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
    cursor: pointer;

    ${LogoutText}{
      text-decoration: underline;
    }
  }
  `}
`;

export const LogoutText = styled.p`
  font-size: 12px;
  color: white;
  padding-right: 5px;
  &:hover{
    text-decoration: underline;
  }
`;
export const Select = styled.select`
  ${() => css`
    margin: 5px 0;
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 10px;
    border-radius: 5px;
    background-color:#1C1C1C ;
    color: white;
    border: none;
    &:focus{
      outline: none;
    }

  `}
`;
export const errorMessage = styled.p`
  margin: 0;
  margin-top: -5px;
  padding: 0;
  color: red;
  font-size: 12px;
`;
export const Option = styled.option`
  ${() => css`
  margin: 5px;
  `}
`;
export const Send = styled.button`
    ${() => css`
      margin: 20px;
      border: none;
      padding: 10px;
      border-radius: 5px;
      color: #FFB606;
      background-color: transparent;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
      &:hover{
        cursor: pointer;
        background-color: rgba(0,0,0,0.1) ;
      }
  `}
`;

export const Polices = styled.a`
  font-size: 13px;
  text-decoration: underline;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  &:hover{
    cursor: pointer;
  }
`;

export const ScheduleContainer = styled.div<{
  visible: boolean;
  session: boolean;
}>`
  ${({ theme, visible, session }) => css`
  max-height:${visible ? '100%' : '0'};
  transition: max-height 3s ease-in-out;
  display: ${visible ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #3B3B3B ;
  width: 350px;
  color:white;
  border-radius: 5px;
  padding:10px;
  ${session ? 'padding-top:40px;' : ''}
  text-align: justify;
  margin-top: -14px;
  position: relative;
  @media ${theme.media.lteMedium} {
    width: 80%;
  }
  `}
`;
