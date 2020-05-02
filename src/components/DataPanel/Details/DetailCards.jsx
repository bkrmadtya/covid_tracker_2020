import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import SingleCard from './SingleCard';

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
          color="rgb(222, 55, 0,0.5)"
        />
      </Grid>
      <Grid item xs={4}>
        <SingleCard title="Recovered" number={recovered} color="#21ba45" />
      </Grid>
      <Grid item xs={4}>
        <SingleCard
          title="Deaths"
          number={deaths}
          today={todayDeaths}
          color="grey"
        />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  data: state.countries.selected.data,
});

export default connect(mapStateToProps)(DetailCards);
