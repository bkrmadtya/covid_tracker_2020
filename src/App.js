import React from 'react';
import {
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Box,
} from '@material-ui/core';

import './App.css';

import MapView from './components/Map/MapView';
import LineChart from './components/LineChart';

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(2),
    backgroundColor: 'black',
    textAlign: 'center',
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Covid 19 Tracker
        </Typography>
      </Toolbar>{' '}
    </AppBar>
  );
};

function App() {
  return (
    <>
      <NavBar />
      <Toolbar />
      <Container maxWidth="lg">
        <Box my={2}>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <MapView />
            </Grid>
            <Grid item xs={4}>
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
