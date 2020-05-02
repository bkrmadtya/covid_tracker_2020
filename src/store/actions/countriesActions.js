import { SELECT_COUNTRY } from './actionTypes';

import DataServices from 'services/DataServices';

export const getDataByCountry = (selectedCountry) => async (dispatch) => {
  const data = await DataServices.getDataByCountry(selectedCountry);
  console.log('SELECTED COUNTRY DATA :: ', data);

  const country = {
    value: selectedCountry,
    label: selectedCountry,
    data,
  };

  dispatch({
    type: SELECT_COUNTRY,
    payload: country,
  });
};
