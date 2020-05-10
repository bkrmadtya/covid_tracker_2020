import React from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Card } from '@material-ui/core';

import mapDataWorld from 'components/Charts/MapChart/mapDataWorld';

require('highcharts/modules/map')(Highcharts);

const options = {
  title: {
    text: 'Cases distribution across world per million population',
  },
  colorAxis: {},
  legend: {
    title: {
      text: 'Number of cases per million',
      style: {
        'text-align': 'center',
      },
    },
  },
  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: 'bottom',
    },
  },
  series: [],
  tooltip: {
    headerFormat: '<span style="color:{point.color}">●</span> {point.key}<br/>',
    pointFormat: '<b>{point.value}</b>',
    valueSuffix: ' per million',
  },
};

const _convertDataToMapOptions = (data) => {
  const newOptions = { ...options };

  const parsedData = data
    .map((ele) => {
      const countryISO = ele.countryInfo.iso2;
      if (!countryISO) return null;
      const result = [
        ele.countryInfo.iso2.toLowerCase(),
        ele.casesPerOneMillion,
      ];

      return result;
    })
    .filter((i) => i);

  const plainNumbers = parsedData.map((i) => i[1]);
  const max = Math.max(...plainNumbers);

  newOptions.colorAxis = {
    min: 0,
    max: max / 4,
  };
  newOptions.series = [
    {
      data: parsedData,
      name: 'Cases per million',
      mapData: mapDataWorld,
    },
  ];

  return newOptions;
};

const MapChart = ({ data }) => {
  if (!data) return null;

  const mapOptions = _convertDataToMapOptions(data);

  console.log(mapOptions);

  console.log(options);
  return (
    <Card style={{ margin: '20px 0' }}>
      <HighchartsReact
        options={mapOptions}
        constructorType={'mapChart'}
        highcharts={Highcharts}
      />
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data.globalData,
  };
};

export default connect(mapStateToProps)(MapChart);
