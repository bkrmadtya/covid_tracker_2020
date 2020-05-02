import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import SingleCard from './SingleCard';

import colors from 'styles/colors';

const DetailCards = ({ data }) => {
  if (!data) return null;

  const { cases, todayCases, deaths, todayDeaths, recovered } = data;

  return (
    <Grid container spacing={2}>
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
  data: state.countries.selected.data,
});

export default connect(mapStateToProps)(DetailCards);
