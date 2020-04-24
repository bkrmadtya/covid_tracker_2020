import React, { useEffect, useState } from 'react';
import MapGL, {
  Source,
  Layer,
  Marker,
  FeatureState,
  NavigationControl,
  FullscreenControl,
  Popup,
} from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import DataService from '../services/DataServices';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiYmtybWFkdHlhIiwiYSI6ImNrOHN2bnAyNzBsdHgzc3FhYXVwczNndmcifQ.ywNlS9BxkO7FS-sYn1cMKw';

const MapView = () => {
  const [data, setData] = useState([]);
  const [hoveredCountry, setHoveredCountry] = useState();

  const _fetchData = async () => {
    const { data } = await DataService.getGlobalData();
    console.log(data[0]);
    setData(data);
  };

  useEffect(() => {
    _fetchData();
  }, []);

  const _onHover = (country) => {
    setHoveredCountry(country);
  };

  const _onLeave = () => {
    setHoveredCountry();
  };

  if (!data) return null;

  return (
    <MapGL
      style={{ width: '100%', height: '400px' }}
      accessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/light-v9"
      latitude={37.830348}
      longitude={-100.486052}
      zoom={2}
      onViewportChange={(viewport) => {}}
      onHover={() => console.log('hovered')}
    >
      {data.map((country) => {
        const { countryInfo } = country;
        const { lat, long: lng } = countryInfo;
        const radius = 20;

        return (
          <Marker key={country.country} longitude={lng} latitude={lat}>
            <div
              style={{
                width: radius,
                height: radius,
                borderRadius: 50,
                backgroundColor: 'red',
              }}
              onMouseOver={() => _onHover(country)}
              onMouseLeave={() => _onLeave()}
            >
              {hoveredCountry && hoveredCountry.country === country.country && (
                <Popup
                  offset={radius}
                  longitude={lng}
                  latitude={lat}
                  closeButton={false}
                  closeOnClick={false}
                >
                  {country.country}
                </Popup>
              )}
            </div>
          </Marker>
        );
      })}

      <NavigationControl showZoom position="bottom-right" />

      <FullscreenControl position="top-right" />
    </MapGL>
  );
};

export default MapView;
