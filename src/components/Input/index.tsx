import { ChangeEvent, useState } from 'react';
import * as Styled from './styles';

export type InputProps = {
  placeholder?: string;
  value: string;
  type: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  pattern?: string;
  maxLength?: number;
  label: string;
  onBlur?: () => void;
};

export const Input = ({
  placeholder,
  value,
  type,
  disabled = false,
  onChange,
  pattern,
  maxLength,
  label,
  onBlur,
}: InputProps) => {
  const [validation, setValidation] = useState(true);

  return (
    <Styled.Wrapper>
      <Styled.Form
        required
        id={value}
        value={value}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        validation={validation}
        onError={() => {
          setValidation(false);
        }}
        pattern={pattern}
        maxLength={maxLength}
        onBlur={() => onBlur()}
      />
      <Styled.Label htmlFor={value}>{label}</Styled.Label>
    </Styled.Wrapper>
  );
};
