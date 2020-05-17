import React from 'react';
import { connect } from 'react-redux';
import { Snackbar, Typography, makeStyles } from '@material-ui/core';
import { red, grey } from '@material-ui/core/colors';

const vertical = 'bottom';
const horizontal = 'center';

const useStyles = makeStyles((theme) => ({
  snackbar: {
    opacity: 0.7,
  },
  content: {
    backgroundColor: (props) => (props.type === 'INFO' ? grey[800] : red[500]),
    color: 'white',
    fontSize: '1.2em',
    padding: '10px 40px',
    borderRadius: 5,
  },
}));

const NotificationBar = ({ notification }) => {
  const classes = useStyles({ type: notification?.type });

  if (!notification) return null;

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      className={classes.snackbar}
      open={true}
    >
      <Typography className={classes.content}>
        {notification.message}
      </Typography>
    </Snackbar>
  );
};

const mapStateToProps = (state) => ({
  notification: state.notification,
});

export default connect(mapStateToProps)(NotificationBar);
