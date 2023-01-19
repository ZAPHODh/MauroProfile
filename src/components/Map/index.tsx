import * as Styled from './styles';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import { useEffect, useRef } from 'react';
import { fromLonLat } from 'ol/proj';
import Overlay from 'ol/Overlay';
import PlaceIcon from '@mui/icons-material/Place';
import { OpenInUber } from 'components/OpenInUber';

export type MapContentProps = {
  center?: [number, number];
  zoom?: number;
};

export const MapContent = ({
  center = [-43.45494480389828, -22.759582085683657],
  zoom = 16,
}: MapContentProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

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
  return (
    <Styled.Wrapper ref={mapRef}>
      {/* <div>adress</div> */}
      <Styled.Indicator id="indicator" onClick={(e) => e.stopPropagation()}>
        <PlaceIcon fontSize="inherit" />
      </Styled.Indicator>
      <OpenInUber />
    </Styled.Wrapper>
  );
};
