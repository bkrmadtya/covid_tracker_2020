import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

import logo from 'styles/icons/logo.png';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'black',
    textAlign: 'center',
  },
  logo: {
    height: theme.spacing(3),
    verticalAlign: 'middle',
    margin: '-2px 7px 0 0',
  },
  title: { flexGrow: 1, fontSize: '1em' },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar variant="dense">
        <Typography className={classes.title} variant="h6">
          <img className={classes.logo} src={logo} />
          Covid 19 Tracker
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
