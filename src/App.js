import React, { useEffect } from 'react';
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

import Charts from 'components/Charts';
import MapAndData from 'components/MapAndData';
import NavBar from 'components/utils/NavBar';

import { getInitialData } from 'store/actions/dataActions';
import { getDataByCountry } from 'store/actions/countriesActions';

import LocalStorage from 'services/LocalStorageServices';

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
    <MuiThemeProvider theme={THEME}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Toolbar variant="dense" />
        <Container maxWidth="xl">
          <Box my={2} className={classes.root}>
            <Route exact component={Charts} path="/charts" />
            <Route exact component={MapAndData} path="/" />
          </Box>
        </Container>
      </Router>
    </MuiThemeProvider>
  );
});

export default connect(null, { getInitialData, getDataByCountry })(App);
