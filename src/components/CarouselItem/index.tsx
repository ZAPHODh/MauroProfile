import * as Styled from './styles';

export type CarouselItemProps = {
  offer: string;
  bgColor: string;
};

export const CarouselItem = ({ offer, bgColor }: CarouselItemProps) => {
  return (
    <Styled.Wrapper bgColor={bgColor}>
      <Styled.ProductContainer>
        <Styled.OfferImage src={offer} alt="" />
      </Styled.ProductContainer>
    </Styled.Wrapper>
  );
};
