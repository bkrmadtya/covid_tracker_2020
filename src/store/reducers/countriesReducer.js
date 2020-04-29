import { INIT_COUNTRY_LIST } from 'store/actions/actionTypes';

const initialState = {
  list: [],
  selected: 'Global',
};

const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_COUNTRY_LIST:
      const list = payload.map(({ country, countryInfo: { flag } }) => ({
        country,
        flag,
      }));

      list.push({
        country: 'Global',
        flag: 'https://corona.lmao.ninja/assets/img/flags/unknown.png',
      });

      console.log('[INIT_COUNTRY_LIST] : ', list);
      return { ...state, list };
    default:
      return state;
  }
};

export default countriesReducer;
