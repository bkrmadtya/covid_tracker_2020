import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  Typography,
  Avatar,
} from '@material-ui/core';

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

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log(countries);

  const _renderCountryList = () => {
    return countries.list.map(({ country, flag }) => {
      return (
        <MenuItem key={country} value={country}>
          {country}
          <Avatar src={flag} />
        </MenuItem>
      );
    });
  };

  const memoizedCountryListRender = useCallback(_renderCountryList, [
    _renderCountryList,
  ]);

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="countries-list">Select a country</InputLabel>
        <Select
          MenuProps={{ disableScrollLock: true }}
          value={value}
          onChange={handleChange}
          //   defaultValue={countries.selected}
        >
          {memoizedCountryListRender()}
          {/* {_renderCountryList()} */}
        </Select>
      </FormControl>

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
