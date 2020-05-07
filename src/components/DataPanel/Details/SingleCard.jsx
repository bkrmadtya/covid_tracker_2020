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
  },
  cardContent: {
    '&:last-child': {
      padding: 8,
    },
  },
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
      <CardContent classes={{ root: classes.cardContent }}>
        <Typography variant="subtitle1" component="p">
          {title}
        </Typography>
        {number >= 0 ? (
          <>
            <Typography variant="h6" component="p" style={{ color }}>
              {number}
            </Typography>

            {today > 0 && (
              <Chip
                className={classes.chip}
                label={`+ ${today}`}
                size="small"
              />
            )}
          </>
        ) : (
          <CircularProgress style={{ color }} />
        )}
      </CardContent>
    </Card>
  );
};

export default SingleCard;
