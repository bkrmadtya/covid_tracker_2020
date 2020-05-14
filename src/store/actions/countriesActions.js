import { SELECT_COUNTRY, ERROR, INFO } from './actionTypes';

import DataServices from 'services/DataServices';
import LocalStorage from 'services/LocalStorageServices';

import { setNotification } from 'store/actions/notificationActions';

export const getDataByCountry = (selectedCountry) => async (dispatch) => {
  try {
    let data = LocalStorage.getLocalData(SELECT_COUNTRY);

    /**
     * Only fetch data if there is no locally saved data
     * Or, new country is not selected
     * Selected country is "Global" by default when the application starts for the first time or refreshes
     */

    if (!data || (selectedCountry && data?.label !== selectedCountry)) {
      data = await DataServices.getDataByCountry(selectedCountry || 'Global');
    }

    /**
     * Same logic as above
     * If the data comes from local storage then it has data.value
     * If a new country is selected then from selectedCountry
     * Or default "Global"
     */

    const country = {
      value: data.value || selectedCountry || 'Global',
      label: data.value || selectedCountry || 'Global',
      details: data.details || data,
    };

    dispatch({
      type: SELECT_COUNTRY,
      payload: country,
    });

    dispatch(setNotification('Data updated successfully', INFO));

    LocalStorage.storeDataLocally(SELECT_COUNTRY, country);
  } catch (e) {
    dispatch(setNotification(e.message, ERROR));
  }
};
