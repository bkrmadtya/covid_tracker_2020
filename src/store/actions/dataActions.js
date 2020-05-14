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

export const getInitialData = (isUpdating) => async (dispatch) => {
  try {
    let data = LocalStorage.getLocalData(INIT_GLOBAL_DATA);

    console.log(data, !data);

    if (!data) {
      data = await DataServices.getGlobalData();

      isUpdating &&
        dispatch(setNotification('Data updated successfully', INFO));
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
    dispatch(
      setNotification('There is some error. Please, try again later.', ERROR)
    );
  }
};

export const getGlobalTrendData = () => async (dispatch) => {
  try {
    const data = await DataServices.getGlobalTrendData();

    dispatch({
      type: GET_GLOBAL_MONTHLY_DATA,
      payload: data,
    });
  } catch (e) {
    dispatch(
      setNotification('There is some error. Please, try again later.', ERROR)
    );
  }
};
