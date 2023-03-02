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

const initialState = {
    loginWaiting: false,
    loginError: false,
    registerWaiting: false,
    registerError: false,
    refreshWaiting: false,
    refreshError: false,
    accessToken: '',
    refreshToken: '',
    tokenType: '',
    user: {
        id: '',
        email: '',
        role: '',
        name: '',
        surname: '',
        city: '',
        avatar: '',
        sells_from: '',
        phone: '',
    },
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_START: {
            return {
                ...state,
                registerWaiting: true,
            };
        }

        case REGISTER_SUCCESS: {
            return {
                ...state,
                registerWaiting: false,
                registerError: false,
                id: action.id,
                user: {
                    ...state.user,
                    email: action.email,
                    role: action.role,
                    name: action.name,
                    surname: action.surname,
                    city: action.city,
                    avatar: action.avatar,
                    sellsFrom: action.sellsFrom,
                    phone: action.phone,
                }
                
            };
        }

        case REGISTER_ERROR: {
            return {
                ...state,
                registerWaiting: false,
                registerError: action.error,
            };
        }

        case LOGIN_START: {
            return {
                ...state,
                loginWaiting: true,
            };
        }

        case LOGIN_SUCCESS: {
            return {
                ...state,
                loginWaiting: false,
                loginError: false,
                accessToken: action.accessToken,
                refreshToken: action.refreshToken,
                tokenType: action.tokenType,
            };
        }

        case LOGIN_ERROR: {
            return {
                ...state,
                loginWaiting: false,
                loginError: action.error,
            };
        }

        case REFRESH_START: {
            return {
                ...state,
                refreshWaiting: true,
            };
        }

        case REFRESH_SUCCESS: {
            return {
                ...state,
                refreshWaiting: false,
                refreshError: false,
                accessToken: action.accessToken,
                refreshToken: action.refreshToken,
                tokenType: action.tokenType,
            };
        }

        case REFRESH_ERROR: {
            return {
                ...state,
                refreshWaiting: false,
                refreshError: action.error,
            };
        }

        default:
            return state;
    }
}