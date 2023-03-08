/* eslint-disable default-param-last */
import {
    GET_CURRENT_USER_START,
    GET_CURRENT_USER_SUCCESS,
    GET_CURRENT_USER_ERROR,
    GET_ALL_USERS_START,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_ERROR,
    // EDIT_CURRENT_USER_START,
    // EDIT_CURRENT_USER_SUCCESS,
    // EDIT_CURRENT_USER_ERROR,
    // GET_USERS_START,
    // GET_USERS_SUCCESS,
    // GET_USERS_ERROR,
    // EDIT_PASSWORD_START,
    // EDIT_PASSWORD_SUCCESS,
    // EDIT_PASSWORD_ERROR,
    // UPLOAD_AVATAR_START,
    // UPLOAD_AVATAR_SUCCESS,
    // UPLOAD_AVATAR_ERROR,
} from '../actions/types/users';

const initialState = {
    userLoading: false,
    userError: false,
    usersLoading: false,
    usersError: false,
    user: {
        id: '',
        name: '',
        email: '',
        city: '',
        avatar: '',
        sellsFrom: '',
        phone: '',
        role: '',
        surname: '',
    },
    users: [],
};

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENT_USER_START: {
            return {
                ...state,
                userLoading: true,
            };
        }

        case GET_CURRENT_USER_SUCCESS: {
            return {
                ...state,
                userLoading: false,
                userError: false,
                user: {
                    ...state.user,
                    id: action.id,
                    name: action.name,
                    email: action.email,
                    city: action.city,
                    avatar: action.avatar,
                    sellsFrom: action.sellsFrom,
                    phone: action.phone,
                    role: action.role,
                    surname: action.surname,
                },
            };
        }

        case GET_CURRENT_USER_ERROR: {
            return {
                ...state,
                usersLoading: false,
                usersError: action.error,
            };
        }

        case GET_ALL_USERS_START: {
            return {
                ...state,
                usersLoading: true,
            };
        }

        case GET_ALL_USERS_SUCCESS: {
            return {
                ...state,
                usersLoading: false,
                usersError: false,
                users: action.users,
            };
        }

        case GET_ALL_USERS_ERROR: {
            return {
                ...state,
                usersLoading: false,
                usersError: action.error,
            };
        }

        default:
            return state;
    }
}
