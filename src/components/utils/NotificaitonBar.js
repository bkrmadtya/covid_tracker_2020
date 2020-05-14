import React from 'react';

import { Snackbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const vertical = 'bottom';
const horizontal = 'center';

const useStyles = makeStyles({
  content: {
    backgroundColor: ({ type }) => (type === 'ERROR' ? 'red' : 'blue'),
    color: 'white',
    padding: '5px 10px',
  },
});

const NotificationBar = () => {
  const classes = useStyles();
  return (
    <Snackbar anchorOrigin={{ vertical, horizontal }} open={true}>
      <Typography>asdasdfasdf</Typography>
    </Snackbar>
  );
};

export default NotificationBar;
