import React from 'react';
import { Popup } from '@urbica/react-map-gl';
import { Card, Divider, Grid, Typography, makeStyles } from '@material-ui/core';
import { orange, green, grey } from '@material-ui/core/colors';
import { Flag as FlagIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: { width: '190px', maxWidth: '250px', padding: 5 },
  rightAlign: {
    textAlign: 'right',
  },
}));

const circle = (color) => (
  <div
    style={{
      height: 8,
      width: 8,
      backgroundColor: color,
      borderRadius: '50%',
    }}
  />
);

const orangeCircle = circle(orange[500]);
const greyCircle = circle(grey[500]);
const greenCircle = circle(green[500]);

const PopUp = ({ country, radius }) => {
  const classes = useStyles();
  const { cases, recovered, active, deaths, countryInfo } = country;
  const { lat, long: lng, flag } = countryInfo;

  return (
    <Popup
      offset={radius / 2 + 2}
      longitude={lng}
      latitude={lat}
      closeButton={false}
      closeOnClick={false}
    >
      <Grid
        container
        className={classes.root}
        direction="row"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Typography>
            <FlagIcon />
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.rightAlign}>
          <Typography component="p">Name</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography style={{ color: 'orangered' }}>Total cases</Typography>
        </Grid>
        <Grid item xs={6} className={classes.rightAlign}>
          <Typography style={{ color: 'orangered' }}>12345</Typography>
        </Grid>

        <Grid item xs={12} style={{ padding: '5px 0' }}>
          <Divider />
        </Grid>

        <Grid item xs={1}>
          {orangeCircle}
        </Grid>
        <Grid item xs={6}>
          <Typography>Active</Typography>
        </Grid>
        <Grid item xs={5} className={classes.rightAlign}>
          <Typography>0</Typography>
        </Grid>

        <Grid item xs={1}>
          {greenCircle}
        </Grid>
        <Grid item xs={6}>
          <Typography>Recovered</Typography>
        </Grid>
        <Grid item xs={5} className={classes.rightAlign}>
          <Typography>12345</Typography>
        </Grid>

        <Grid item xs={1}>
          {greyCircle}
        </Grid>
        <Grid item xs={6}>
          <Typography>Fatal</Typography>
        </Grid>
        <Grid item xs={5} className={classes.rightAlign}>
          <Typography>0</Typography>
        </Grid>
      </Grid>
    </Popup>
  );
};

const styles = {
  container: {
    padding: '5px 5px 0 5px ',
    margin: 0,
  },
  header: {
    paddingBottom: 5,
  },
  flag: {
    height: '19px',
  },
  list: {
    padding: 0,
  },
  listItem: {
    fontWeight: 100,
    textAlign: 'left',
    paddingTop: '2px',
  },
  label: {
    marginRight: '10px',
  },
  lightFont: {
    fontWeight: 100,
  },
};

export default PopUp;
