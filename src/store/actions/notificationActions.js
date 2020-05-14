import {
  SET_NOTIFICATION,
  CLEAR_NOTIFICATION,
} from 'store/actions/actionTypes';

export const setNotification = (message, type) => (dispatch) => {
  dispatch({
    type: SET_NOTIFICATION,
    payload: { message, type },
  });

  setTimeout(() => {
    dispatch({
      type: CLEAR_NOTIFICATION,
    });
  }, 3000);
};
