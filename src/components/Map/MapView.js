import React, { useEffect, useState } from 'react';
import MapGL, {
  NavigationControl,
  FullscreenControl,
} from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import CircleMarker from './CircleMarker';

import DataService from '../../services/DataServices';

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
    <MapGL
      style={{
        width: '100%',
        height: '350px',
        borderRadius: 5,
      }}
      accessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/light-v9"
      latitude={20}
      longitude={0}
      zoom={0.5}
      onViewportChange={(viewport) => {}}
      onHover={() => console.log('hovered')}
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
  );
};

export default MapView;
