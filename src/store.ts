// store.ts

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const inititalState = {};

const store = createStore(
    rootReducer,
    inititalState,
    applyMiddleware(thunk));

export default store;