import * as Styled from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return <Styled.Wrapper onClick={onClick}>{children}</Styled.Wrapper>;
};
