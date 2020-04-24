import React from 'react';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  makeStyles,
  Box,
} from '@material-ui/core';

import './App.css';

import MapView from './components/MapView';

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(2),
    backgroundColor: 'black',
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
      <CssBaseline />
      <NavBar />
      <Toolbar />
      <Container maxWidth="md">
        <Box my={2}>
          <MapView />
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
