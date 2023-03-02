import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    REFRESH_START,
    REFRESH_SUCCESS,
    REFRESH_ERROR,
} from '../types/auth';

export const loginStartAC = () => ({
    type: LOGIN_START,
});

export const loginSuccessAC = (data) => ({
    type: LOGIN_SUCCESS,
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    tokenType: data.token_type,
});

export const loginErrorAC = (error) => ({
    type: LOGIN_ERROR,
    error,
});

export const registerStartAC = () => ({
    type: REGISTER_START,
});

export const registerSuccessAC = (data) => ({
    type: REGISTER_SUCCESS,
    id: data.id,
    email: data.email,
    role: data.role,
    name: data.name,
    surname: data.surname,
    city: data.city,
    avatar: data.avatar,
    sellsFrom: data.sells_from,
    phone: data.phone,
});

export const registerErrorAC = (error) => ({
    type: REGISTER_ERROR,
    error,
});

export const refreshStartAC = () => ({
    type: REFRESH_START,
});

export const refreshSuccessAC = (data) => ({
    type: REFRESH_SUCCESS,
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    tokenType: data.token_type,
});

export const refreshErrorAC = (error) => ({
    type: REFRESH_ERROR,
    error,
});
