import { INIT_DATA } from './actionTypes';

import DataServices from 'services/DataServices';

export const getInitialData = () => async (dispatch) => {
  try {
    const data = await DataServices.getGlobalData();

    dispatch({
      type: INIT_DATA,
      payload: data,
    });
  } catch (e) {
    console.log(e);
  }
};
