/* eslint-disable import/prefer-default-export */
import {
    loginStartAC,
    loginSuccessAC,
    loginErrorAC,
} from '../creators/auth';

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
