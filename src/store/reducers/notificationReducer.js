import {
  SET_NOTIFICATION,
  CLEAR_NOTIFICATION,
} from 'store/actions/actionTypes';

const notificationReducer = (state = null, { type, payload }) => {
  switch (type) {
    case SET_NOTIFICATION:
      return { ...payload };
    case CLEAR_NOTIFICATION:
      return null;
    default:
      return state;
  }
};

export default notificationReducer;
