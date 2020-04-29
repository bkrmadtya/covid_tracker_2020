import { INIT_DATA } from '../actionTypes';

import DataServices from 'services/DataServices';

const getInitialData = () => async (dispatch) => {
  try {
    const data = await DataServices.getDataByCountry('all');

    dispatch({
      type: INIT_DATA,
      payload: data,
    });
  } catch (e) {
    console.log(e);
  }
};

export default {
  getInitialData,
};
