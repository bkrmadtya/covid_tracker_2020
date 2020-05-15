import React from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { Card } from '@material-ui/core';

const pieOptions = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
  },
  credits: {
    enabled: false,
  },
  title: {
    text: 'Global case distribution by country',
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
  },
  accessibility: {
    point: {
      valueSuffix: '%',
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
      },
    },
  },
  series: [
    {
      name: 'Brands',
      colorByPoint: true,
      data: [
        {
          name: 'Chrome',
          y: 61.41,
          //   sliced: true,
          //   selected: true,
        },
        {
          name: 'Internet Explorer',
          y: 11.84,
        },
        {
          name: 'Firefox',
          y: 10.85,
        },
        {
          name: 'Edge',
          y: 4.67,
        },
        {
          name: 'Safari',
          y: 4.18,
        },
        {
          name: 'Sogou Explorer',
          y: 1.64,
        },
        {
          name: 'Opera',
          y: 1.6,
        },
        {
          name: 'QQ',
          y: 1.2,
        },
        {
          name: 'Other',
          y: 2.61,
        },
      ],
    },
  ],
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
