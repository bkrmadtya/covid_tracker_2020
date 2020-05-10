import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import LineChart from 'components/Charts/LineChart';
import MapChart from 'components/Charts/MapChart';

import { getGlobalTrendData } from 'store/actions/dataActions';

const Charts = ({ getGlobalTrendData }) => {
  useEffect(() => {
    getGlobalTrendData();
  }, [getGlobalTrendData]);

  return (
    <>
      <h1>Charts</h1>
      <MapChart />
      <LineChart />
    </>
  );
};

export default connect(null, { getGlobalTrendData })(Charts);
