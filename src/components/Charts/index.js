import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

import LineChart from 'components/Charts/LineChart';
import MapChart from 'components/Charts/MapChart';
import PieChart from 'components/Charts/PieChart';

import { getGlobalTrendData } from 'store/actions/dataActions';

const Charts = ({ getGlobalTrendData }) => {
  useEffect(() => {
    getGlobalTrendData();
  }, [getGlobalTrendData]);

  return (
    <Container maxWidth="md">
      <Box my={2}>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Typography variant="h4">Charts and Graphs</Typography>
            <Typography variant="body1">Covid 19 case analysis</Typography>
          </Grid>
          <Grid item>
            <MapChart />
          </Grid>
          <Grid item>
            <PieChart />
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
