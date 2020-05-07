import { INIT_GLOBAL_DATA, INIT_COUNTRY_LIST } from './actionTypes';

import DataServices from 'services/DataServices';
import LocalStorage from 'services/LocalStorageServices';

export const getInitialData = () => async (dispatch) => {
  try {
    let data = LocalStorage.getLocalData(INIT_GLOBAL_DATA);

    if (!data) {
      data = await DataServices.getGlobalData();
    }

    dispatch({
      type: INIT_GLOBAL_DATA,
      payload: data,
    });

    const countryList = data.map(({ country }) => ({
      value: country,
      label: country,
    }));

    countryList.unshift({
      value: 'Global',
      label: 'Global',
    });

    dispatch({
      type: INIT_COUNTRY_LIST,
      payload: countryList,
    });

    LocalStorage.storeDataLocally(INIT_GLOBAL_DATA, data);
  } catch (e) {
    console.log(e);
  }
};
