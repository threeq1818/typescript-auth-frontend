// authReducer.ts

import { IUserState, SET_CURRENT_USER, UserActionType } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState: IUserState = {
    isAuthenticated: false,
    user: { _id: '', email: '', name: '', password: '', password_confirm: '' }
};

export default function (state = initialState, action: UserActionType): IUserState {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        default:
            return state;
    }
}