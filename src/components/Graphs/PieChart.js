import React from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { Card } from '@material-ui/core';

require('highcharts/modules/exporting')(Highcharts);

Highcharts.setOptions({
  lang: {
    thousandsSep: ',',
  },
});

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
    text: 'Covid 19 infection rate',
  },
  subtitle: {
    text: 'Case distribution among countries',
  },
  tooltip: {
    headerFormat: '',
    pointFormat:
      '<span style="color:{point.color}">●</span> {point.name}: <b>{point.percentage:.1f}%  ({point.y:,.0f} cases)</b><br/>',
  },
  plotOptions: {
    pie: {
      allowPointSelect: false,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format:
          '<b>{point.name}</b>: {point.percentage:.1f} % ({point.y:,.0f} cases)',
      },
    },
  },
  series: [],
};

const _convertDataToPieOptions = (data) => {
  const newOptions = { ...pieOptions };
  const parsedData = data
    .map((i) => {
      return {
        name: i.country,
        y: i.cases,
      };
    })
    .sort((a, b) => b.y - a.y);

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
