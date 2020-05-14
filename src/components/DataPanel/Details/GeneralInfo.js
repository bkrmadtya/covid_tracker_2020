import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
} from '@material-ui/core';

import colors from 'styles/colors';

const rows = {
  active: 'Active cases',
  // affectedCountries: 'No. of affected countries',
  critical: 'Critical',
  casesPerOneMillion: 'Cases per 1 million',
  deathsPerOneMillion: 'Deaths per 1 million',
  tests: 'No. of tests',
  testsPerOneMillion: 'Tests per 1 million',
  updated: 'Last update',
};

const useStyles = makeStyles({
  root: {
    borderTop: `5px solid ${colors.details}`,
    borderRadius: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
  },
});

const DetailCards = ({ data }) => {
  const classes = useStyles();

  if (!data) return null;

  return (
    <TableContainer component={Card} className={classes.root} elevation={4}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell size="medium" colSpan={2} className={classes.title}>
              General Info
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(rows).map((key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row" size="small" variant="head">
                {rows[key]}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {key === 'updated'
                  ? new Date(data[key]).toLocaleTimeString()
                  : data[key]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({
  data: state.countries.selected.details,
});

export default connect(mapStateToProps)(DetailCards);
