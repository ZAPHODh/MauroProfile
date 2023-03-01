import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  display:flex;
  align-items: center;
  justify-content: center;
  color:${theme.colors.primaryColor};
  background-color: #1C1C1C;
  width: 100vw;
  height: 650px;
  margin: 0;
  padding: 5px;
  @media ${theme.media.lteMedium} {
    flex-direction: column;
  }
  `}
`;

export const ProductContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
>${Title}{
  color:#FFB606;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}
`;
export const CarouselContainer = styled.section`
  position: relative;
  width: 100%;
  height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export const Indicator = styled.div<{ active: boolean; onClick: () => void }>`

${({ theme, active }) => css`width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  border: ${theme.colors.primaryColor} 1px solid;
  background-color: ${active ? `#FFB606` : `${theme.colors.primaryColor}`};
  cursor: pointer;
`}`;

export const IndicatorContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
position: absolute;
bottom: 2rem;
left: 0;
`;

export const NextAndPrevContainer = styled.div`
  ${({ theme }) => css`
  position: absolute;
  bottom: 0;
  right: 0;
  color:${theme.colors.primaryColor};
  `}
`;

export const ArrowBTN = styled.button`
${() => css`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 32px;
  color:#FFB606;
  &:hover{
    cursor: pointer;
  }
  `}
`;
