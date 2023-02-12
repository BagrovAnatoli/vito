/* eslint-disable default-param-last */
import {
    GET_ADS_START,
    GET_ADS_SUCCESS,
    GET_ADS_ERROR,
} from '../actions/types/ads';

const initialState = {
    adsLoading: false,
    adsError: false,
    ads: [],
};

export default function adsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ADS_START: {
            return {
                ...state,
                adsLoading: true,
            };
        }

        case GET_ADS_SUCCESS: {
            return {
                ...state,
                adsLoading: false,
                adsError: false,
                ads: action.ads,
            };
        }

        case GET_ADS_ERROR: {
            return {
                ...state,
                adsLoading: false,
                adsError: action.error,
            };
        }

        default:
            return state;
    }
}
