import React from 'react';
import { connect } from 'react-redux';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Folder as FolderIcon } from '@material-ui/icons';

import colors from 'styles/colors';

const rows = {
  active: 'Active',
  // affectedCountries: 'No. of affected countries',
  critical: 'Critical',
  casesPerOneMillion: 'Cases per 1 million',
  deathsPerOneMillion: 'Deaths per 1 million',
  tests: 'Tests',
  testsPerOneMillion: 'Tests per 1 million',
  todayCases: 'Today cases',
  updated: 'Updated',
};

const useStyles = makeStyles({
  root: {
    borderTop: `5px solid ${colors.details}`,
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
    <TableContainer
      className={classes.root}
      component={Paper}
      elevation={4}
      style={{}}
    >
      <Table>
        <TableHead>
          <TableRow style={{ width: '100%' }}>
            <TableCell colSpan={2} className={classes.title}>
              Details
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(rows).map((key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {rows[key]}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {data[key]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({
  data: state.countries.selected.data,
});

export default connect(mapStateToProps)(DetailCards);
