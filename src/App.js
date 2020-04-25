import React from 'react';
import { Container, Grid, Toolbar, makeStyles, Box } from '@material-ui/core';

import './App.css';

import NavBar from './components/NavBar';
import MapView from './components/Map/MapView';
import LineChart from './components/LineChart';
import DataPanel from './components/DataPanel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    flexGrow: 1,
    height: '90vh',
  },
}));

function App() {
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

export default App;

const styles = {
  container: {
    marginTop: 10,
  },
};
