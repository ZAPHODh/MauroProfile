import { Title } from 'components/Heading/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
  display:flex;
  align-items: center;
  justify-content: center;
  color:${theme.colors.primaryColor};
  background-color: #1C1C1C;
  width: 100vw;
  height: 500px;
  margin: 0;
  @media ${theme.media.lteMedium} {
    flex-direction: column;
  }
  `}
`;

export const ProductContainer = styled.div`
  ${() => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >${Title}{
    color:#FFB606;
    font-family: 'Montserrat', sans-serif;
    /* font-size: 35px; */
    margin: 0;
    padding: 0;
  }
  `}
`;
export const OfferImage = styled.img`
  ${() => css`
  border-radius: 10px;
  border: 1px solid #FFB606 ;
  height: 320px;
  `}
`;
export const EndDate = styled.p`
  color:#FFB606;
  font-size: 30px;
  font-family: 'Montserrat', sans-serif;
  margin: 5px;
`;
export const SubTitle = styled.p`
  color:#FFB606;
  font-size: 12px;
  margin: 0;
  padding: 0;
  margin-bottom: 5px;
`;
