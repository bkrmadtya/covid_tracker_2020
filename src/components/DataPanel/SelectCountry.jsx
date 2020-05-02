import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import Select from 'react-select';

import { getDataByCountry } from 'store/actions/countriesActions';

const SelectCountry = React.memo(({ countries, getDataByCountry }) => {
  const handleChange = (data) => {
    getDataByCountry(data.value);
  };

  if (!countries.list || !countries.selected) return null;

  const { value, label } = countries.selected;

  return (
    <>
      <Select
        options={countries.list}
        defaultValue={{
          value,
          label,
        }}
        isSearchable={true}
        onChange={handleChange}
      />

      <Typography
        variant="h6"
        style={{ marginTop: '10px', textAlign: 'center' }}
      >
        {countries.selected.value}
      </Typography>
    </>
  );
});

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};

export default connect(mapStateToProps, { getDataByCountry })(SelectCountry);
