import styled, { css } from 'styled-components';

export const Form = styled.input<{ validation: boolean }>`
  ${({ validation }) => css`
  width: 100%;
  padding: 10px;
  margin: 5px 0px;
  border-radius: 5px ;
  border: none;
  background-color:${validation ? '#1C1C1C' : '#C03D29'} ;
  color: white;
  &:focus{
    outline: none;
  }
  `}
`;
export const Label = styled.label`
  ${() => css`
  position: absolute;
  z-index: 1;
  top:-1.5rem;
  left:0.7rem;
  font-size: 12px;

  `}
`;

export const Wrapper = styled.div`
${() => css`
  width: 100%;
  position: relative;
  margin-top: 15px;
`}
`;
