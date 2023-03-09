import { Tooltip } from '@mui/material';
import { signIn } from 'next-auth/react';
import * as Styled from './styles';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';

export const LoginButtons = () => {
  return (
    <Styled.Wrapper>
      <Tooltip title="Logar com o Google" placement="left">
        <Styled.Login
          onClick={() => {
            console.log(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
            signIn('google');
          }}
        >
          <GoogleIcon fontSize="inherit" />
        </Styled.Login>
      </Tooltip>
      <Tooltip title="Logar com o Instagram" placement="right">
        <Styled.Login
          onClick={() => {
            signIn('instagram');
          }}
        >
          <InstagramIcon fontSize="inherit" />
        </Styled.Login>
      </Tooltip>
    </Styled.Wrapper>
  );
};
