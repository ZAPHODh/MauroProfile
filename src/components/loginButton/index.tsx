import { Tooltip } from '@mui/material';
import { signIn } from 'next-auth/react';
import * as Styled from './styles';
import GoogleIcon from '@mui/icons-material/Google';

export const LoginButtons = () => {
  return (
    <Styled.Wrapper>
      <Tooltip title="Logar com o Google" placement="left">
        <Styled.Login
          onClick={() => {
            signIn('google');
          }}
        >
          <GoogleIcon fontSize="inherit" />
        </Styled.Login>
      </Tooltip>
    </Styled.Wrapper>
  );
};
