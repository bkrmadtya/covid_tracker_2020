import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  Paper,
  Table,
  TableBody,
  TableCell as MuiTableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
  withStyles,
} from '@material-ui/core';

import colors from 'styles/colors';

const TableCell = withStyles({
  root: {
    padding: '10px 15px',
  },
})(MuiTableCell);

const rows = {
  active: 'Active cases',
  affectedCountries: 'No. of affected countries',
  critical: 'Critical',
  casesPerOneMillion: 'Cases per million',
  deathsPerOneMillion: 'Deaths per million',
  population: 'Population',
  tests: 'No. of tests',
  testsPerOneMillion: 'Tests per million',
  updated: 'Last update',
};

const useStyles = makeStyles({
  title: {
    backgroundColor: colors.details,
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});

const _generateTableRow = (data) => {
  if (!data.affectedCountries) {
    console.log(data.affectedCountries);
    delete rows.affectedCountries;
  }
  return Object.keys(rows).map((key) => (
    <TableRow hover={true} key={key}>
      <TableCell component="th" scope="row" size="small" variant="head">
        {rows[key]}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {key === 'updated'
          ? new Date(data[key]).toLocaleString()
          : data[key].toLocaleString()}
      </TableCell>
    </TableRow>
  ));
};

const DetailCards = ({ data }) => {
  const classes = useStyles();

  if (!data) return null;

  return (
    <TableContainer component={Card} elevation={4}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell size="medium" colSpan={2} className={classes.title}>
              General Info
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{_generateTableRow(data)}</TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({
  data: state.countries.selected.details,
});

export default connect(mapStateToProps)(DetailCards);
