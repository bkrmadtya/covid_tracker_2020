import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Toolbar } from '@material-ui/core';

import 'App.css';

import LoadingScreen from 'components/utils/LoadingScreen';
import NavBar from 'components/utils/NavBar';
import NotificationBar from 'components/utils/NotificaitonBar';

import { getInitialData } from 'store/actions/dataActions';
import { getDataByCountry } from 'store/actions/countriesActions';

import LocalStorage from 'services/LocalStorageServices';

const AboutMe = React.lazy(() => import('components/AboutMe'));
const Graphs = React.lazy(() => import('components/Graphs'));
const MapAndData = React.lazy(() => import('components/MapAndData'));

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

  return (
    <Router>
      <NavBar />
      <NotificationBar />
      <Toolbar variant="dense" />
      <Suspense fallback={<LoadingScreen />}>
        <Route exact component={Graphs} path="/graphs" />
        <Route exact component={AboutMe} path="/about" />
        <Route exact component={MapAndData} path="/" />
      </Suspense>
    </Router>
  );
});

export default connect(null, { getInitialData, getDataByCountry })(App);
