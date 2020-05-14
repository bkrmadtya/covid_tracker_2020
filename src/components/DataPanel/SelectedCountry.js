import React from 'react';
import { connect } from 'react-redux';
import { Card, Grid, makeStyles, Typography } from '@material-ui/core';
import Select from 'react-select';

import { getDataByCountry } from 'store/actions/countriesActions';

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: '10px',
  },
  selectedCountry: {
    textAlign: 'center',
    fontWeight: 600,
  },
  continent: {
    textAlign: 'center',
    margin: '-5px 0',
  },
  flag: {
    display: 'block',
    height: theme.spacing(5),
    margin: '0px auto',
    padding: 2,
    boxShadow:
      '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
  },
}));

const computeMargin = (ifContinent) => {
  let margin = 7;

  if (ifContinent) {
    margin = '7px 0 0 0';
  }

  return margin;
};

const SelectedCountry = React.memo(({ countries, getDataByCountry }) => {
  const classes = useStyles();
  const handleChange = (data) => {
    getDataByCountry(data.value);
  };

  if (!countries.list || !countries.selected) return null;

  const { value, details } = countries.selected;

  return (
    <>
      <Select
        isSearchable={true}
        onChange={handleChange}
        options={countries.list}
        placeholder="Select a country"
      />

      <Grid
        className={classes.grid}
        container
        direction="column"
        alignContent="center"
      >
        <Grid item>
          {details?.countryInfo?.flag && (
            <img
              className={classes.flag}
              src={details?.countryInfo?.flag}
              variant="square"
            />
          )}
        </Grid>
        <Grid item>
          <Typography
            className={classes.selectedCountry}
            style={{ margin: computeMargin(details?.continent) }}
            variant="h5"
          >
            {value}
          </Typography>
        </Grid>
        <Grid item>
          {details?.continent && (
            <Typography className={classes.continent} variant="subtitle1">
              {details.continent}
            </Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
});

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};

export default connect(mapStateToProps, { getDataByCountry })(SelectedCountry);
