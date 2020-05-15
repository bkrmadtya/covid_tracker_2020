import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  Box,
  Container,
  CssBaseline,
  Toolbar,
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
} from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';

import 'App.css';

import NavBar from 'components/utils/NavBar';
import NotificationBar from 'components/utils/NotificaitonBar';

import { getInitialData } from 'store/actions/dataActions';
import { getDataByCountry } from 'store/actions/countriesActions';

import LocalStorage from 'services/LocalStorageServices';

const MapAndData = React.lazy(() => import('components/MapAndData'));
const Charts = React.lazy(() => import('components/Charts'));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const THEME = createMuiTheme({
  palette: {
    background: {
      default: blueGrey[50],
    },
  },
  typography: {
    fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial'].join(','),
    fontSize: 12,
  },
});

const callEveryFiveMinutes = (getInitData, getDataByCountry) => {
  getInitData();
  getDataByCountry();

  setTimeout(() => {
    LocalStorage.clearLocalStorage();
    const updateInitData = () => getInitData(true); // true flag to denote it is called to update
    callEveryFiveMinutes(updateInitData, getDataByCountry);
  }, 300000);
};

const App = React.memo(({ getInitialData, getDataByCountry }) => {
  useEffect(() => {
    callEveryFiveMinutes(getInitialData, getDataByCountry);

    return callEveryFiveMinutes;
  }, [callEveryFiveMinutes]);

  const classes = useStyles();
  return (
    <MuiThemeProvider theme={THEME}>
      <CssBaseline />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Router>
          <NavBar />
          <NotificationBar />
          <Toolbar variant="dense" />
          <Container maxWidth="xl">
            <Box my={2} className={classes.root}>
              <Route exact component={Charts} path="/charts" />
              <Route exact component={MapAndData} path="/" />
            </Box>
          </Container>
        </Router>
      </Suspense>
    </MuiThemeProvider>
  );
});

export default connect(null, { getInitialData, getDataByCountry })(App);
