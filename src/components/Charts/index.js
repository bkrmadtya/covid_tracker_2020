import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';

import LineChart from 'components/Charts/LineChart';
import MapChart from 'components/Charts/MapChart';

import { getGlobalTrendData } from 'store/actions/dataActions';

const useStyles = makeStyles({
  root: {
    flex: 1,
    height: '100%',
  },
});

const Charts = ({ getGlobalTrendData }) => {
  const classes = useStyles();
  useEffect(() => {
    getGlobalTrendData();
  }, [getGlobalTrendData]);

  return (
    <Container maxWidth="md">
      <Box my={2} className={classes.root}>
        <Grid className={classes.root} container direction="column" spacing={3}>
          <h1>Charts</h1>
          <Grid item>
            <MapChart />
          </Grid>
          <Grid item>
            <LineChart />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default connect(null, { getGlobalTrendData })(Charts);
