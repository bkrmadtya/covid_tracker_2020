import React from 'react';
import { Marker } from '@urbica/react-map-gl';

import PopUp from './PopUp';

const CircleMarker = ({ country, onHover, onLeave, hoveredCountry }) => {
  const { cases, country: name, countryInfo } = country;
  const { lat, long: lng } = countryInfo;

  const isHovered = hoveredCountry === name;

  const radius = calculateRadius(cases);

  const style = {
    width: radius,
    height: radius,
    borderRadius: 50,
    backgroundColor: '#de3700',
    opacity: 0.5,
    cursor: 'pointer',
    boxShadow: isHovered && '0px 0px 0px 3px #de0b00',
  };

  return (
    <Marker key={country.country} longitude={lng} latitude={lat}>
      <div
        style={style}
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
    radius = 3;
  } else if (cases > 100 && cases <= 1000) {
    radius = 5;
  } else if (cases > 1000 && cases <= 5000) {
    radius = 7;
  } else if (cases > 5000 && cases <= 50000) {
    radius = 12;
  } else if (cases > 50000 && cases <= 100000) {
    radius = 15;
  } else if (cases > 100000 && cases <= 250000) {
    radius = 20;
  } else {
    radius = 32;
  }

  return radius;
};

export default CircleMarker;