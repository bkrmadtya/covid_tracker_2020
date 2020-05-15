import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid, makeStyles, Typography } from '@material-ui/core';

import LineChart from 'components/Charts/LineChart';
import MapChart from 'components/Charts/MapChart';
import PieChart from 'components/Charts/PieChart';

import { getGlobalTrendData } from 'store/actions/dataActions';

const useStyles = makeStyles({
  root: {
    flex: 1,
    height: '100%',
  },
  title: {
    margin: '20px 0',
  },
});

const Charts = ({ getGlobalTrendData }) => {
  const classes = useStyles();

  useEffect(() => {
    getGlobalTrendData();
  }, [getGlobalTrendData]);

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h2">Charts and Graphs</Typography>
        <Typography variant="body1">Covid 19 case analysis</Typography>
      </Grid>
      <Grid item>
        <PieChart />
      </Grid>
      <Grid item>
        <MapChart />
      </Grid>
      <Grid item>
        <LineChart />
      </Grid>
    </Grid>
  );
};

export default connect(null, { getGlobalTrendData })(Charts);
