import React from 'react';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  backdrop: {
    backgroundColor: 'transparent',
    color: 'grey',
  },
});

const LoadingScreen = () => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingScreen;
