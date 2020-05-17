import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

import LineChart from 'components/Graphs/LineChart';
import MapChart from 'components/Graphs/MapChart';
import PieChart from 'components/Graphs/PieChart';

import { getGlobalTrendData } from 'store/actions/dataActions';

const Graphs = ({ getGlobalTrendData }) => {
  useEffect(() => {
    getGlobalTrendData();
  }, [getGlobalTrendData]);

  return (
    <Container maxWidth="md">
      <Box my={2}>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Typography variant="h4">Graphs and charts</Typography>
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

export default connect(null, { getGlobalTrendData })(Graphs);
