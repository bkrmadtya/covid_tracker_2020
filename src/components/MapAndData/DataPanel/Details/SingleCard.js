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
    padding: 8,
  },
  cardContent: {
    '&:last-child': {
      padding: 8,
    },
  },
  number: { margin: '-5px 0' },
  chip: {
    marginTop: '0.5em',
    width: 70,
  },
});

const SingleCard = ({ title, number, today, color }) => {
  const classes = useStyles();
  const style = { borderBottom: `5px solid ${color}` };

  return (
    <Card elevation={4} className={classes.root} style={style}>
      <Typography component="p" variant="subtitle1">
        {title}
      </Typography>
      {number >= 0 ? (
        <>
          <Typography
            className={classes.number}
            component="p"
            variant="h6"
            style={{ color }}
          >
            {number}
          </Typography>

          {today > 0 && (
            <Chip className={classes.chip} label={`+ ${today.toLocaleString()}`} size="small" />
          )}
        </>
      ) : (
        <CircularProgress style={{ color }} />
      )}
    </Card>
  );
};

export default React.memo(SingleCard);
