import { Heading } from 'components/Heading';
import * as Styled from './styles';
import { CountDown } from 'components/CountDown';

export type CarouselItemProps = {
  title?: string;
  subtitle?: string;
  img?: string;
  bottomMessage?: string;
  endDateToCalc?: string;
  endMessage?: string;
};

export const CarouselItem = ({
  title,
  subtitle,
  img,
  bottomMessage,
  endDateToCalc = '06-02-2023',
  endMessage,
}: CarouselItemProps) => {
  return (
    <>
      <Heading as="h3">{title}</Heading>
      <Styled.SubTitle>{subtitle}</Styled.SubTitle>
      <Styled.OfferImage src={img} alt={`${title} pic`} />
      <Styled.EndDate>{bottomMessage}</Styled.EndDate>
      <CountDown endDate={endDateToCalc} endMessage={endMessage} />
    </>
  );
};
