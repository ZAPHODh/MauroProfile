import * as Styled from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  id?: string;
};

export const Button = ({ children, onClick, id }: ButtonProps) => {
  return (
    <Styled.Wrapper onClick={onClick} id={id}>
      {children}
    </Styled.Wrapper>
  );
};
