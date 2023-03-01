import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
} from '../types/auth';

export const loginStartAC = () => ({
    type: LOGIN_START,
});

export const loginSuccessAC = (data) => ({
    type: LOGIN_SUCCESS,
    data,
});

export const loginErrorAC = (error) => ({
    type: LOGIN_ERROR,
    error,
});
