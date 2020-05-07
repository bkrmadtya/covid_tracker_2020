import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import MapGL, {
  NavigationControl,
  FullscreenControl,
} from '@urbica/react-map-gl';
import { Card, makeStyles } from '@material-ui/core';
import 'mapbox-gl/dist/mapbox-gl.css';

import CircleMarker from './CircleMarker';

import DataService from 'services/DataServices';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiYmtybWFkdHlhIiwiYSI6ImNrOHN2bnAyNzBsdHgzc3FhYXVwczNndmcifQ.ywNlS9BxkO7FS-sYn1cMKw';

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

const MapView = ({ datas }) => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [hoveredCountry, setHoveredCountry] = useState();

  const _fetchData = async () => {
    const data = await DataService.getGlobalData();
    setData(data);
  };

  useEffect(() => {
    _fetchData();

    return _fetchData;
  }, []);

  const _onHover = (country) => {
    setHoveredCountry(country.country);
  };

  const _onLeave = () => {
    setHoveredCountry();
  };

  if (!data) return null;

  return (
    <Card className={classes.root} elevation={4}>
      <MapGL
        accessToken={MAPBOX_TOKEN}
        className={classes.map}
        dragRotate={false}
        latitude={20}
        longitude={0}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        onViewportChange={(viewport) => {}}
        zoom={0.5}
      >
        {datas.map((country) => (
          <CircleMarker
            country={country}
            key={country.country}
            hoveredCountry={hoveredCountry}
            onHover={_onHover}
            onLeave={_onLeave}
          />
        ))}

        <NavigationControl showZoom position="bottom-right" />

        {/* <FullscreenControl position="top-right" /> */}
      </MapGL>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    datas: state.data,
  };
};

export default connect(mapStateToProps)(MapView);
