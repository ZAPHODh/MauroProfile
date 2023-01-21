import { Heading } from 'components/Heading';
import * as Styled from './styles';
import { CountDown } from 'components/CountDown';
import { StaticImageData } from 'next/image';

export type CarouselItemProps = {
  title?: string;
  subtitle?: string;
  img?: StaticImageData;
  endDate?: string;
  endDateToCalc?: string;
  endMessage?: string;
};

export const CarouselItem = ({
  title,
  subtitle,
  img,
  endDate,
  endDateToCalc = '06-02-2023',
  endMessage,
}: CarouselItemProps) => {
  return (
    <Styled.Wrapper>
      <Styled.ProductContainer>
        <Heading as="h2">{title}</Heading>
        <Styled.SubTitle>{subtitle}</Styled.SubTitle>
        <Styled.OfferImage src={img.src} alt={`${title} pic`} />
        <Styled.EndDate>{endDate}</Styled.EndDate>
        <CountDown endDate={endDateToCalc} endMessage={endMessage} />
      </Styled.ProductContainer>
    </Styled.Wrapper>
  );
};
