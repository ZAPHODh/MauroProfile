import * as Styled from './styles';

export type FormProps = {
  onSubmit?: (e: React.FormEvent) => void;
  children: React.ReactNode;
};

export const Form = ({ children, onSubmit }: FormProps) => {
  return <Styled.Wrapper onSubmit={onSubmit}>{children}</Styled.Wrapper>;
};
