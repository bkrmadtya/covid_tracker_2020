import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Card, Icon, makeStyles, Typography } from '@material-ui/core';
import Select from 'react-select';

import { getDataByCountry } from 'store/actions/countriesActions';

const useStyles = makeStyles((theme) => ({
  selectedCountry: {
    textAlign: 'center',
  },
  continent: {
    marginBottom: '15px',
    textAlign: 'center',
  },
  flag: {
    display: 'block',
    height: theme.spacing(3),
    margin: '5px auto',
    padding: 2,
    boxShadow:
      '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
  },
}));

const computeMargin = (ifContinent) => {
  let margin = 15;

  if (ifContinent) {
    margin = '15px 0 0 0';
  }

  return margin;
};

const SelectCountry = React.memo(({ countries, getDataByCountry }) => {
  const classes = useStyles();
  const handleChange = (data) => {
    getDataByCountry(data.value);
  };

  if (!countries.list || !countries.selected) return null;

  const { value, details } = countries.selected;

  return (
    <>
      <Select
        options={countries.list}
        placeholder="Select a country"
        isSearchable={true}
        onChange={handleChange}
      />
      <Typography
        className={classes.selectedCountry}
        style={{ margin: computeMargin(details?.continent) }}
        variant="h6"
      >
        {value}
      </Typography>

      {details?.countryInfo?.flag && (
        <img
          className={classes.flag}
          variant="square"
          src={details?.countryInfo?.flag}
        />
      )}

      {details?.continent && (
        <Typography className={classes.continent} variant="subtitle1">
          {details.continent}
        </Typography>
      )}
    </>
  );
});

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};

export default connect(mapStateToProps, { getDataByCountry })(SelectCountry);
