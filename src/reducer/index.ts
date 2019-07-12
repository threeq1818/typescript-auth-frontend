// index.ts

import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import characterReducer from './characterReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    character: characterReducer
});