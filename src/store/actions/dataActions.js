import {
  INIT_GLOBAL_DATA,
  GET_GLOBAL_MONTHLY_DATA,
  INIT_COUNTRY_LIST,
  ERROR,
  INFO,
} from './actionTypes';

import DataServices from 'services/DataServices';
import LocalStorage from 'services/LocalStorageServices';

import { setNotification } from 'store/actions/notificationActions';

const FIVE_MINUTES = 1000 * 60 * 5;

export const getInitialData = (isUpdating) => async (dispatch) => {
  try {
    const lastUpdatedTime = LocalStorage.getLastUpdateTime();
    const shouldUpdate = Date.now() - lastUpdatedTime >= FIVE_MINUTES;
    if (shouldUpdate) {
      LocalStorage.clearLocalStorage();
    }

    let data = LocalStorage.getLocalData(INIT_GLOBAL_DATA);

    if (!data || shouldUpdate) {
      data = await DataServices.getGlobalData();
      LocalStorage.storeDataLocally(INIT_GLOBAL_DATA, data);

      isUpdating && dispatch(setNotification('New data updated', INFO));
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
  } catch (e) {
    dispatch(setNotification(e.message, ERROR));
  }
};

export const getGlobalTrendData = () => async (dispatch) => {
  try {
    let data = LocalStorage.getLocalData(GET_GLOBAL_MONTHLY_DATA);

    if (!data) {
      data = await DataServices.getGlobalTrendData();
      LocalStorage.storeDataLocally(GET_GLOBAL_MONTHLY_DATA, data);
    }

    dispatch({
      type: GET_GLOBAL_MONTHLY_DATA,
      payload: data,
    });
  } catch (e) {
    dispatch(setNotification(e.message, ERROR));
  }
};
