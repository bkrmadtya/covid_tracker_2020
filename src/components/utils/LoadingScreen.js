import React from 'react';
import {
  Backdrop,
  CircularProgress,
  LinearProgress,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  backdrop: {
    backgroundColor: 'transparent',
    color: 'blue',
  },
});

const LoadingScreen = () => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress />
    </Backdrop>
  );
};

export default React.memo(LoadingScreen);
