import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

import logo from 'styles/icons/logo.png';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: grey[900],
  },
  button: {
    margin: 'auto 5',
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
  const history = useHistory();
  const location = useLocation();

  const _navigateTo = (path) => {
    history.push(path);
  };

  const isHomeRoute = !location.pathname.includes('/charts');

  return (
    <AppBar className={classes.appBar}>
      <Toolbar variant="dense">
        <Typography className={classes.title} variant="h6">
          <img className={classes.logo} src={logo} />
          Covid 19 Tracker
        </Typography>
        <Button
          className={classes.button}
          color="inherit"
          onClick={() => _navigateTo('/')}
          style={{ backgroundColor: isHomeRoute && 'grey' }}
        >
          Map
        </Button>
        <Button
          className={classes.button}
          color="inherit"
          onClick={() => _navigateTo('/charts')}
          style={{ backgroundColor: !isHomeRoute && 'grey' }}
        >
          Charts
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
