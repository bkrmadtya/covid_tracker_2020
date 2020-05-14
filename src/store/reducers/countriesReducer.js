import { INIT_COUNTRY_LIST, SELECT_COUNTRY } from 'store/actions/actionTypes';

const initialState = {
  list: [],
  selected: { value: 'Global', label: 'Global' }, // !important
};

const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_COUNTRY_LIST:
      return { ...state, list: [...payload] };
    case SELECT_COUNTRY:
      return { ...state, selected: payload };
    default:
      return state;
  }
};

export default countriesReducer;
