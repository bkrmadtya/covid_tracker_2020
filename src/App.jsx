import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Toolbar, makeStyles, Box } from '@material-ui/core';

import 'App.css';

import DataPanel from 'components/DataPanel/DataPanel';
import NavBar from 'components/utils/NavBar';
import MapView from 'components/Map/MapView';

import { getInitialData } from 'store/actions/dataActions';
import { getDataByCountry } from 'store/actions/countriesActions';

import LocalStorage from 'services/LocalStorageServices';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    flexGrow: 1,
    height: '850px',
  },
  items: {
    flexGrow: 1,
  },
}));

const callEveryFiveMinutes = (func1, func2) => {
  func1();
  func2();
  setTimeout(() => {
    LocalStorage.clearLocalStorage();
    callEveryFiveMinutes(func1, func2);
  }, 300000);
};

const App = React.memo(({ getInitialData, getDataByCountry }) => {
  useEffect(() => {
    callEveryFiveMinutes(getInitialData, getDataByCountry);

    return callEveryFiveMinutes;
  }, [callEveryFiveMinutes]);

  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Toolbar variant="dense" />
      <Container maxWidth="xl">
        <Box my={2} className={classes.root}>
          <Grid className={classes.grid} container spacing={3}>
            <Grid className={classes.items} item xs={12} lg={8}>
              <MapView />
            </Grid>
            <Grid className={classes.items} item xs={12} lg={4}>
              <DataPanel />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
});

export default connect(null, { getInitialData, getDataByCountry })(App);
