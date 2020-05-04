import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import DetailCards from 'components/DataPanel/Details/DetailCards';
import DetailBoard from 'components/DataPanel/Details/DetailBoard';

import SelectCountry from './SelectCountry';

const useStyles = makeStyles({
  root: {
    // height: '100%',
    flex: 1,
  },
});

const DataPanel = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="space-between"
      spacing={3}
    >
      <Grid item>
        <SelectCountry />
      </Grid>
      <Grid item>
        <DetailCards />
      </Grid>
      <Grid item>
        <DetailBoard />
      </Grid>
    </Grid>
  );
};

export default DataPanel;