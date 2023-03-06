import { Hour } from 'components/Hour';
import { useState } from 'react';

import * as Styled from './styles';

export type HoursContainerProps = {
  dates: Date[];
  onClick: (date: Date) => void;
};

export const HoursContainer = ({
  dates = [],
  onClick,
}: HoursContainerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleHourSelected = (date: Date) => {
    setSelectedDate(date);
    onClick(date);
  };

  return (
    <Styled.Wrapper>
      {dates.map((date) => {
        const hour = date.getHours();
        const min = date.getMinutes();
        const selected = selectedDate?.getTime() === date.getTime();

        return (
          <span key={date.getTime()} onClick={() => handleHourSelected(date)}>
            <Hour selected={selected} onClick={() => handleHourSelected(date)}>
              {`${hour}:${min === 0 ? '00' : min}`}
            </Hour>
          </span>
        );
      })}
    </Styled.Wrapper>
  );
};
