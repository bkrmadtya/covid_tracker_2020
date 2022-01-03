import React from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Card } from '@material-ui/core';

import Colors from 'styles/colors';

require('highcharts/modules/exporting')(Highcharts);

Highcharts.setOptions({
  lang: {
    thousandsSep: ',',
  },
});

const chartOptions = {
  chart: {
    type: 'spline',
  },

  credits: {
    enabled: false,
  },
  title: {
    text: 'Global Covid 19 cases trend',
  },
  subtitle: {
    text: 'Linear scale',
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 1996,
    },
  },

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
          },
        },
      },
    ],
  },

  series: [],

  tooltip: {
    shared: true,
    crosshairs: true,
  },

  xAxis: {},

  yAxis: {},
};

const _convertToChartOptions = (data) => {
  const keys = {
    cases: 'Cases',
    deaths: 'Deaths',
    recovered: 'Recovered',
  };

  const series = Object.keys(data).map((ele) => ({
    name: keys[ele],
    data: Object.values(data[ele]),
  }));

  const startingDate = Object.keys(data.cases)[0].split('/'); // fromat => mm/dd/yyy
  const month = parseInt(startingDate[0]) - 1; // => months range from [0-11]
  const day = parseInt(startingDate[1]);
  const year = parseInt(startingDate[2]) === 20 ? 2020 : 2019;

  const newOptions = { ...chartOptions };

  newOptions.colors = Object.keys(keys).map((i) => Colors[i]);
  newOptions.plotOptions.series = {
    pointStart: Date.UTC(year, month, day),
    pointInterval: 24 * 3600 * 1000,
  };
  newOptions.series = [...series];

  newOptions.xAxis = {
    type: 'datetime',
    title: {
      text: 'Date',
    },
  };
  newOptions.yAxis = {
    title: {
      text: 'Number of cases',
    },
  };

  return newOptions;
};

const WeeklyChart = ({ data }) => {
  if (!data) return null;

  const options = _convertToChartOptions(data);

  return (
    <Card elevation={4}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data.monthlyData,
  };
};

export default connect(mapStateToProps)(React.memo(WeeklyChart));
