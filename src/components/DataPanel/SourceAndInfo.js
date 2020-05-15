import React from 'react';
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell as MuiTableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  makeStyles,
  withStyles,
} from '@material-ui/core';

const TableCell = withStyles({
  root: {
    padding: '10px 20px',
    fontSize: 13,
  },
})(MuiTableCell);

const useStyles = makeStyles({
  title: {
    backgroundColor: '#66bb6a',
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  link: {
    color: 'green',
  },
});

const SourceAndInfo = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Card} elevation={4}>
      <Table size="small" aria-label="a dense table">
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell
              size="medium"
              colSpan={2}
              className={classes.title}
              textAlign="center"
            >
              Source and Advice
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover={true}>
            <TableCell component="th" scope="row" size="small" variant="head">
              Data source
            </TableCell>
            <TableCell>
              <a
                className={classes.link}
                href="https://corona.lmao.ninja"
                target="_"
              >
                Novel COVID API
              </a>
            </TableCell>
          </TableRow>

          <TableRow hover={true}>
            <TableCell component="th" scope="row" size="small" variant="head">
              Latest news on Covid 19
            </TableCell>
            <TableCell>
              <a
                className={classes.link}
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                target="_"
              >
                World Health Organization From WHO
              </a>
            </TableCell>
          </TableRow>

          <TableRow hover={true}>
            <TableCell component="th" scope="row" size="small" variant="head">
              General public advice
            </TableCell>
            <TableCell>
              <a
                className={classes.link}
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
                target="_"
              >
                World Health Organization
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SourceAndInfo;
