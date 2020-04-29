import { INIT_COUNTRY_LIST } from 'store/actions/actionTypes';

const initialState = {
  list: [],
  selected: '',
};

const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_COUNTRY_LIST:
      // console.log('[INIT_COUNTRY_LIST] : ', payload);
      return payload;
    default:
      return state;
  }
};

export default countriesReducer;
