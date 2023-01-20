import { useState, useEffect, useCallback } from 'react';
import moment from 'moment';

export default function useCountdown(endDate: string) {
  const calculateCountdown = useCallback(() => {
    const now = moment();
    const end = moment(endDate, 'DD-MM-YYYY');
    const difference = end.diff(now);
    return moment.duration(difference);
  }, [endDate]);

  const [countdown, setCountdown] = useState(calculateCountdown());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [calculateCountdown]);

  return countdown;
}
