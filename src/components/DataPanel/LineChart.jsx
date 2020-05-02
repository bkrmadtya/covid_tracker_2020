import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { Card } from '@material-ui/core';

import colors from 'styles/colors';

const options = {
  chart: {
    type: 'spline',
  },
  title: {
    text: 'Global Covid 19 cases',
    style: {
      fontSize: 14,
      fontWeight: 700,
    },
  },
  xAxis: {
    title: {
      text: 'Date',
    },
  },
  yAxis: {
    title: {
      text: 'No. of cases',
    },
  },

  series: [
    {
      name: 'data 1',
      data: [1, 2, 1, 4, 3, 6],
      color: '#FF0000',
    },
    {
      name: 'Data 2',
      data: [12, 22, 12, 42, 32, 62],
    },
  ],
};

const WeeklyChart = () => {
  return (
    <Card elevation={4} style={{}}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Card>
  );
};

export default WeeklyChart;
