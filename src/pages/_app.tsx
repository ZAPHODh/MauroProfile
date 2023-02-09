import { AppProps } from 'next/app';
import Favicon from 'react-favicon';
import '../../public/assets/fonts/styles.css';
import { GlobalStyles } from '../styles/global-styles';
import { AppThemeProvider } from 'contexts/ThemeContext';
import icon from '../../public/assets/images/logo.png';
import { GA } from 'components/GA';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(
          (registration) => {
            console.log('Service worker registered: ', registration);
          },
          (error) => {
            console.error('Service worker registration failed: ', error);
          },
        );
      });
    }
  }, []);
  return (
    <AppThemeProvider>
      <Favicon url={icon.src} />
      <GA />
      <Component {...pageProps} />
      <GlobalStyles />
    </AppThemeProvider>
  );
}

export default MyApp;
