import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Toolbar, makeStyles, Box } from '@material-ui/core';

import 'App.css';

import NavBar from 'components/utils/NavBar';
import MapView from 'components/Map/MapView';
import LineChart from 'components/DataPanel/LineChart';
import DataPanel from 'components/DataPanel/DataPanel';

import { getInitialData } from 'store/actions/dataActions';
import { getDataByCountry } from 'store/actions/countriesActions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    flexGrow: 1,
    height: '90vh',
  },
}));

function App({ getInitialData, getDataByCountry }) {
  useEffect(() => {
    getInitialData();
    getDataByCountry('Global');
  }, [getDataByCountry, getInitialData]);

  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Toolbar />
      <Container maxWidth="xl">
        <Box my={2} className={classes.root}>
          <Grid
            className={classes.grid}
            container
            justify="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={8}>
              <MapView />
            </Grid>
            <Grid item xs={4}>
              <DataPanel />
              <LineChart />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default connect(null, { getInitialData, getDataByCountry })(App);
