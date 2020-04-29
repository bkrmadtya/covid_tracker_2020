import { createStore, applymiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = {};

const store = createStore(reducer, applymiddleware(thunk));

export default store;
