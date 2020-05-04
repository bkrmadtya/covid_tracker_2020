import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Toolbar, makeStyles, Box } from '@material-ui/core';

import 'App.css';

import DataPanel from 'components/DataPanel/DataPanel';
import NavBar from 'components/utils/NavBar';
import MapView from 'components/Map/MapView';

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
  items: {
    flexGrow: 1,
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
      {/* <NavBar />
      <Toolbar /> */}
      <Container maxWidth="xl">
        <Box my={2} className={classes.root}>
          <Grid
            className={classes.grid}
            container
            justify="center"
            spacing={3}
            alignItems="stretch"
          >
            <Grid className={classes.items} item xs={12} sm={8}>
              <MapView />
            </Grid>
            <Grid className={classes.items} item xs={12} sm={4}>
              <DataPanel />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default connect(null, { getInitialData, getDataByCountry })(App);
