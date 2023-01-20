import useCountdown from 'customHooks/useCountDown';
import * as Styled from './styles';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export type CountDownProps = {
  endDate: string;
  endMessage?: string;
};

export const CountDown = ({
  endDate = '24-01-2023',
  endMessage = 'Termina em...',
}: CountDownProps) => {
  const countdown = useCountdown(endDate);
  return (
    <Styled.Wrapper>
      <Styled.Clock>
        <AccessAlarmIcon fontSize="inherit" />
      </Styled.Clock>
      <Styled.MessageContainer>
        <Styled.Message>{endMessage}</Styled.Message>
        <Styled.Message>
          {countdown.days()}D : {countdown.hours()} : {countdown.minutes()}
          {' : '}
          {countdown.seconds()}
        </Styled.Message>
      </Styled.MessageContainer>
    </Styled.Wrapper>
  );
};
