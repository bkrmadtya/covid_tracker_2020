import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from '@material-ui/core';

import DataService from 'services/DataServices';

const createDataSet = (data) => {
  const newDataSet = { datasets: [] };

  newDataSet.labels = [...Object.keys(data.cases)];

  const colors = {
    cases: 'rgb(222, 55, 0,0.5)',
    recovered: '#21ba45',
    deaths: 'grey',
  };

  ['cases', 'recovered', 'deaths'].forEach((i) => {
    const color = colors[i];
    newDataSet.datasets.push({
      label: i.charAt(0).toUpperCase() + i.slice(1),
      data: [...Object.values(data[i])],
      fill: false,
      backgroundColor: color,
      lineTension: 0.1,
      borderColor: color,
    });
  });

  return newDataSet;
};

const options = {
  responsive: true,
  title: {
    display: true,
    text: 'Covid 19 Global Data',
  },
  tooltips: {
    mode: 'index',
    intersect: false,
  },
  hover: {
    mode: 'nearest',
    intersect: true,
  },
  legend: {
    display: true,
    labels: {
      boxWidth: 10,
      usePointStyle: true,
    },
  },
  scales: {
    xAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Date',
        },
      },
    ],
    yAxes: [
      {
        display: true,
        ticks: {
          callback: (label) => {
            let newLabel = label / 1000;

            if (newLabel > 1) {
              return newLabel + 'k';
            }

            return label;
          },
        },
        scaleLabel: {
          display: true,
          labelString: 'No. of cases (in thousand)',
        },
      },
    ],
  },
};

const WeeklyChart = () => {
  const [data, setData] = useState();

  const _getData = async () => {
    const data = await DataService.getWeeklyData();
    setData(data);
  };

  useEffect(() => {
    _getData();
  }, []);

  if (!data) return null;

  const dataSet = createDataSet(data);
  console.log(dataSet);

  return (
    <Card elevation={4}>
      <Line data={dataSet} options={options} />
    </Card>
  );
};

export default WeeklyChart;
