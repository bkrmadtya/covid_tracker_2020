import React, { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CircularProgress,
  Typography,
  makeStyles,
} from '@material-ui/core';

import DetailCards from './Details/DetailCards';

import DataServices from '../services/DataServices';

const DataPanel = () => {
  const [data, setData] = useState({});

  const _fetchData = async () => {
    const data = await DataServices.getDataByCountry();
    setData(data);
  };

  useEffect(() => {
    _fetchData();
  }, []);

  return <DetailCards data={data} />;
};

export default DataPanel;
