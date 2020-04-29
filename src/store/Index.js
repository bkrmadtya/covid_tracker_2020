import { createStore, combineReducers, applymiddleware } from 'redux';
import thunk from 'redux-thunk';

import dataReducer from './reducers/dataReducerr';

const rootReducer = combineReducers({
  data: dataReducer,
});

const store = createStore(rootReducer, applymiddleware(thunk));

export default store;
