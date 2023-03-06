import { AppProps } from 'next/app';
import Favicon from 'react-favicon';
import '../../public/assets/fonts/styles.css';
import { GlobalStyles } from '../styles/global-styles';
import { AppThemeProvider } from 'contexts/ThemeContext';
import icon from '../../public/assets/images/logo.png';
import { SessionProvider } from 'next-auth/react';
import { GA } from 'components/GA';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AppThemeProvider>
        <Favicon url={icon.src} />
        <GA />
        <Component {...pageProps} />
        <GlobalStyles />
      </AppThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
