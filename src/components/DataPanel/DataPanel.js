import React from 'react';
import { Grid, makeStyles, useTheme, useMediaQuery } from '@material-ui/core';

import DetailCards from 'components/DataPanel/Details/DetailCards';
import GeneralInfo from 'components/DataPanel/Details/GeneralInfo';

import SelectedCountry from './SelectedCountry';
import SourceAndInfo from './SourceAndInfo';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: '100%',
  },
});

const DataPanel = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      alignContent="space-between"
      spacing={isNotMobile ? 0 : 2}
    >
      <Grid item xs={12}>
        <SelectedCountry />
      </Grid>
      <Grid item xs={12}>
        <DetailCards />
      </Grid>
      <Grid item xs={12}>
        <GeneralInfo />
      </Grid>
      <Grid item xs={12}>
        <SourceAndInfo />
      </Grid>
    </Grid>
  );
};

export default DataPanel;
