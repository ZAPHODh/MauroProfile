import { Button } from 'components/Button';
import { useCallback } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export const Schedule = () => {
  const handleClick = useCallback(() => {
    window.location.href =
      'https://api.whatsapp.com/send?phone=5521971083900&text=Olá,%20gostaria%20de%20marcar%20um%20agendamento!%20';
  }, []);
  return (
    <Button onClick={handleClick}>
      Agendar
      <CalendarMonthIcon fontSize="inherit" />
    </Button>
  );
};
