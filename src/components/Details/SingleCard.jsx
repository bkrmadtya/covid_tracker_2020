import React from 'react';
import {
  Card,
  CardContent,
  CircularProgress,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    height: '100%',
    textAlign: 'center',
  },
});

const SingleCard = ({ title, number, today, color }) => {
  const classes = useStyles();
  const style = { borderBottom: `5px solid ${color}` };

  return (
    <Card elevation={4} className={classes.card} style={style}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        {number ? (
          <>
            <Typography variant="h6" style={{ color }}>
              {number}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {today ? '+ ' + today : ''}
            </Typography>
          </>
        ) : (
          <CircularProgress style={{ color }} />
        )}
      </CardContent>
    </Card>
  );
};

export default SingleCard;
