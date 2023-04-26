import * as Styled from './styles';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useRef, useState } from 'react';
import { Tooltip } from '@mui/material';
export type CalendarComponentProps = {
  maxMonth: number;
  holidays?: Date[];
  handleSelectedDate: (date: Date) => void;
};

export const CalendarComponent = ({
  maxMonth = 2,
  holidays = [],
  handleSelectedDate,
}: CalendarComponentProps) => {
  const [value, onChange] = useState(new Date());
  const [calendarVisible, setCalendarVisible] = useState(false);
  const today = new Date();
  const maxDate = new Date(today.getFullYear(), today.getMonth() + maxMonth, 0);
  const iconRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const icon = iconRef.current;
      const calendar = calendarRef.current;
      if (calendarVisible && !calendar.contains(e.target as Node)) {
        if (icon.contains(e.target as Node)) return;
        setCalendarVisible(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [calendarVisible]);

  const handleIconClick = () => {
    setCalendarVisible((visible) => !visible);
  };

  const disabledDays = (date: Date) => {
    const day = date.getDay();
    return (
      day == 0 ||
      day == 1 ||
      (holidays.length > 0 &&
        holidays.some((holiday) => holiday.getTime() === date.getTime()))
    );
  };

  return (
    <Styled.Wrapper>
      <Tooltip title="Abrir Calendário" placement="right">
        <Styled.CaldendarIcon
          ref={iconRef}
          onClick={() => {
            handleIconClick();
          }}
        >
          <CalendarMonthIcon fontSize="inherit" />
        </Styled.CaldendarIcon>
      </Tooltip>
      <Styled.CalendarContainer visible={calendarVisible} ref={calendarRef}>
        <Calendar
          value={value}
          onChange={onChange}
          onClickDay={(date: Date) => {
            setCalendarVisible(false);
            return handleSelectedDate(date);
          }}
          minDate={today}
          maxDate={maxDate}
          tileDisabled={({ date }) => disabledDays(date)}
        ></Calendar>
      </Styled.CalendarContainer>
    </Styled.Wrapper>
  );
};
