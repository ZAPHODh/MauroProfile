import * as Styled from './styles';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import { useEffect, useRef, useState } from 'react';
import { fromLonLat } from 'ol/proj';
import Overlay from 'ol/Overlay';
import PlaceIcon from '@mui/icons-material/Place';
import { Button } from 'components/Button';
import MapIcon from '@mui/icons-material/Map';
import { OpenInApp } from 'components/OpenInApp';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
export type MapContentProps = {
  center?: [number, number];
  zoom?: number;
  address?: string;
};

export const MapContent = ({
  center = [-43.45494480389828, -22.759582085683657],
  zoom = 16,
  address = 'Av. Doutor Mário Guimarães,318 - Loja 02, Nova Iguaçu',
}: MapContentProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [shouldShowMap, setShouldShowMap] = useState(false);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }
    const map = new Map({
      target: mapRef.current,
      controls: [],
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat(center),
        zoom: zoom,
      }),
    });
    const indicatorOverlay = new Overlay({
      element: document.getElementById('indicator'),
      positioning: 'center-center',
    });
    map.addOverlay(indicatorOverlay);
    indicatorOverlay.setPosition(fromLonLat(center));
    return () => {
      map.setTarget(null);
      map.removeOverlay(indicatorOverlay);
    };
  }, [center, zoom]);

  const handleShowMap = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.currentTarget.blur();
    setShouldShowMap((bool) => !bool);
  };

  return (
    <Styled.Container>
      <Button onClick={handleShowMap}>
        <p>Localização</p>
        <MapIcon fontSize="inherit" />
      </Button>
      {shouldShowMap ? (
        <Styled.Wrapper ref={mapRef}>
          <Styled.Address
            onClick={() => {
              navigator.clipboard.writeText(address);
            }}
          >
            <ContentCopyIcon fontSize="inherit" />
            {address}
          </Styled.Address>
          <Styled.Indicator id="indicator" onClick={(e) => e.stopPropagation()}>
            <PlaceIcon fontSize="inherit" />
          </Styled.Indicator>
          <Styled.ButtonContainer>
            <OpenInApp app="Uber" title="Abrir no Uber" />
            <OpenInApp app="Waze" title="Abrir no Waze" />
            <OpenInApp app="99" title="Abrir no 99" />
          </Styled.ButtonContainer>
        </Styled.Wrapper>
      ) : null}
    </Styled.Container>
  );
};
