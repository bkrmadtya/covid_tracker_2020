import { INIT_COUNTRY_LIST } from 'store/actions/actionTypes';

const initialState = {
  list: [],
  selected: '',
};

const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_COUNTRY_LIST:
      const list = payload.map(({ country, countryInfo: { flag } }) => ({
        country,
        flag,
      }));
      list.push({ country: 'Global' });
      console.log('[INIT_COUNTRY_LIST] : ', list);
      return { list, ...state };
    default:
      return state;
  }
};

export default countriesReducer;
