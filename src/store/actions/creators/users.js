import {
    GET_CURRENT_USER_START,
    GET_CURRENT_USER_SUCCESS,
    GET_CURRENT_USER_ERROR,
    GET_ALL_USERS_START,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_ERROR,
    EDIT_CURRENT_USER_START,
    EDIT_CURRENT_USER_SUCCESS,
    EDIT_CURRENT_USER_ERROR,
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,
    EDIT_PASSWORD_START,
    EDIT_PASSWORD_SUCCESS,
    EDIT_PASSWORD_ERROR,
    UPLOAD_AVATAR_START,
    UPLOAD_AVATAR_SUCCESS,
    UPLOAD_AVATAR_ERROR,
} from '../types/users';

export const getCurrentUserStartAC = () => ({
    type: GET_CURRENT_USER_START,
});

export const getCurrentUserSuccessAC = () => ({
    type: GET_CURRENT_USER_SUCCESS,
});

export const getCurrentUserErrorAC = () => ({
    type: GET_CURRENT_USER_ERROR,
});

export const getAllUsersStartAC = () => ({
    type: GET_ALL_USERS_START,
});

export const getAllUsersSuccessAC = (users) => ({
    type: GET_ALL_USERS_SUCCESS,
    users,
});

export const getAllUsersErrorAC = (error) => ({
    type: GET_ALL_USERS_ERROR,
    error,
});

export const editCurrentUserStartAC = () => ({
    type: EDIT_CURRENT_USER_START,
});

export const editCurrentUserSuccessAC = () => ({
    type: EDIT_CURRENT_USER_SUCCESS,
});

export const editCurrentUserErrorAC = () => ({
    type: EDIT_CURRENT_USER_ERROR,
});

export const getUsersStartAC = () => ({
    type: GET_USERS_START,
});

export const getUsersSuccessAC = () => ({
    type: GET_USERS_SUCCESS,
});

export const getUsersErrorAC = () => ({
    type: GET_USERS_ERROR,
});

export const editPasswordStartAC = () => ({
    type: EDIT_PASSWORD_START,
});

export const editPasswordSuccessAC = () => ({
    type: EDIT_PASSWORD_SUCCESS,
});

export const editPasswordErrorAC = () => ({
    type: EDIT_PASSWORD_ERROR,
});

export const uploadAvatarStartAC = () => ({
    type: UPLOAD_AVATAR_START,
});

export const uploadAvatarSuccessAC = () => ({
    type: UPLOAD_AVATAR_SUCCESS,
});

export const uploadAvatarErrorAC = () => ({
    type: UPLOAD_AVATAR_ERROR,
});
