import * as Styled from './styles';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import useScreenWidth from 'customHooks/useScreenWidth';
export type AppType = 'Uber' | '99' | 'Waze';
export type OpenInAppProps = {
  title: string;
  app: AppType;
  lat?: number;
  lng?: number;
};

export const OpenInApp = ({
  title,
  app = 'Uber',
  lat = -22.759582085683657,
  lng = -43.45494480389828,
}: OpenInAppProps) => {
  const width = useScreenWidth();
  const toApp = (app: AppType) => {
    if (app === 'Uber') {
      const appUrl = `uber://?action=setPickup&pickup=my_location&dropoff[latitude]=${lat}&dropoff[longitude]=${lng}`;
      const webUrl = `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[latitude]=${lat}&dropoff[longitude]=${lng}`;
      if (width <= 728) {
        window.location.href = appUrl;
        return;
      } else {
        window.location.href = webUrl;
        return;
      }
    }
    if (app === '99') {
      const appUrl = `99://app.99.co?destination=${lat},${lng}`;

      if (width <= 728) {
        window.location.href = appUrl;
        return;
      }
      alert('Não foi encontrado o app no seu dispositivo');
      return;
    }
    if (app === 'Waze') {
      const appUrl = `https://waze.com/ul?q=66%20Acacia%20Avenue&ll=${lat},${lng}&navigate=yes`;

      if (width <= 728) {
        window.location.href = appUrl;
        return;
      }
      alert('Não foi encontrado o app no seu dispositivo');
      return;
    }
  };
  return (
    <Styled.Wrapper
      onClick={() => {
        toApp(app);
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0px' }}>
        <ArrowForwardIosIcon fontSize="medium" />
        {title}
      </div>
      <span style={{ marginLeft: '10px' }}>
        {app === 'Waze' ? (
          <TimeToLeaveIcon fontSize="inherit" />
        ) : (
          <LocalTaxiIcon fontSize="inherit" />
        )}
      </span>
    </Styled.Wrapper>
  );
};
