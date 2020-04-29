import { INIT_DATA } from 'store/actions/actionTypes';

const dataReducer = (state = [], { type, payload }) => {
  switch (type) {
    case INIT_DATA:
      // console.log('[INIT DATA] : ', payload);
      return payload;
    default:
      return state;
  }
};

export default dataReducer;
