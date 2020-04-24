import React, { useEffect, useState } from 'react';

import { Segment, Header, Label, List } from 'semantic-ui-react';

import {
  Map,
  TileLayer,
  LayersControl,
  Circle,
  CircleMarker,
  Marker,
  Popup,
  ZoomControl,
  Tooltip,
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const MapView = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data } = await DataService.getGlobalData();
    console.log(data[0]);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) return null;

  return (
    <>
      <Map
        ref={mapRef}
        center={[17.994401411046148, -3.8671875000000004]}
        zoom={2}
        minZoom={2}
        zoomControl={false}
        doubleClickZoom={true}
        style={{ height: '100vh' }}
        scrollWheelZoom="true"
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
        />

        {data.map((country = {}) => {
          const { countryInfo = {} } = country;
          const { lat, long: lng } = countryInfo;
          const radius = 5;

          console.log(radius);
          return (
            <CircleMarker
              key={country.country}
              center={[lat, lng]}
              color="#de3700"
              fillOpacity={0.5}
              radius={radius}
              weight={0}
            >
              {/* <CountryInfo horizontalOffSet={radius + 3} info={country} /> */}
            </CircleMarker>
          );
        })}

        <ZoomControl zoom position="bottomright" />
      </Map>
    </>
  );
};

export default MapView;
