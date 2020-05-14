import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import dataReducer from 'store/reducers/dataReducer';
import countriesReducer from 'store/reducers/countriesReducer';
import notificationReducer from 'store/reducers/notificationReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  countries: countriesReducer,
  notification: notificationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
