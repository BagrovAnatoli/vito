import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import adsReducer from './reducers/ads';
import usersReducer from './reducers/users';
import authReducer from './reducers/auth';

export const store = configureStore({
    reducer: {
        ads: adsReducer,
        auth: authReducer,
        users: usersReducer,
    },
    middleware: [thunk],
});

export default store;
