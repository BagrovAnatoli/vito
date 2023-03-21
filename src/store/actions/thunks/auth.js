/* eslint-disable import/prefer-default-export */
import {
    loginStartAC,
    loginSuccessAC,
    loginErrorAC,
    logoutSuccessAC,
    registerStartAC,
    registerSuccessAC,
    registerErrorAC,
    refreshStartAC,
    refreshSuccessAC,
    refreshErrorAC,
} from '../creators/auth';

import auth from '../../../utils/auth';

import { authAPI } from '../../../api/api';

export const login = ({ email, password }) => async (dispatch) => {
    console.log('loginThunk');
    dispatch(loginStartAC());

    try {
        const response = await authAPI.login({ email, password });
        console.log(response);
        dispatch(loginSuccessAC(response.data));
    } catch (error) {
        console.log(error);
        dispatch(loginErrorAC(error));
    }
};

export const logout = () => (dispatch) => {
    console.log('logoutThunk');
    auth.off();
    dispatch(logoutSuccessAC());
};

export const register = (userData) => async (dispatch) => {
    console.log('registerThunk');
    dispatch(registerStartAC());

    try {
        const response = await authAPI.register(userData);
        console.log(response);
        dispatch(registerSuccessAC(response.data));
    } catch (error) {
        console.log(error);
        dispatch(registerErrorAC(error));
    }
};

export const refresh = ({ accessToken, refreshToken }) => async (dispatch) => {
    console.log('refreshThunk');
    dispatch(refreshStartAC());

    try {
        const response = await authAPI.refresh({ accessToken, refreshToken });
        console.log(response);
        dispatch(refreshSuccessAC(response.data));
    } catch (error) {
        console.log(error);
        dispatch(refreshErrorAC(error));
    }
};
