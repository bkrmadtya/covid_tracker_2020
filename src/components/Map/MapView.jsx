import React, { useEffect, useState } from 'react';
import MapGL, {
  NavigationControl,
  FullscreenControl,
} from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import CircleMarker from './CircleMarker';

import DataService from 'services/DataServices';
import { Card } from '@material-ui/core';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiYmtybWFkdHlhIiwiYSI6ImNrOHN2bnAyNzBsdHgzc3FhYXVwczNndmcifQ.ywNlS9BxkO7FS-sYn1cMKw';

const MapView = () => {
  const [data, setData] = useState([]);
  const [hoveredCountry, setHoveredCountry] = useState();

  const _fetchData = async () => {
    const data = await DataService.getGlobalData();
    setData(data);
  };

  useEffect(() => {
    _fetchData();
  }, []);

  const _onHover = (country) => {
    setHoveredCountry(country.country);
  };

  const _onLeave = () => {
    setHoveredCountry();
  };

  if (!data) return null;

  return (
    <Card elevation={4} style={{ height: '100%' }}>
      <MapGL
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 5,
        }}
        accessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        latitude={20}
        longitude={0}
        zoom={0.5}
        onViewportChange={(viewport) => {}}
        onHover={() => console.log('hovered')}
        visibility={{
          labels: false,
        }}
      >
        {data.map((country) => (
          <CircleMarker
            key={country.country}
            country={country}
            hoveredCountry={hoveredCountry}
            onHover={_onHover}
            onLeave={_onLeave}
          />
        ))}

        <NavigationControl showZoom position="bottom-right" />

        <FullscreenControl position="top-right" />
      </MapGL>
    </Card>
  );
};

export default React.memo(MapView);
