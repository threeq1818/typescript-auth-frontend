// character.ts

import axios from 'axios';
import { GET_ERRORS, CREATE_CHARACTER, READ_CHARACTER, UPDATE_CHARACTER, DELETE_CHARACTER } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';


export const createCharacter = (data: object) => (dispatch: any) => {
    axios.post('api/characters/', data)
        .then(res => {
            dispatch({
                type: CREATE_CHARACTER,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const readCharacter = (id: string) => (dispatch: any) => {
    axios.get(`api/characters/${id}`)
        .then(res => {
            dispatch({
                type: READ_CHARACTER,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const readCharacterAll = () => (dispatch: any) => {
    axios.get(`api/characters/`)
        .then(res => {
            dispatch({
                type: READ_CHARACTER,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const deleteCharacter = (id: string) => (dispatch: any) => {
    axios.delete(`api/characters/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_CHARACTER,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}