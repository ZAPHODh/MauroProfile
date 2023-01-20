import * as Styled from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return <Styled.Wrapper onClick={onClick}>{children}</Styled.Wrapper>;
};
