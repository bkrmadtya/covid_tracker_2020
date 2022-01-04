import React from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';

import DataPanel from 'components/MapAndData/DataPanel';
import MapView from 'components/MapAndData/Map/MapView';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    flexGrow: 1,
    height: '890px',
  },
  items: {
    flexGrow: 1,
  },
}));

const MapAndData = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Box my={2}>
        <Grid className={classes.grid} container spacing={3}>
          <Grid className={classes.items} item xs={12} lg={8}>
            <MapView />
          </Grid>
          <Grid className={classes.items} item xs={12} lg={4}>
            <DataPanel />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default React.memo(MapAndData);
