import * as Styled from './styles';

export type DescriptionProps = {
  father?: string;
  children: React.ReactNode | string;
  fontSize?: string;
  color?: string;
  maxWidth?: string;
  padding?: string;
};

export const Description = ({
  father,
  children,
  fontSize = '12px',
  color,
  maxWidth,
  padding,
}: DescriptionProps) => {
  return (
    <Styled.Wrapper
      id={`${father}-description`}
      fontSize={fontSize}
      color={color}
      maxWidth={maxWidth}
      padding={padding}
    >
      {children}
    </Styled.Wrapper>
  );
};
