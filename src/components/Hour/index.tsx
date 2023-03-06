// import { useState } from 'react';
import * as Styled from './styles';

export type HourProps = {
  children: React.ReactNode | string;
  selected: boolean;
  onClick: () => void;
};

export const Hour = ({ children, selected, onClick }: HourProps) => {
  const handleClick = () => {
    if (!selected) {
      onClick();
    }
  };

  return (
    <Styled.Wrapper selected={selected} onClick={handleClick}>
      {children}
    </Styled.Wrapper>
  );
};
