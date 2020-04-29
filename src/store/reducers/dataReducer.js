import { INIT_DATA } from '../actionTypes';

const dataReducer = (state = [], { type, payload }) => {
  switch (type) {
    case INIT_DATA:
      return payload;
    default:
      return state;
  }
};

export default dataReducer;
