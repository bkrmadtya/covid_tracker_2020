import React from 'react';
import { connect } from 'react-redux';
import { Grid, makeStyles } from '@material-ui/core';

import SingleCard from './SingleCard';

import colors from 'styles/colors';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const DetailCards = ({ details }) => {
  const classes = useStyles();
  if (!details) return null;

  const { cases, todayCases, deaths, todayDeaths, recovered, todayRecovered } = details;

  return (
    <Grid className={classes.root} container spacing={2}>
      <Grid item xs={4}>
        <SingleCard
          title="Total cases"
          number={cases}
          today={todayCases}
          color={colors.cases}
        />
      </Grid>
      <Grid item xs={4}>
        <SingleCard
          title="Recovered"
          number={recovered}
          today={todayRecovered}
          color={colors.recovered}
        />
      </Grid>
      <Grid item xs={4}>
        <SingleCard
          title="Deaths"
          number={deaths}
          today={todayDeaths}
          color={colors.deaths}
        />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  details: state.countries.selected.details,
});

export default connect(mapStateToProps)(DetailCards);
