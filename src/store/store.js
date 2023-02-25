import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import adsReducer from './reducers/ads';
import usersReducer from './reducers/users';

export const store = configureStore({
    reducer: {
        ads: adsReducer,
        users: usersReducer,
    },
    middleware: [thunk],
});

export default store;
