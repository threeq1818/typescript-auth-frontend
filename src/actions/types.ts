// types.ts

export const GET_ERRORS = 'GET_ERRORS';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export interface IUser {
  _id: string,
  email: string,
  name: string,
  password: string,
  password_confirm: string
}

export interface IUserState {
  isAuthenticated: boolean,
  user: IUser
}

interface GetErrorsAction {
  type: typeof GET_ERRORS,
  payload: object
}

interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER,
  payload: IUser
}

export type UserActionType = GetErrorsAction | SetCurrentUserAction;

export const CREATE_CHARACTER = 'CREATE_CHARACTER';
export const READ_CHARACTER = 'READ_CHARACTER';
export const UPDATE_CHARACTER = 'UPDATE_CHARACTER';
export const DELETE_CHARACTER = 'DELETE_CHARACTER';

export interface ICharacter {
  _id: string,
  name: string,
  job: string
}