import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  Typography,
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

const SelectCountry = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('Global');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="countries-list">Select a country</InputLabel>
        <Select
          MenuProps={{ disableScrollLock: true }}
          value={value}
          onChange={handleChange}
          defaultValue="Global"
        >
          <MenuItem value={'Global'}>Global</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
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
};

export default SelectCountry;
