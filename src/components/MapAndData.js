import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import DataPanel from 'components/DataPanel';
import MapView from 'components/Map/MapView';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    flexGrow: 1,
    height: '850px',
  },
  items: {
    flexGrow: 1,
  },
}));

const MapAndData = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.grid} container spacing={3}>
      <Grid className={classes.items} item xs={12} lg={8}>
        <MapView />
      </Grid>
      <Grid className={classes.items} item xs={12} lg={4}>
        <DataPanel />
      </Grid>
    </Grid>
  );
};

export default MapAndData;
