import { Heading } from 'components/Heading';
import { OfferTab, OfferTabProps } from 'components/OfferTab';
import * as Styled from './styles';

export type OffersTableProps = {
  Offers: OfferTabProps[];
};

export const OffersTable = ({ Offers = [] }: OffersTableProps) => {
  return (
    <>
      <Heading as="h3">Outras promoçoes</Heading>
      <Styled.Wrapper>
        <Styled.Th>Promoção</Styled.Th>
        <Styled.Th>Descrição</Styled.Th>
        <Styled.Th>Valor</Styled.Th>
        {Offers.map((offer) => (
          <OfferTab
            key={Math.random()}
            firstArgument={offer.firstArgument}
            secondArgument={offer.secondArgument}
            thirdArgument={offer.thirdArgument}
          ></OfferTab>
        ))}
      </Styled.Wrapper>
    </>
  );
};
