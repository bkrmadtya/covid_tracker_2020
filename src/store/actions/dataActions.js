import { INIT_DATA, INIT_COUNTRY_LIST } from './actionTypes';

import DataServices from 'services/DataServices';

export const getInitialData = () => async (dispatch) => {
  try {
    const data = await DataServices.getGlobalData();

    dispatch({
      type: INIT_DATA,
      payload: data,
    });

    dispatch({
      type: INIT_COUNTRY_LIST,
      payload: data,
    });
  } catch (e) {
    console.log(e);
  }
};
