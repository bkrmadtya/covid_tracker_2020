import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Chip, Icon, makeStyles, Typography } from '@material-ui/core';
import Select from 'react-select';

import { getDataByCountry } from 'store/actions/countriesActions';

const useStyles = makeStyles((theme) => ({
  selectedCountry: {
    textAlign: 'center',
  },
  continent: {
    marginBottom: '10px',
    textAlign: 'center',
  },
  flag: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    margin: '0 auto',
  },
}));

const computeMargin = (ifContinent) => {
  let margin = 10;

  if (ifContinent) {
    margin = '10px 0 0 0';
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
        {details?.countryInfo?.flag && (
          <Avatar
            className={classes.flag}
            variant="rounded"
            src={details?.countryInfo?.flag}
          ></Avatar>
        )}
      </Typography>
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
