import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import {
  FormControl,
  InputLabel,
  MenuItem,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Select from 'react-select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    // minWidth: 120,
    width: '100%',
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  },
}));

const SelectCountry = React.memo(({ countries }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (data) => {
    setValue(data.value);
    console.log(data.value);
  };

  const _renderCountryList = () => {
    return (
      <Select
        options={countries.list}
        defaultValue={countries.list[0]}
        isSearchable={true}
        onChange={handleChange}
      />
    );
  };

  const memoizedCountryListRender = useCallback(_renderCountryList, [
    _renderCountryList,
  ]);

  return (
    <>
      {memoizedCountryListRender()}

      <Typography
        variant="h6"
        style={{ margin: '10px 0', textAlign: 'center' }}
      >
        {value}
      </Typography>
    </>
  );
});

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};

export default connect(mapStateToProps)(SelectCountry);
