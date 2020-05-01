import { INIT_COUNTRY_LIST } from 'store/actions/actionTypes';

const initialState = {
  list: [],
  selected: 'Global',
};

const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_COUNTRY_LIST:
      const list = payload.map(({ country }) => ({
        value: country,
        label: country,
      }));

      list.unshift({
        value: 'Global',
        label: 'Global',
      });

      console.log('[INIT_COUNTRY_LIST] : ', list);
      return { ...state, list };
    default:
      return state;
  }
};

export default countriesReducer;
