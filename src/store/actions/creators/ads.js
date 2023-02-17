import {
    GET_ADS_START,
    GET_ADS_SUCCESS,
    GET_ADS_ERROR,
    GET_AD_BY_ID_START,
    GET_AD_BY_ID_SUCCESS,
    GET_AD_BY_ID_ERROR,
    SET_QUERY,
} from '../types/ads';

export const getAdsStartAC = () => ({
    type: GET_ADS_START,
});

export const getAdsSuccessAC = (ads) => ({
    type: GET_ADS_SUCCESS,
    ads,
});

export const getAdsErrorAC = (error) => ({
    type: GET_ADS_ERROR,
    error,
});

export const getAdByIdStartAC = () => ({
    type: GET_AD_BY_ID_START,
});

export const getAdByIdSuccessAC = (article) => ({
    type: GET_AD_BY_ID_SUCCESS,
    article,
});

export const getAdByIdErrorAC = (error) => ({
    type: GET_AD_BY_ID_ERROR,
    error,
});

export const setAdsQueryAC = (query) => ({
    type: SET_QUERY,
    query,
});
