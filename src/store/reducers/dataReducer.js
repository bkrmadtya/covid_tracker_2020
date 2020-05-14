import {
  INIT_GLOBAL_DATA,
  GET_GLOBAL_MONTHLY_DATA,
} from 'store/actions/actionTypes';

const initialState = {
  globalData: null,
  monthlyData: null,
};

const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_GLOBAL_DATA:
      return { ...state, globalData: [...payload] };
    case GET_GLOBAL_MONTHLY_DATA:
      return { ...state, monthlyData: { ...payload } };
    default:
      return state;
  }
};

export default dataReducer;
