import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import DetailCards from 'components/DataPanel/Details/DetailCards';
import GeneralInfo from 'components/DataPanel/Details/GeneralInfo';

import SelectedCountry from './SelectedCountry';

const useStyles = makeStyles({
  root: {
    flex: 1,
    height: '100%',
  },
});

const DataPanel = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      // justify="space-between"
    >
      <Grid item>
        <SelectedCountry />
      </Grid>
      <Grid item>
        <DetailCards />
      </Grid>
      <Grid item>
        <GeneralInfo />
      </Grid>
    </Grid>
  );
};

export default DataPanel;
