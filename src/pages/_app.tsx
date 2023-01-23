import { AppProps } from 'next/app';
import Favicon from 'react-favicon';
import '../../public/assets/fonts/styles.css';
import { GlobalStyles } from '../styles/global-styles';
import { AppThemeProvider } from 'contexts/ThemeContext';
import icon from '../../public/assets/images/logo.png';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <Favicon url={icon.src} />
      <Component {...pageProps} />
      <GlobalStyles />
    </AppThemeProvider>
  );
}

export default MyApp;
