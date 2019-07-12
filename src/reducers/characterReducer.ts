// characterReducer.ts

import { CREATE_CHARACTER, READ_CHARACTER, UPDATE_CHARACTER, DELETE_CHARACTER } from '../actions/types';
import isEmpty from '../validation/is-empty';
import { string } from 'prop-types';

const initialState = {
    data: [
        {
            _id: string,
            name: string,
            job: string
        }
    ]
}

export default function (state = initialState, action: { type: string, payload: { _id: string, name: string, job: string } }) {
    switch (action.type) {
        case CREATE_CHARACTER:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case READ_CHARACTER:
            return {
                ...state,
                data: action.payload
            }
        case DELETE_CHARACTER:
            const newData = state.data.filter(value => action.payload._id != value._id.toString());
            return {
                ...state,
                data: newData
            }
        default:
            return state;
    }
}