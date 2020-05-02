import React from 'react';
import {
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '100%',
    textAlign: 'center',
    padding: '5 !important',
  },
  cardContent: {
    '&:last-child': {
      padding: 8,
    },
  },
});

const SingleCard = ({ title, number, today, color }) => {
  const classes = useStyles();
  const style = { borderBottom: `5px solid ${color}` };

  console.log(typeof today);

  return (
    <Card elevation={4} className={classes.root} style={style}>
      <CardContent classes={{ root: classes.cardContent }}>
        <Typography variant="subtitle1">{title}</Typography>
        {number ? (
          <>
            <Typography variant="h6" style={{ color }}>
              {number}
            </Typography>
            {today && today !== 0 && <Chip size="small" label={`+ ${today}`} />}
          </>
        ) : (
          <CircularProgress style={{ color }} />
        )}
      </CardContent>
    </Card>
  );
};

export default SingleCard;
