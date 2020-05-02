import { INIT_COUNTRY_LIST, SELECT_COUNTRY } from 'store/actions/actionTypes';

const initialState = {
  list: [],
  selected: { value: 'Global', label: 'Global' },
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

      return { ...state, list };

    case SELECT_COUNTRY:
      return { ...state, selected: payload };
    default:
      return state;
  }
};

export default countriesReducer;
