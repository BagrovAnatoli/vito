import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import adsReducer from './reducers/ads';

export const store = configureStore({
    reducer: {
        ads: adsReducer,
    },
    middleware: [thunk],
});

export default store;
