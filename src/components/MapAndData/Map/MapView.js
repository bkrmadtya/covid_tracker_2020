import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import MapGL, { NavigationControl } from '@urbica/react-map-gl';
import { Card, makeStyles } from '@material-ui/core';
import 'mapbox-gl/dist/mapbox-gl.css';

import CircleMarker from './CircleMarker';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiYmtybWFkdHlhIiwiYSI6ImNrOHN2bnAyNzBsdHgzc3FhYXVwczNndmcifQ.ywNlS9BxkO7FS-sYn1cMKw';

const mapStyle = 'mapbox://styles/mapbox/light-v8';

const useStyles = makeStyles({
  root: {
    flex: 1,
    height: '100%',
    minHeight: '300px',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

const viewPortSettings = {
  zoom: 1,
  dragRotate: false,
  latitude: 20,
  longitude: 0,
  viewportChangeMethod: 'flyTo',
  viewportChangeOptions: { duration: 1500 },
};

const MapView = ({ data, selectedCountry }) => {
  const classes = useStyles();
  const [hoveredCountry, setHoveredCountry] = useState();
  const [viewPort, setViewPort] = useState(viewPortSettings);

  const _changeViewPort = (lat, lng, zoom) => {
    const newViewPort = {
      ...viewPort,
      latitude: lat,
      longitude: lng,
      zoom,
    };

    setViewPort(newViewPort);
  };

  useEffect(() => {
    if (selectedCountry.value !== 'Global') {
      const {
        details: {
          countryInfo: { lat, long },
        },
      } = selectedCountry;

      _changeViewPort(lat, long, 4);
    } else {
      const { latitude, longitude, zoom } = viewPortSettings;
      _changeViewPort(latitude, longitude, zoom);
    }
  }, [selectedCountry]);

  if (!data) return null;

  const _onHover = ({ country }) => {
    setHoveredCountry(country);
  };

  const _onLeave = () => {
    setHoveredCountry();
  };

  return (
    <Card className={classes.root} elevation={4}>
      <MapGL
        accessToken={MAPBOX_TOKEN}
        className={classes.map}
        mapStyle={mapStyle}
        onViewportChange={(viewport) => { }}
        {...viewPort}
      >
        {data.map((country) => (
          <CircleMarker
            country={country}
            key={country.country}
            hoveredCountry={hoveredCountry}
            onHover={_onHover}
            onLeave={_onLeave}
          />
        ))}

        <NavigationControl showZoom position="bottom-right" />
      </MapGL>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data.globalData,
    selectedCountry: state.countries.selected,
  };
};

export default connect(mapStateToProps)(React.memo(MapView));
