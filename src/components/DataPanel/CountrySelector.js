import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

import { getDataByCountry } from 'store/actions/countriesActions';

const CountrySelector = ({ countries, getDataByCountry }) => {
  const handleChange = (data) => {
    getDataByCountry(data.value);
  };

  if (!countries.list) return null;

  return (
    <>
      <Select
        isSearchable={true}
        onChange={handleChange}
        options={countries.list}
        placeholder="Select a country..."
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};

export default connect(mapStateToProps, { getDataByCountry })(CountrySelector);
