import React from 'react';
import { Marker } from '@urbica/react-map-gl';
import { makeStyles } from '@material-ui/core';

import Colors from 'styles/colors';

import PopUp from './PopUp';

const useStyles = makeStyles({
  root: {
    width: (props) => props.radius,
    height: (props) => props.radius,
    borderRadius: 50,
    backgroundColor: Colors.cases,
    opacity: 0.5,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0px 0px 0px 3px #de0b00',
    },
  },
});

const CircleMarker = ({ country, onHover, onLeave, hoveredCountry }) => {
  const { cases, country: name, countryInfo } = country;
  const { lat, long: lng } = countryInfo;

  const radius = calculateRadius(cases);
  const classes = useStyles({ radius });

  const isHovered = hoveredCountry === name;

  return (
    <Marker key={country.country} longitude={lng} latitude={lat}>
      <div
        className={classes.root}
        onMouseOver={() => onHover(country)}
        onMouseLeave={() => onLeave()}
      >
        {isHovered && (
          <PopUp country={country} radius={radius}>
            {country.country}
          </PopUp>
        )}
      </div>
    </Marker>
  );
};

const calculateRadius = (cases) => {
  let radius;

  if (cases <= 100) {
    radius = 5;
  } else if (cases > 100 && cases <= 1000) {
    radius = 7;
  } else if (cases > 1000 && cases <= 5000) {
    radius = 9;
  } else if (cases > 5000 && cases <= 50000) {
    radius = 15;
  } else if (cases > 50000 && cases <= 100000) {
    radius = 19;
  } else if (cases > 100000 && cases <= 250000) {
    radius = 24;
  } else {
    radius = 40;
  }

  return radius;
};

export default React.memo(CircleMarker);
