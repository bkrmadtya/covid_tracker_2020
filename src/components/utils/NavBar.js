import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import MoreIcon from '@material-ui/icons/MoreVert';

import logo from 'styles/icons/logo.png';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: grey[900],
  },
  button: {
    marginRight: theme.spacing(0),
  },
  ellipsis: {
    color: 'white',
    transform: 'rotate(90deg);',
    filter: 'invert(1)',
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

  const isActive = !location.pathname.includes('/charts');

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
        >
          Map
        </Button>
        <Button
          className={classes.button}
          color="inherit"
          onClick={() => _navigateTo('/charts')}
        >
          Charts
        </Button>
        <IconButton
          aria-label="display more actions"
          edge="end"
          color="inherit"
          onClick={() => _navigateTo('/about')}
        >
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
