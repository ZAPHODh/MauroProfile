import * as Styled from './styles';

export type DescriptionProps = {
  father: string;
  children: React.ReactNode | string;
  fontSize?: string;
};

export const Description = ({
  father,
  children,
  fontSize = '12px',
}: DescriptionProps) => {
  return (
    <Styled.Wrapper id={`${father}-description`} fontSize={fontSize}>
      {children}
    </Styled.Wrapper>
  );
};
