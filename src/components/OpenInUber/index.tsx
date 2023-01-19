import * as Styled from './styles';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export type OpenInUberProps = {
  title?: string;
  lat?: number;
  lng?: number;
};
export const OpenInUber = ({
  title = 'Abrir no Uber',
  lat = -22.759582085683657,
  lng = -43.45494480389828,
}: OpenInUberProps) => {
  const openUber = () => {
    const destination = { lat, lng };
    const url = `uber://?action=setPickup&pickup=my_location&dropoff[latitude]=${destination.lat}&dropoff[longitude]=${destination.lng}`;
    window.location.href = url;
  };
  return (
    <Styled.Wrapper onClick={openUber}>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0px' }}>
        <ArrowForwardIosIcon fontSize="medium" />
        {title}
      </div>
      <span style={{ marginLeft: '10px' }}>
        <LocalTaxiIcon fontSize="inherit" />
      </span>
    </Styled.Wrapper>
  );
};
