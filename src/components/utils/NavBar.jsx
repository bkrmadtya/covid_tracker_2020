import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
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

export default NavBar;
