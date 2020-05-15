import React from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { Card } from '@material-ui/core';

require('highcharts/modules/exporting')(Highcharts);

const pieOptions = {
  chart: {
    type: 'pie',
  },
  accessibility: {
    point: {
      valueSuffix: '%',
    },
  },
  credits: {
    enabled: false,
  },
  exporting: {
    enabled: true,
    showTable: true,
  },
  title: {
    text: 'Global case distribution by country',
  },
  tooltip: {
    headerFormat: '',
    pointFormat:
      '<span style="color:{point.color}">●</span> {point.name}: <b>{point.percentage:.1f}%</b><br/>',
  },
  plotOptions: {
    pie: {
      allowPointSelect: false,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
      },
    },
  },
  series: [],
};

const _convertDataToPieOptions = (data) => {
  console.log(data[11]);
  const newOptions = { ...pieOptions };
  const parsedData = data.map((i) => {
    return {
      name: i.country,
      y: i.cases,
    };
  });
  newOptions.series = [
    {
      data: [...parsedData],
    },
  ];

  return newOptions;
};

const PieChart = ({ data }) => {
  if (!data) return null;

  const options = _convertDataToPieOptions(data);

  return (
    <Card elevation={4}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data.globalData,
  };
};

export default connect(mapStateToProps)(PieChart);
