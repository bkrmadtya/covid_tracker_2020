import React from 'react';
import { Grid } from '@material-ui/core';

import DetailCards from 'components/DataPanel/Details/DetailCards';
import LineChart from 'components/DataPanel/LineChart';

import SelectCountry from './SelectCountry';

const DataPanel = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SelectCountry />
      </Grid>
      <Grid item xs={12}>
        <DetailCards />
      </Grid>
      <Grid item xs={12}>
        <LineChart />
      </Grid>
    </Grid>
  );
};

export default DataPanel;
