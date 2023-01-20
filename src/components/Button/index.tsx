import * as Styled from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    onClick();
  };
  return <Styled.Wrapper onClick={handleClick}>{children}</Styled.Wrapper>;
};
