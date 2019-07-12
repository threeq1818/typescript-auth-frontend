// authentication.ts

import axios, { AxiosError } from 'axios';
import jwt_decode from '@types/jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../setAuthToken';

interface IUser {
    name: string,
    email: string,
    password: string,
    password_confirm: string
}

interface IToken {
    token: string
}

export const registerUser = (user: IUser, history: any) => (dispatch: any) => {
    axios.post<IUser>('/api/users/register', user)
        .then((res: Object) => {
            history.push('/login')
        })
        .catch((err) => {
            dispatch(JSON.stringify({
                type: GET_ERRORS,
                payload: err.response.data
            }));
        });
}

export const loginUser = (user: IUser) => (dispatch: any) => {
    axios.post<IToken>('/api/users/login', user)
        .then(res => {
            const token: string = res.data.token;

            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded: object = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const setCurrentUser = (decoded: object) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = (history: any) => (dispatch: any) => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/login');
}