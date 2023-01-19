import styled, { css } from 'styled-components';

export const Wrapper = styled.section<{ bgColor: string }>`
  ${({ theme, bgColor }) => css`
  display:flex;
  align-items: center;
  justify-content: center;
  color:${theme.colors.primaryColor};
  background-color: ${bgColor};
  width: 100%;
  height: 400px;
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

  `}
`;
export const OfferImage = styled.img`
  ${() => css`
  height: 400px;
  `}
`;
