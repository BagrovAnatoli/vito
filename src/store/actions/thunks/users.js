import {
    getCurrentUserStartAC,
    getCurrentUserSuccessAC,
    getCurrentUserErrorAC,
    getAllUsersStartAC,
    getAllUsersSuccessAC,
    getAllUsersErrorAC,
} from '../creators/users';

import { userAPI } from '../../../api/api';

export const getCurrentUser = () => async (dispatch) => {
    console.log('getCurrentUserThunk');

    dispatch(getCurrentUserStartAC());

    try {
        const response = await userAPI.getCurrentUser();
        console.log(response);
        dispatch(getCurrentUserSuccessAC(response.data));
    } catch (error) {
        console.log(error);
        dispatch(getCurrentUserErrorAC);
    }
};

export const getAllUsers = () => async (dispatch) => {
    console.log('getAllUsersThunk');

    dispatch(getAllUsersStartAC());

    try {
        const response = await userAPI.getAllUsers();
        console.log(response);
        dispatch(getAllUsersSuccessAC(response.data));
    } catch (error) {
        console.log(error);
        dispatch(getAllUsersErrorAC);
    }
};
