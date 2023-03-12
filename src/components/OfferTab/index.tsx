import * as Styled from './styles';

export type OfferTabProps = {
  firstArgument: string;
  secondArgument: string;
  thirdArgument: string;
};

export const OfferTab = ({
  firstArgument,
  secondArgument,
  thirdArgument,
}: OfferTabProps) => {
  console.log(firstArgument, secondArgument, thirdArgument);
  return (
    <Styled.Wrapper>
      <Styled.Td>{firstArgument}</Styled.Td>
      <Styled.Td>{secondArgument}</Styled.Td>
      <Styled.Td>{thirdArgument}</Styled.Td>
    </Styled.Wrapper>
  );
};
