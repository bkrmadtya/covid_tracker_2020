import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import dataReducer from './reducers/dataReducer';
import countriesReducer from './reducers/countriesReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  countries: countriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
