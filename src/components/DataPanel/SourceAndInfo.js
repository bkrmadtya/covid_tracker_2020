import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SourceAndInfo = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} elevation={4}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Data Source:
        </Typography>
        <Typography variant="subtitle1" component="h2" className={classes.pos}>
          <a href="https://corona.lmao.ninja" target="_">
            https://corona.lmao.ninja
          </a>
        </Typography>
        <Typography className={classes.title} gutterBottom>
          Latest news on Covid 19:
        </Typography>
        <Typography variant="subtitle1" component="h2">
          <a
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
            target="_"
          >
            https://www.who.int/emergencies/diseases/novel-coronavirus-2019
          </a>
        </Typography>
        <Typography className={classes.title} gutterBottom>
          Public advice from WHO:
        </Typography>
        <Typography variant="subtitle1" component="h2">
          <a
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
            target="_"
          >
            https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SourceAndInfo;
