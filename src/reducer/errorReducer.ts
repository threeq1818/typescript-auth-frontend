// errorReducer.ts

import { GET_ERRORS, UserActionType } from '../actions/types';

const initialState = {};

export default function (state = initialState, action: UserActionType): object {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}

