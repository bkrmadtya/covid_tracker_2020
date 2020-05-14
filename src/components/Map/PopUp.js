import React from 'react';
import { Popup } from '@urbica/react-map-gl';
import { Divider, Grid, Typography, makeStyles } from '@material-ui/core';
import { orange, green, grey } from '@material-ui/core/colors';
import './popup.css';

const useStyles = makeStyles({
  root: { width: '180px', maxWidth: 'auto', padding: 5 },
  divider: {
    padding: '4px 0',
  },
  flag: {
    display: 'block',
    height: '1.2em',
    padding: 1,
    boxShadow:
      '0px 1px 1px -1px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 2px 0px rgba(0,0,0,0.12)',
  },
  header: {
    padding: '2px 0',
    alignItems: 'center',
  },
  popup: {
    padding: 0,
  },
  rightAlign: {
    textAlign: 'right',
  },
});

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
      closeButton={false}
      closeOnClick={false}
      latitude={lat}
      longitude={lng}
      offset={radius / 2 + 2}
      style={{ padding: 0 }}
    >
      <Grid
        alignItems="center"
        container
        className={classes.root}
        direction="row"
      >
        <Grid item xs={12}>
          <Grid container className={classes.header}>
            <Grid item xs={2}>
              <img className={classes.flag} src={flag} variant="square" />
            </Grid>
            <Grid item xs={10} className={classes.rightAlign}>
              <Typography>{country.country}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Typography style={{ color: 'orangered' }}>Total cases</Typography>
        </Grid>
        <Grid item xs={6} className={classes.rightAlign}>
          <Typography style={{ color: 'orangered' }}>{cases}</Typography>
        </Grid>

        <Grid item xs={12} className={classes.divider}>
          <Divider />
        </Grid>

        <Grid item xs={1}>
          {orangeCircle}
        </Grid>
        <Grid item xs={6}>
          <Typography>Active</Typography>
        </Grid>
        <Grid item xs={5} className={classes.rightAlign}>
          <Typography>{active}</Typography>
        </Grid>

        <Grid item xs={1}>
          {greenCircle}
        </Grid>
        <Grid item xs={6}>
          <Typography>Recovered</Typography>
        </Grid>
        <Grid item xs={5} className={classes.rightAlign}>
          <Typography>{recovered}</Typography>
        </Grid>

        <Grid item xs={1}>
          {greyCircle}
        </Grid>
        <Grid item xs={6}>
          <Typography>Fatal</Typography>
        </Grid>
        <Grid item xs={5} className={classes.rightAlign}>
          <Typography>{deaths}</Typography>
        </Grid>
      </Grid>
    </Popup>
  );
};

export default PopUp;
